/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronVictorLTD35Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Victor LTD",
        batterie: "60V 35Ah (LG 21700)",
        autonomie: "90 à 110 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "4000W soit 2 x 2000W",
        puissance_maximale: "8000W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "80 km/h",
        freinage: "Hydraulique NUTT à disques 140mm",
        clignotants: "Oui",
        poids: "33 kg",
        charge_maximale: "120 kg",
        prix: "2449 €",
    }

    return data;
}

export { dualtronVictorLTD35Ah_Data };
