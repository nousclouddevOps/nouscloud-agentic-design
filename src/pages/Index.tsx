
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ConsultingSection from "@/components/ConsultingSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ConsultingSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
