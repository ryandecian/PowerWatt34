import { useState } from 'react';
import styles from './Carousel.module.css';

// 1. Définition des types
export interface ImageSlide {
  id: number | string;
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageSlide[];
}

// 2. Déclaration via function
function DualtronXLDT_Root({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du clic "Suivant"
  function handleNext() {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  // Gestion du clic "Précédent"
  function handlePrev() {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  // Si aucune image n'est fournie, on évite le crash
  if (!images || images.length === 0) {
    return <div className={styles.carouselContainer}>Aucune image disponible</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      
      {/* Conteneur coulissant */}
      <div 
        className={styles.slidesContainer}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img) => (
          <img 
            key={img.id}
            src={img.src}
            alt={img.alt}
            className={styles.slide}
          />
        ))}
      </div>

      {/* Contrôles */}
      <button 
        className={`${styles.navButton} ${styles.prev}`} 
        onClick={handlePrev}
        aria-label="Précédent"
      >
        &#10094;
      </button>
      
      <button 
        className={`${styles.navButton} ${styles.next}`} 
        onClick={handleNext}
        aria-label="Suivant"
      >
        &#10095;
      </button>

    </div>
  );
}

export default DualtronXLDT_Root;
