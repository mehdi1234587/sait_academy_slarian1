const VideoSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 sm:mb-16 neon-text">
          ویدیوهای آموزشی دوره
        </h2>
        
        <div className="neon-glass rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative">
                  <video
                    controls
                    className="w-full h-full object-cover rounded-xl"
                    poster="/placeholder.svg"
                  >
                    <source src={`/videos/video${index}.mp4`} type="video/mp4" />
                    مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                  </video>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan rounded-xl transition-colors duration-500 pointer-events-none" 
                       style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0)' }}
                       onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.6)'}
                       onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0)'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;