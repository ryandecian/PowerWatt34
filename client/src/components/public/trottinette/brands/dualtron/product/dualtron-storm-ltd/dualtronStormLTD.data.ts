/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronStormLTD_Data(): Trottinette_Data_Type {
    const dualtronStormLTD_Data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Storm LTD",
        batterie: "84V 45Ah (LG 21700)",
        autonomie: "180 à 220 km",
        moteurs: "Bimoteurs",
        taille_roues: "11 pouces (tubeless)",
        puissance_maximale: "11500W (total)",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "100 à 110 km/h",
        freinage: "Hydraulique NUTT à disques 160mm",
        clignotants: "Oui",
        poids: "50,5 à 55 kg",
        charge_maximale: "150 kg",
        prix: "4249 €",
    }

    return dualtronStormLTD_Data;
}

export { dualtronStormLTD_Data };
