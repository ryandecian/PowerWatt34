/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

/* Import des composants Router */
import router from "../../../../../router/router";

function teverun_Data() {
    const tab: CardsTrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "/images/produits/trottinette/teverun/teverun-fighter-7260r-v4-edition-2025/teverun-fighter-7260r-v4-edition-2025-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![1].path + "#top",
            model: "Teverun Fighter 7260R Edition 2025 V4",
            price: "4490 €",
            battery: "72V 60Ah", 
            power: "15000W",
            range: "200 km",
        },
        {
            reactKey: 2,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-pro/teverun-fighter-mini-pro-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![2].path + "#top",
            model: "Teverun Fighter Mini Pro",
            price: "1849 €",
            battery: "60V 25Ah", 
            power: "3300W",
            range: "100 km",
        },
        {
            reactKey: 3,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini/teverun-fighter-mini-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![3].path + "#top",
            model: "Teverun Fighter Mini",
            price: "1549 €",
            battery: "52V 25Ah", 
            power: "2950W",
            range: "80 km",
        },
        {
            reactKey: 4,
            image: "/images/produits/trottinette/teverun/teverun-blade-mini-ultra/teverun-blade-mini-ultra-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![4].path + "#top",
            model: "Teverun Blade Mini Ultra",
            price: "1449 €",
            battery: "60V 27Ah", 
            power: "2950W",
            range: "100 km",
        },
        {/**/
            reactKey: 5,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-eco/teverun-fighter-mini-eco-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![5].path + "#top",
            model: "Teverun Fighter Mini Eco",
            price: "1349 €",
            battery: "52V 20,8Ah", 
            power: "2950W",
            range: "60 km",
        },
        {
            reactKey: 6,
            image: "/images/produits/trottinette/teverun/teverun-space/teverun-space-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![6].path + "#top",
            model: "Teverun Space",
            price: "1049 €",
            battery: "52V 18Ah", 
            power: "1600W",
            range: "60 km",
        },
        {
            reactKey: 7,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-q-pro-plus/teverun-fighter-mini-q-pro-plus-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![9].path + "#top",
            model: "Teverun Fighter Mini Q Pro Plus",
            price: "999 €",
            battery: "52V 15Ah", 
            power: "3000W",
            range: "50 km",
        },
        {
            reactKey: 8,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-q-pro/teverun-fighter-mini-q-pro-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![8].path + "#top",
            model: "Teverun Fighter Mini Q Pro",
            price: "949 €",
            battery: "52V 15Ah", 
            power: "3000W",
            range: "50 km",
        },
        {
            reactKey: 9,
            image: "/images/produits/trottinette/teverun/teverun-fighter-mini-q-pro/teverun-fighter-mini-q-pro-n01-powerwatt34.jpg",
            path: router[4]!.children![2!].children![7].path + "#top",
            model: "Teverun Fighter Mini Q",
            price: "849 €",
            battery: "52V 13Ah", 
            power: "2600W",
            range: "40 km",
        },
    ]

    return (tab);
}

export { teverun_Data };
