import { createRoot } from "react-dom/client";
import { StrictMode } from 'react'
import App from "./App.tsx";
import "./index.css";
import { PostHogProvider } from 'posthog-js/react'
import { AnalyticsProvider } from "./context/AnalyticsContext.tsx";

const posthog_options = {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    defaults: '2025-11-30',
    opt_in_capturing_by_default: false,
    capture_pageview: false, // We manually trigger this after consent
    capture_pageleave: false, // We manually trigger this to ensure correct timing
} as const

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={posthog_options}>
            <AnalyticsProvider>
                <App />
            </AnalyticsProvider>
        </PostHogProvider>
    </StrictMode>
);
