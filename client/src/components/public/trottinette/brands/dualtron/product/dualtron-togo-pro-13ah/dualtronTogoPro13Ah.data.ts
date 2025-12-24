/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronTogoPro13Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Togo Pro - 13Ah",
        batterie: "48V 13,5Ah (LG)",
        autonomie: "25 à 35 km",
        moteurs: "Monomoteur",
        taille_roues: "9 pouces",
        puissance_nominale: "760W",
        puissance_maximale: "920W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "40 km/h",
        freinage: "Tambour AV et AR + frein électronique",
        clignotants: "Non",
        poids: "24,3 kg",
        charge_maximale: "100 kg",
        prix: "679 €",
    }

    return data;
}

export { dualtronTogoPro13Ah_Data };
