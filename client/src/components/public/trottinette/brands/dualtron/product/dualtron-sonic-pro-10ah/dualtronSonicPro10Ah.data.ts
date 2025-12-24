/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronSonicPro10Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Sonic Pro 10Ah",
        batterie: "36V 10Ah",
        autonomie: "20 à 30 km",
        moteurs: "Bimoteurs",
        taille_roues: "8 pouces pleins",
        puissance_nominale: "700W soit 2 x 350W",
        puissance_maximale: "800W soit 2 x 400W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "25 km/h",
        freinage: "Frein à patins",
        clignotants: "Oui",
        poids: "14,7 kg",
        charge_maximale: "80 kg",
        prix: "599 €",
    }

    return data;
}

export { dualtronSonicPro10Ah_Data };
