import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg">
      <Header />
      <main>
        <VideoSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;