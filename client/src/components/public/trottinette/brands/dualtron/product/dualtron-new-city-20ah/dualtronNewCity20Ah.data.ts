/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronNewCity20Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron City",
        batterie: "60V 20Ah (LG)",
        autonomie: "50 à 70 km",
        moteurs: "Bimoteurs",
        taille_roues: "15 pouces",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "4000W soit 2 x 2000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "70 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "41,2 kg",
        charge_maximale: "120 kg",
        prix: "1849 €",
    }

    return data;
}

export { dualtronNewCity20Ah_Data };
