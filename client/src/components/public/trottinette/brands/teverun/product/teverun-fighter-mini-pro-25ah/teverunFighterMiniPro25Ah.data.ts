/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunFighterMiniPro25Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Fighter Mini Pro - 25Ah",
        batterie: "60V 25Ah",
        autonomie: "65 à 80 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "2000W soit 2 x 1000W",
        puissance_maximale: "2950W soit 2 x 1475W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "65 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "35,5 kg",
        charge_maximale: "100 kg",
        prix: "1849 €",
    }

    return data;
}

export { teverunFighterMiniPro25Ah_Data };
