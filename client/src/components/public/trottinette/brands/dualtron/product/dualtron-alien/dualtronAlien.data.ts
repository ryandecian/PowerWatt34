/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function dualtronAlien_Data(): Trottinette_Data_Type {
    const dualtronAlien_Data: Trottinette_Data_Type = {
        marque: "Dualtron",
        modele: "Dualtron Sonic Alien",
        batterie: "72V 40Ah",
        autonomie: "Jusqu’à 125 km",
        moteurs: "Bimoteurs",
        taille_roues: "11 pouces tubeless",
        puissance_nominale: "4000W soit 2 x 2000W",
        puissance_maximale: "11200W soit 2 x 5600W",
        vitesse_bridée: "25 km/h",
        vitesse_maximale: "≈100–110 km/h",
        freinage: "Hydraulique NUTT à disques (160mm) avec CBS/ABS",
        clignotants: "Oui",
        poids: "58 kg",
        charge_maximale: "120 kg",
        prix: "3949 €",
    }

    return dualtronAlien_Data;
}

export { dualtronAlien_Data };
