/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronAminia13Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Aminia - 13Ah",
        batterie: "52V 13Ah (LG)",
        autonomie: "30 à 45 km",
        moteurs: "Monomoteur",
        taille_roues: "9 pouces tubeless",
        puissance_nominale: "1000W",
        puissance_maximale: "1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "45 km/h",
        freinage: "Hydraulique à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "30 kg",
        charge_maximale: "120 kg",
        prix: "749 €",
    }

    return data;
}

export { dualtronAminia13Ah_Data };
