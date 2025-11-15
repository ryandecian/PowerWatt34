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
            battery: "72V 40Ah", 
            power: "11200W",
            range: "125 km",
        },
        {
            reactKey: 4,
            image: "/images/produits/trottinette/dualtron/dualtron-thunder-3/dualtron-thunder-3-n01-powerwatt34.webp",
            path: "#",
            model: "Dualtron Thunder 3",
            price: "3499 €",
            battery: "72V 40Ah", 
            power: "10800W",
            range: "150 km",
        },
        {
            reactKey: 5,
            image: "/images/produits/trottinette/dualtron/dualtron-thunder-2/dualtron-thunder-2-n01-powerwatt34.jpg",
            path: "#",
            model: "Dualtron Thunder 2",
            price: "2999 €",
            battery: "72V 40Ah", 
            power: "10080W",
            range: "120 km",
        },
    ]

    return (tab);
}

export { dualtron_Data };
