/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronVictorLTD28Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Victor LTD - 28Ah",
        batterie: "60V 28Ah (Samsung 21700)",
        autonomie: "70 à 90 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2600W soit 2 x 1300W",
        puissance_maximale: "4000W soit 2 x 2000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "80 km/h",
        freinage: "Hydraulique NUTT à disques 140mm",
        clignotants: "Oui",
        poids: "39,1 kg",
        charge_maximale: "120 kg",
        prix: "2249 €",
    }

    return data;
}

export { dualtronVictorLTD28Ah_Data };
