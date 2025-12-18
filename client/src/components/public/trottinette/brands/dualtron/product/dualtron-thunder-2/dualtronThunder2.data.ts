/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronThunder2_Data(): Trottinette_Data_Type {
    const dualtronThunder2_Data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Thunder 2",
        batterie: "72V 40Ah (LG)",
        autonomie: "100 à 150 km",
        moteurs: "Bimoteurs",
        taille_roues: "11 pouces tubeless",
        puissance_nominale: "5400W soit 2 x 2700W",
        puissance_maximale: "10080W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "100 km/h",
        freinage: "Hydraulique NUTT à disques 160mm",
        clignotants: "Oui",
        poids: "47 kg",
        charge_maximale: "120 kg",
        prix: "2749 €",
    }

    return dualtronThunder2_Data;
}

export { dualtronThunder2_Data };
