/* Import des Types */
import type { TrottinetteBrand_data_Type } from "../../../../../types/produits/trottinetteBrands.data.type";

function dualtron_Data() {
    const tab: TrottinetteBrand_data_Type = [
        {
            reactKey: 1,
            image: "",
            path: "#",
            model: "Dualtron X LTD",
            battery: "84V 60Ah",
            power: "13300W",
            range: "200 km",
        }
    ]

    return (tab);
}

export { dualtron_Data };
