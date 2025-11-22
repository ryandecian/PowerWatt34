/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function kaboo_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/kaboo/kaboo-wolf-king/kaboo-wolf-king-n01-powerwatt34.png",
            path: "#",
            model: "Kaboo Wolf King",
            price: "3699 €",
            battery: "72V 35Ah", 
            power: "13440W",
            range: "130 km",
        },
        {
            reactKey: 2,
            image: "/images/produits/trottinette/kaboo/kaboo-wolf-warrior-11-max/kaboo-wolf-warrior-11-max-n01-powerwatt34.jpg",
            path: "#",
            model: "Kaboo Wolf Warrior 11 Max",
            price: "2499 €",
            battery: "60V 36Ah", 
            power: "6000W",
            range: "130 km",
        },
        {
            reactKey: 3,
            image: "/images/produits/trottinette/kaboo/kaboo-wolf-warrior-11-plus/kaboo-wolf-warrior-11-plus-n01-powerwatt34.jpg",
            path: "#",
            model: "Kaboo Wolf Warrior 11 Plus",
            price: "2099 €",
            battery: "60V 26Ah", 
            power: "5400W",
            range: "70 km",
        },
        {
            reactKey: 4,
            image: "/images/produits/trottinette/kaboo/kaboo-wolf-warrior-x-max/kaboo-wolf-warrior-x-max-n01-powerwatt34.jpg",
            path: "#",
            model: "Kaboo Wolf Warrior X Max",
            price: "1849 €",
            battery: "60V 27Ah", 
            power: "4200W",
            range: "85 km",
        },
        {
            reactKey: 5,
            image: "/images/produits/trottinette/kaboo/kaboo-wolf-warrior-x-plus/kaboo-wolf-warrior-x-plus-n01-powerwatt34.jpg",
            path: "#",
            model: "Kaboo Wolf Warrior X Plus",
            price: "1699 €",
            battery: "60V 21Ah", 
            power: "4000W",
            range: "50 km",
        },
    ]

    return (tab);
}

export { kaboo_Data };
