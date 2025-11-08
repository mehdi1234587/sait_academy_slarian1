const VideoSection = () => {
  const videos = [
    { id: 1, title: 'ویدیو معرفی دوره' },
    { id: 2, title: 'نمونه آموزش' },
    { id: 3, title: 'نتایج دانشجویان' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="animate-fade-in rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video bg-secondary/30 relative group">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop`}
                >
                  <source src={`/videos/video${video.id}.mp4`} type="video/mp4" />
                  مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;