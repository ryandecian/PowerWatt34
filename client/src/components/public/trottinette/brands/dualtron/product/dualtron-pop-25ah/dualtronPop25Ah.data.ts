/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronPop25Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Pop",
        batterie: "52V 25Ah (LG)",
        autonomie: "35 à 50 km",
        moteurs: "Monomoteur",
        taille_roues: "9 pouces tubeless",
        puissance_nominale: "900W",
        puissance_maximale: "1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "45 km/h",
        freinage: "Tambour avant + frein électronique",
        clignotants: "Oui",
        poids: "30 kg",
        charge_maximale: "100 kg",
        prix: "1049 €",
    }

    return data;
}

export { dualtronPop25Ah_Data };
