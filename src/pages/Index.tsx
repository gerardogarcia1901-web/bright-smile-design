import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ClinicExperience from "@/components/ClinicExperience";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DifferentiatorSection />
      <ClinicExperience />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
