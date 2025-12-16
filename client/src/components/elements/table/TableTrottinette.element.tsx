/* Import des modules CSS */
import css from "./tableTrottinette.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des composants React */
import React from "react";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../types/produits/trottinette/trottinette.data.type";

type TableTrottinette_Props = {
    data: Trottinette_Data_Type; // unique param
};

function TableTrottinette_Element({ data }: TableTrottinette_Props) {
    const captionId = React.useId();

    // Ordre d’affichage (clés du type)
    const order: (keyof Trottinette_Data_Type)[] = [
        "marque",
        "modele",
        "batterie",
        "autonomie",
        "moteurs",
        "taille_roues",
        "puissance_nominale",
        "puissance_maximale",
        "vitesse_bridée",
        "vitesse_maximale",
        "freinage",
        "clignotants",
        "poids",
        "charge_maximale",
        "prix",
    ];

    // Libellés lisibles
    const labels: Record<keyof Trottinette_Data_Type, string> = {
        marque: "Marque",
        modele: "Modèle",
        batterie: "Batterie",
        autonomie: "Autonomie",
        moteurs: "Moteurs",
        taille_roues: "Taille des roues",
        puissance_nominale: "Puissance nominale",
        puissance_maximale: "Puissance maximale",
        vitesse_bridée: "Vitesse bridée",
        vitesse_maximale: "Vitesse maximale",
        freinage: "Freinage",
        clignotants: "Clignotants",
        poids: "Poids",
        charge_maximale: "Charge maximale",
        prix: "Prix",
    };

    return (
        <div
            className={css.ContainerTable}
            role="region"
            aria-labelledby={captionId}
            tabIndex={0}
        >
            <table className={`${css.Table} ${css.striped}`}>
                <caption id={captionId} className={`${style.TextLiP4} ${css.Caption}`}>
                    Caractéristiques techniques - {data.modele}
                </caption>

                <thead>
                    <tr>
                        <th scope="col" className={style.TextP4}>Caractéristique</th>
                        <th scope="col" className={style.TextP4}>Valeur</th>
                    </tr>
                </thead>

                <tbody>
                    {order.map((key) => (
                        <tr key={key}>
                            <th scope="row" className={style.TextP4}>{labels[key]}</th>
                            <td className={style.TextP4}>{data[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { TableTrottinette_Element };
