/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronPopDoubleMoteur20Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Pop",
        batterie: "52V 20Ah (LG)",
        autonomie: "35 à 50 km",
        moteurs: "Bimoteur",
        taille_roues: "9 pouces tubeless",
        puissance_nominale: "1800W soit 2 x 900W",
        puissance_maximale: "2900W soit 2 x 1450W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "60 km/h",
        freinage: "Tambour AV + AR + frein électronique",
        clignotants: "Oui",
        poids: "30 kg",
        charge_maximale: "100 kg",
        prix: "1249 €",
    }

    return data;
}

export { dualtronPopDoubleMoteur20Ah_Data };
