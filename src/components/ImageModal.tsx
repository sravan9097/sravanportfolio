import React, { createContext, useContext, useState, ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalContextType {
  openModal: (src: string, alt: string) => void;
  closeModal: () => void;
}

const ImageModalContext = createContext<ImageModalContextType | undefined>(undefined);

export const useImageModal = () => {
  const context = useContext(ImageModalContext);
  if (!context) {
    throw new Error("useImageModal must be used within ImageModalProvider");
  }
  return context;
};

interface ImageModalProviderProps {
  children: ReactNode;
}

export const ImageModalProvider: React.FC<ImageModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const openModal = (src: string, alt: string) => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ImageModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-none overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center p-4 box-border">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ImageModalContext.Provider>
  );
};

// Higher-order component to make any image clickable
interface ClickableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ClickableImage: React.FC<ClickableImageProps> = ({ 
  src, 
  alt, 
  className = "",
  ...props 
}) => {
  const { openModal } = useImageModal();

  return (
    <img
      src={src}
      alt={alt}
      className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      onClick={() => openModal(src, alt)}
      {...props}
    />
  );
};
