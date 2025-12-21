/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronSpiderMax30Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Spider Max",
        batterie: "60V 30Ah",
        autonomie: "80 à 100 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces",
        puissance_nominale: "2400W soit 2 x 1200W",
        puissance_maximale: "4000W soit 2 x 2000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "70 km/h",
        freinage: "Hydraulique à disques + frein électronique",
        clignotants: "Oui",
        poids: "31,5 kg",
        charge_maximale: "120 kg",
        prix: "à partir de 1549 €",
    }

    return data;
}

export { dualtronSpiderMax30Ah_Data };
