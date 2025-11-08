import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <VideoSection />
          <RegistrationForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;