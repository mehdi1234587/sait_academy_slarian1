import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "برنامه‌نویس ربات و توسعه‌دهنده هوش مصنوعی";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="container mx-auto text-center space-y-8 relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold neon-text animate-fade-in">
          مهدی سالاریان
        </h1>
        
        <p className="text-2xl sm:text-3xl md:text-4xl text-foreground/90 min-h-[2.5rem] animate-fade-in">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-8 animate-fade-in">
          <Button 
            asChild
            className="neon-button h-14 px-8 text-lg font-semibold"
          >
            <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
              تلگرام من
            </a>
          </Button>
          
          <Button 
            asChild
            className="neon-button h-14 px-8 text-lg font-semibold"
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              گیت‌هاب من
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
