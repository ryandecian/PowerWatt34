/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronAminia17Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Aminia - 17,5Ah",
        batterie: "52V 17,5Ah (LG)",
        autonomie: "45 à 60 km",
        moteurs: "Monomoteur",
        taille_roues: "9 pouces tubeless",
        puissance_nominale: "1000W",
        puissance_maximale: "1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "65 km/h",
        freinage: "Hydraulique à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "30 kg",
        charge_maximale: "120 kg",
        prix: "979 €",
    }

    return data;
}

export { dualtronAminia17Ah_Data };
