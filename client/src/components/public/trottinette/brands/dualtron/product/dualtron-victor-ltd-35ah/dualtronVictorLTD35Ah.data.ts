/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronVictorLTD35Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Victor LTD - 35Ah",
        batterie: "60V 35Ah (LG 21700)",
        autonomie: "jusqu’à 110 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2600W soit 2 x 1300W",
        puissance_maximale: "4000W soit 2 x 2000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "85 km/h",
        freinage: "Hydraulique NUTT à disques 140mm + frein électronique",
        clignotants: "Oui",
        poids: "39,1 kg",
        charge_maximale: "120 kg",
        prix: "2449 €",
    }

    return data;
}

export { dualtronVictorLTD35Ah_Data };
