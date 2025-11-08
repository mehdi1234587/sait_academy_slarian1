import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    registrationSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              مهدی سالاریان
            </h1>
          </div>
          <Button 
            onClick={scrollToRegistration}
            className="glow-button relative bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 sm:px-6 md:px-8 text-sm sm:text-base"
            size="lg"
          >
            <span className="relative z-10">خرید دوره کامل</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;