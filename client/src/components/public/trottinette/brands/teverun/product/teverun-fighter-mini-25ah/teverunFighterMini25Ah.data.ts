/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunFighterMini25Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Fighter Mini Pro - 25Ah",
        batterie: "52V 25Ah",
        autonomie: "65 à 80 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "2950W soit 2 x 1475W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "65 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "34,4 kg",
        charge_maximale: "100 kg",
        prix: "1549 €",
    }

    return data;
}

export { teverunFighterMini25Ah_Data };
