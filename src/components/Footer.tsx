const Footer = () => {
  const currentYear = new Date().toLocaleDateString('fa-IR', { year: 'numeric' });
  
  return (
    <footer className="relative py-12 border-t border-neon-cyan/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-center text-lg text-foreground/80 hover:text-neon-cyan transition-colors duration-300">
          © {currentYear} آکادمی مهدی سالاریان
        </p>
      </div>
    </footer>
  );
};

export default Footer;