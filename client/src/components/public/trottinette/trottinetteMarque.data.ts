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
        },
        {
            reactKey: 2,
            path: "#",
            title: "Tevenun",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/images/produits/brands/teverun.webp",
        }
    ]
    return (tab);
}

export { trottinetteMarque_Data };
