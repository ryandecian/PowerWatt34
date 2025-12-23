/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronForeverLimited18Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Forever Limited",
        batterie: "60V 18Ah (LG 21700)",
        autonomie: "35 à 50 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "1800W soit 2 x 900W",
        puissance_maximale: "2900W soit 2 x 1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "65 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "27 kg",
        charge_maximale: "100 kg",
        prix: "1249 €",
    }

    return data;
}

export { dualtronForeverLimited18Ah_Data };
