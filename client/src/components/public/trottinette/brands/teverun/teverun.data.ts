/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function teverun_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/dualtron/dualtron-x-ltd/dualtron-x-ltd-n01-powerwatt34.jpg",
            path: "#",
            model: "Dualtron X LTD",
            price: "5949 €",
            battery: "84V 60Ah", 
            power: "13300W",
            range: "170 km",
        },
    ]

    return (tab);
}

export { teverun_Data };
