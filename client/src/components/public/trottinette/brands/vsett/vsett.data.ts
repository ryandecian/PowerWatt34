/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function vsett_Data() {
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
    ]

    return (tab);
}

export { vsett_Data };
