/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function dualtron_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/dualtron/dualtron-x-ltd/dualtron-x-ltd-n01-powerwatt34.jpg",
            path: "#",
            model: "Dualtron X LTD",
            price: "5999 €",
            battery: "84V 60Ah", 
            power: "13300W",
            range: "170 km",
        },
        {
            reactKey: 2,
            image: "/images/produits/trottinette/dualtron/dualtron-storm-ltd/dualtron-storm-ltd-n01-powerwatt34.jpg",
            path: "#",
            model: "Dualtron Storm LTD",
            price: "4299 €",
            battery: "84V 45Ah", 
            power: "11500W",
            range: "180 km",
        },
        {
            reactKey: 3,
            image: "/images/produits/trottinette/dualtron/dualtron-alien/dualtron-alien-n01-powerwatt34.jpg",
            path: "#",
            model: "Dualtron Alien",
            price: "3999 €",
            battery: "84V 45Ah", 
            power: "11200W",
            range: "125 km",
        },
    ]

    return (tab);
}

export { dualtron_Data };
