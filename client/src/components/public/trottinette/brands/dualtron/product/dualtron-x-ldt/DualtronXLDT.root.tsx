/* Import des modules CSS */
import css from "./dualtronXLDT.module.css";

/* Import des composants React */
import { useMemo, useState } from "react";

/* Import des Datas */
import { dualtronXLDT_img_Data } from "./dualtronXLDT.img.data";

/* 1. Définition des types attendus par le carrousel */
export interface ImageSlide {
    id: number | string;
    src: string;
    alt: string;
}

/* 2. Composant principal */
function DualtronXLDT_Root() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Appel de la fonction data + mapping vers le format du carrousel
    const images: ImageSlide[] = useMemo(() => {
        const raw = dualtronXLDT_img_Data();
        return raw.map(({ reactKey, image, alt }) => ({
            id: reactKey,
            src: image,
            alt,
        }));
    }, []);

    // Sécurité si aucune image
    if (!images || images.length === 0) {
        return <div className={css.carouselContainer}>Aucune image disponible</div>;
    }

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

    return (
        <div className={css.carouselContainer}>
            {/* Conteneur coulissant */}
            <div
                className={css.slidesContainer}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img) => (
                    <img
                        key={img.id}
                        src={img.src}
                        alt={img.alt}
                        className={css.slide}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                    />
                ))}
            </div>

            {/* Contrôles */}
            {images.length > 1 && (
                <>
                    <button
                        className={`${css.navButton} ${css.prev}`}
                        onClick={handlePrev}
                        aria-label="Précédent"
                        type="button"
                    >
                        &#10094;
                    </button>

                    <button
                        className={`${css.navButton} ${css.next}`}
                        onClick={handleNext}
                        aria-label="Suivant"
                        type="button"
                    >
                        &#10095;
                    </button>
                </>
            )}
        </div>
    );
}

export default DualtronXLDT_Root;
