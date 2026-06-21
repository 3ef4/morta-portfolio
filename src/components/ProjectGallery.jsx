import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectGallery = ({ images, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={28} />
      </button>

      <div className="absolute top-4 left-4 text-white/80 text-sm md:text-base">
        {title} — {currentIndex + 1} / {images.length}
      </div>

      <button
        onClick={goPrev}
        className="absolute left-2 md:left-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft size={28} />
      </button>

      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
      />

      <button
        onClick={goNext}
        className="absolute right-2 md:right-6 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-4 flex gap-2 flex-wrap justify-center max-w-[90vw]">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-colors ${
              idx === currentIndex ? "border-primary" : "border-transparent opacity-60"
            }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};