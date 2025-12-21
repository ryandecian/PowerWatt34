/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronAminia21Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Aminia - 21Ah",
        batterie: "52V 21Ah (LG)",
        autonomie: "50 à 65 km",
        moteurs: "Bimoteurs",
        taille_roues: "9 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "2900W soit 2 x 1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "65 km/h",
        freinage: "Hydraulique à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "29 kg",
        charge_maximale: "120 kg",
        prix: "1899 €",
    }

    return data;
}

export { dualtronAminia21Ah_Data };
