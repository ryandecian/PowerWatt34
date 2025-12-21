/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronVictor30Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Victor",
        batterie: "60V 30Ah",
        autonomie: "85 à 95 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "4000W soit 2 x 2000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "80 km/h",
        freinage: "Hydraulique à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "33 kg",
        charge_maximale: "120 kg",
        prix: "1649 €",
    }

    return data;
}

export { dualtronVictor30Ah_Data };
