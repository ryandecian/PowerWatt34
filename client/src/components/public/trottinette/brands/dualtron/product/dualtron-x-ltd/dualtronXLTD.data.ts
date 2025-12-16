/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronXLTD_Data(): Trottinette_Data_Type {
    const dualtronXLTD_Data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron X LTD",
        batterie: "84V 60Ah",
        autonomie: "170 km",
        moteurs: "Bimoteurs",
        taille_roues: "13 pouces",
        puissance_nominale: "8300W soit 2 x 4150W",
        puissance_maximale: "13300W soit 2 x 6650W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "110 km/h",
        freinage: "Hydraulique NUTT à disques 160mm",
        clignotants: "Oui",
        poids: "82,9 kg",
        charge_maximale: "150 kg",
        prix: "5949 €",
    }

    return dualtronXLTD_Data;
}

export { dualtronXLTD_Data };
