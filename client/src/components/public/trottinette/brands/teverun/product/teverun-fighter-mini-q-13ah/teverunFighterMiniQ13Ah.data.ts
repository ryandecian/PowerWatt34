/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunFighterMiniQ13Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Fighter Mini Q - 13Ah",
        batterie: "52V 13Ah",
        autonomie: "25 à 40 km",
        moteurs: "Bimoteurs",
        taille_roues: "8,5 pouces + chambre à air",
        puissance_nominale: "1000W soit 2 x 500W",
        puissance_maximale: "2598W soit 2 x 1299W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "55 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "25 kg",
        charge_maximale: "80 kg",
        prix: "849 €",
    }

    return data;
}

export { teverunFighterMiniQ13Ah_Data };
