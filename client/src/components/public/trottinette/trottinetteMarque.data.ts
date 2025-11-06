/* Import des Types */
import type { CardsBrand_Type } from "../../../types/produits/cardsBrand.type";

function trottinetteMarque_Data() {
    const tab: CardsBrand_Type[] = [
        {
            reactKey: 1,
            path: "test",
            title: "Dualtron",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/assets/images/trottinette/dualtron.jpg",
        },
        {
            reactKey: 2,
            path: "test",
            title: "Tevenun",
            description: "La marque de trottinette électrique haut de gamme",
            image: "/assets/images/trottinette/tevenun.jpg",
        }
    ]
    return (tab);
}

export { trottinetteMarque_Data };
