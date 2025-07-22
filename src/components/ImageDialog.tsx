import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

interface ImageDialogProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageDialog({ src, alt, className = "" }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto rounded-lg cursor-pointer hover:shadow-lg transition ${className}`}
        />
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-0 shadow-none border-none flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
}
