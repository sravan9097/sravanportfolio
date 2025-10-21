import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface ImageSlide {
  src: string;
  alt: string;
  caption: string;
}

interface ImageCarouselProps {
  images: ImageSlide[];
  className?: string;
  isMobile?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, className = "", isMobile = false }) => {
  const [api, setApi] = React.useState<{ scrollNext: () => void } | null>(null);
  
  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className={`w-full ${className}`}>
      <Carousel setApi={setApi} opts={{ loop: true, align: "center", slidesToScroll: 1 }} className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, idx) => (
            <CarouselItem key={idx} className={`pl-2 md:pl-4 ${isMobile ? 'basis-1/2 md:basis-1/3' : 'basis-full'}`}>
              <div className="flex flex-col items-center justify-center">
                <div className={`${isMobile ? 'w-full max-w-[14rem] sm:max-w-[16rem] md:max-w-sm mx-auto' : 'w-full'}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    draggable={false}
                    style={{ 
                      background: "white", 
                      borderRadius: isMobile ? "0.75rem" : "0.5rem", 
                      border: isMobile ? "1px solid #e5e7eb" : "none", 
                      boxShadow: isMobile ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
                      minHeight: isMobile ? "15rem" : "20rem"
                    }}
                  />
                </div>
                <p className={`text-center max-w-4xl mt-2 md:mt-4 px-2 md:px-0 ${isMobile ? 'text-xs md:text-sm' : 'text-sm'} text-muted-foreground`}>
                  {image.caption}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
