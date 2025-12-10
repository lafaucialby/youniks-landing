import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { usePostHog } from 'posthog-js/react';

interface AnalyticsContextType {
    trackEvent: (eventName: string, properties?: Record<string, any>) => void;
    acceptCookies: () => void;
    isConsentGiven: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const posthog = usePostHog();
    const [isConsentGiven, setIsConsentGiven] = useState(false);
    const eventBuffer = useRef<Array<{ name: string; props?: Record<string, any> }>>([]);

    useEffect(() => {
        const consent = localStorage.getItem("youniks-cookie-consent") === "true";
        if (consent) {
            setIsConsentGiven(true);
            if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS) {
                posthog.opt_in_capturing();
                posthog.capture('$pageview');
            }
        }
    }, [posthog]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (isConsentGiven && (import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS)) {
                posthog.capture('$pageleave');
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [posthog, isConsentGiven]);

    const acceptCookies = () => {
        localStorage.setItem("youniks-cookie-consent", "true");
        setIsConsentGiven(true);

        if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS) {
            posthog.opt_in_capturing();
            posthog.capture('$pageview'); // Capture the initial pageview now that we have consent

            // Flush buffer
            eventBuffer.current.forEach(({ name, props }) => {
                posthog.capture(name, props);
            });
            eventBuffer.current = [];
        }
    };

    const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        if (!import.meta.env.PROD && !import.meta.env.VITE_ENABLE_ANALYTICS) {
            console.log(`[Analytics Dev] Event: ${eventName}`, properties);
            return;
        }

        if (isConsentGiven) {
            posthog.capture(eventName, properties);
        } else {
            eventBuffer.current.push({ name: eventName, props: properties });
        }
    };

    // Scroll tracking
    const hasScrolledToBottom = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (hasScrolledToBottom.current) return;

            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;

            if (scrollTop + clientHeight >= scrollHeight - 50) { // 50px threshold
                trackEvent('scroll_down');
                hasScrolledToBottom.current = true;
                // Optional: Remove listener if we only care about the first time
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [trackEvent]);

    return (
        <AnalyticsContext.Provider value={{ trackEvent, acceptCookies, isConsentGiven }}>
            {children}
        </AnalyticsContext.Provider>
    );
};

export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (context === undefined) {
        throw new Error('useAnalytics must be used within an AnalyticsProvider');
    }
    return context;
};
