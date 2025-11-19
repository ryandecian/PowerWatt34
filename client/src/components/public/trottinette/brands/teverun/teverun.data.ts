/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

function teverun_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/teverun/teverun-fighter-7260r/teverun-fighter-7260r-n01-powerwatt34.jpg",
            path: "#",
            model: "Teverun Fighter 7260R Edition 2025 V4",
            price: "4799 €",
            battery: "72V 60Ah", 
            power: "15000W",
            range: "200 km",
        },
        {
            reactKey: 2,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-pro/teverun-fighter-mini-pro-n01-powerwatt34.jpg",
            path: "#",
            model: "Teverun Fighter Mini Pro",
            price: "1849 €",
            battery: "60V 25Ah", 
            power: "3300W",
            range: "100 km",
        },
        {
            reactKey: 3,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini/teverun-fighter-mini-n01-powerwatt34.jpg",
            path: "#",
            model: "Teverun Fighter Mini",
            price: "1549 €",
            battery: "52V 25Ah", 
            power: "2950W",
            range: "80 km",
        },
        {
            reactKey: 4,
            image: "/images/produits/trottinette/teverun/teverun-blade-mini-ultra/teverun-blade-mini-ultra-n01-powerwatt34.jpg",
            path: "#",
            model: "Teverun Blade Mini Ultra",
            price: "1449 €",
            battery: "60V 27Ah", 
            power: "2950W",
            range: "100 km",
        },
    ]

    return (tab);
}

export { teverun_Data };
