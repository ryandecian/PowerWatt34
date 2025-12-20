/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronVictorLuxuryPlus31Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Victor Luxury Plus",
        batterie: "60V 31Ah (LG 21700)",
        autonomie: "80 à 100 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2600W soit 2 x 1300W",
        puissance_maximale: "4400W soit 2 x 2200W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "80 à 85 km/h",
        freinage: "Hydraulique NUTT à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "37,4 kg",
        charge_maximale: "120 kg",
        prix: "2149 €",
    }

    return data;
}

export { dualtronVictorLuxuryPlus31Ah_Data };
