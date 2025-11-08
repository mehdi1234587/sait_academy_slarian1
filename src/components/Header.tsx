import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-cyan/20 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold neon-text">
              مهدی سالاریان
            </h1>
          </div>
          <Button 
            onClick={scrollToRegistration}
            className="neon-button h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold"
          >
            خرید دوره کامل
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;