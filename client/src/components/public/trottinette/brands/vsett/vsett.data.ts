/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function vsett_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/vsett/vsett-10-plus-dual/vsett-10-plus-dual-n01-powerwatt34.jpg",
            path: "#",
            model: "Vsett 10+ Dual",
            price: "1749 €",
            battery: "60V 20,8Ah", 
            power: "5600W",
            range: "70 km",
        },
        {
            reactKey: 2,
            image: "/images/produits/trottinette/vsett/vsett-light-10-dual/vsett-light-10-dual-n01-powerwatt34.jpg",
            path: "#",
            model: "Vsett Light 10 Dual",
            price: "1749 €",
            battery: "52V 16Ah", 
            power: "4000W",
            range: "45 km",
        },
        {
            reactKey: 3,
            image: "/images/produits/trottinette/vsett/vsett-9-plus-dual/vsett-9-plus-dual-n01-powerwatt34.jpg",
            path: "#",
            model: "Vsett 9+ Dual",
            price: "999 €",
            battery: "48V 15,6Ah", 
            power: "2600W",
            range: "50 km",
        },
        {
            reactKey: 4,
            image: "/images/produits/trottinette/vsett/vsett-9/vsett-9-n01-powerwatt34.jpg",
            path: "#",
            model: "Vsett 9",
            price: "849 €",
            battery: "52V 13Ah", 
            power: "1300W",
            range: "45 km",
        },
    ]

    return (tab);
}

export { vsett_Data };
