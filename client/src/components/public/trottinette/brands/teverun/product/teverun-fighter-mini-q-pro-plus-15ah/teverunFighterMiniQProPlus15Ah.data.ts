/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunFighterMiniQProPlus15Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Fighter Mini Q Pro Plus - 15Ah",
        batterie: "52V 15Ah",
        autonomie: "35 à 50 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "3000W soit 2 x 1500W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "60 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "25,2 kg",
        charge_maximale: "100 kg",
        prix: "999 €",
    }

    return data;
}

export { teverunFighterMiniQProPlus15Ah_Data };
