/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunFighterMiniEco20Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Fighter Mini - 20,8Ah",
        batterie: "52V 20,8Ah",
        autonomie: "40 à 60 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "2950W soit 2 x 1475W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "60 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "32,65 kg",
        charge_maximale: "100 kg",
        prix: "1349 €",
    }

    return data;
}

export { teverunFighterMiniEco20Ah_Data };
