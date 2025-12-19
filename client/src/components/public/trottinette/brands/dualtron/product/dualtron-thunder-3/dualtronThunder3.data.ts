/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronThunder3_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Thunder 3",
        batterie: "72V 40Ah (LG M50LT)",
        autonomie: "125 à 170 km",
        moteurs: "Bimoteurs",
        taille_roues: "11 pouces tubeless",
        puissance_nominale: "5000W soit 2 x 2500W",
        puissance_maximale: "10800W soit 2 x 5400W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "120 km/h",
        freinage: "Hydraulique NUTT à disques 160mm",
        clignotants: "Oui",
        poids: "53 kg",
        charge_maximale: "120–130 kg",
        prix: "3049 €",
    }

    return data;
}

export { dualtronThunder3_Data };
