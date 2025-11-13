/* Import des Types */
import type { CardsBrand_Type } from "../../../types/produits/cardsBrand.type";

function trottinetteMarque_Data() {
    const tab: CardsBrand_Type[] = [
        {
            reactKey: 1,
            path: "#",
            title: "Dualtron",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/images/produits/brands/dualtron.webp",
            light: 4,
        },
        {
            reactKey: 2,
            path: "#",
            title: "Tevenun",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/images/produits/brands/teverunf.webp",
            light: 3,
        },
        {
            reactKey: 3,
            path: "#",
            title: "LANGFEITE",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/images/produits/brands/langfeite.jpg",
            light: 5,
        },
    ]
    return (tab);
}

export { trottinetteMarque_Data };
