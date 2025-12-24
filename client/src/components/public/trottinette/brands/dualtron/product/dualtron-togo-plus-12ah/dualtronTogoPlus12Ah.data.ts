/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronTogoPlus12Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Togo Plus - 12Ah",
        batterie: "48V 12Ah",
        autonomie: "30 à 50 km",
        moteurs: "Monomoteur",
        taille_roues: "9 pouces",
        puissance_nominale: "650W",
        puissance_maximale: "800W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "40 km/h",
        freinage: "Tambour AV + AR",
        clignotants: "Non",
        poids: "24,3 kg",
        charge_maximale: "100 kg",
        prix: "615 €",
    }

    return data;
}

export { dualtronTogoPlus12Ah_Data };
