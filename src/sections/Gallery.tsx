import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: '/images/gallery-1.webp',
    alt: 'Living Room',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/gallery-2.webp',
    alt: 'Dining Room',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-2bed.webp',
    alt: 'Two Bedroom Interior',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-3bed.webp',
    alt: 'Three Bedroom Interior',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/images/apt-special.webp',
    alt: 'Special Garden Apartment',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      // Add keydown listener for escape and arrows
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedIndex(null);
        if (e.key === 'ArrowLeft') paginate(-1);
        if (e.key === 'ArrowRight') paginate(1);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedIndex]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return galleryImages.length - 1;
      if (nextIndex >= galleryImages.length) return 0;
      return nextIndex;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Step Inside Your New Home
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Experience the warmth and sophistication of Rainbow Apartments
            interiors, designed with meticulous attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${image.span} rounded-lg`}
              onClick={() => {
                setDirection(0);
                setSelectedIndex(index);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 group"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            <button
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 group"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full max-w-5xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={selectedIndex}
                    src={galleryImages[selectedIndex].src}
                    alt={galleryImages[selectedIndex].alt}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 w-full h-full object-contain shadow-2xl rounded-sm"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = offset.x; // How far dragged
                      if (swipe < -100) {
                        paginate(1);
                      } else if (swipe > 100) {
                        paginate(-1);
                      }
                    }}
                  />
                </AnimatePresence>
              </div>

              {/* Caption & Counter */}
              <motion.div
                key={`caption-${selectedIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center z-50"
              >
                <h3 className="text-xl font-serif text-white mb-2">
                  {galleryImages[selectedIndex].alt}
                </h3>
                <span className="text-white/50 text-sm tracking-widest uppercase">
                  {selectedIndex + 1} / {galleryImages.length}
                </span>
              </motion.div>
            </div>

            {/* Mobile tap targets for nav (invisible overlays) */}
            <div className="absolute inset-y-0 left-0 w-1/4 z-40 md:hidden" onClick={(e) => { e.stopPropagation(); paginate(-1); }} />
            <div className="absolute inset-y-0 right-0 w-1/4 z-40 md:hidden" onClick={(e) => { e.stopPropagation(); paginate(1); }} />

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
