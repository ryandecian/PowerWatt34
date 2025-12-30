/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function teverunSpace18Ah_Data(): Trottinette_Data_Type {
    const data: Trottinette_Data_Type = {
        marque: "Teverun",
        modele: "Teverun Space - 18Ah",
        batterie: "52V 18Ah",
        autonomie: "40 à 60 km",
        moteurs: "Bimoteurs",
        taille_roues: "10 pouces tubeless",
        puissance_nominale: "1600W soit 2 x 800W",
        puissance_maximale: "3200W soit 2 x 1600W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "55 km/h",
        freinage: "Hydraulique à disques",
        clignotants: "Oui",
        poids: "30 kg",
        charge_maximale: "80 kg",
        prix: "1049 €",
    }

    return data;
}

export { teverunSpace18Ah_Data };
