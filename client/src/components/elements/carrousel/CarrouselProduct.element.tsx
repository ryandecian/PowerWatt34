/* Import des modules CSS */
import css from "./carrouselProduct.module.css";

/* Import React */
import { useMemo, useState } from "react";

/* Import du type */
import type { ImageCarousselProduct_Type } from "../../../types/produits/imageCarousselProduct.type";

type CarrouselProduct_Props = {
    dataImg: ImageCarousselProduct_Type;
};

function CarrouselProduct_Element({ dataImg }: CarrouselProduct_Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mapping simple : ton type === le type du carrousel interne
    const images = useMemo(() => {
        return dataImg.map(({ reactKey, src, alt }) => ({
            id: reactKey,
            src,
            alt,
        }));
    }, [dataImg]);

    if (images.length === 0) {
        return <div className={css.carouselContainer}>Aucune image disponible</div>;
    }

    function handleNext() {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    }

    function handlePrev() {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    }

    return (
        <div className={css.ContainerCarrousel}>
            {/* Slides */}
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

            {/* Boutons */}
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

export { CarrouselProduct_Element };
