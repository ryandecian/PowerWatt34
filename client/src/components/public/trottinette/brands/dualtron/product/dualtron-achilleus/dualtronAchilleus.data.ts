/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronAchilleus_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Achilleus",
        batterie: "60V 35Ah (LG 21700)",
        autonomie: "90 à 120 km",
        moteurs: "Bimoteurs",
        taille_roues: "11 pouces tubeless",
        puissance_nominale: "2800W soit 2 x 1400W",
        puissance_maximale: "4648W soit 2 x 2324W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "80 km/h",
        freinage: "Hydraulique NUTT à disques 160mm",
        clignotants: "Oui",
        poids: "41 kg",
        charge_maximale: "120 kg",
        prix: "2449 €",
    }

    return data;
}

export { dualtronAchilleus_Data };
