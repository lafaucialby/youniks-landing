import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
//import TestimonialsSection from "@/components/TestimonialsSection";
//import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <DifferentiatorsSection />
      {/*<TestimonialsSection />
      {/*<FinalCTASection />*/}
      <Footer />
    </main>
  );
};

export default Index;