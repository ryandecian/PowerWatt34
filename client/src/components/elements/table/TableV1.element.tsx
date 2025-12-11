// /components/elements/table-trottinette/TableTrottinette.element.tsx
import React from "react";
import css from "./TableTrottinette.module.css";
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
    };

    return (
        <div
            className={css.wrapper}
            role="region"
            aria-labelledby={captionId}
            tabIndex={0}
        >
            <table className={`${css.table} ${css.striped}`}>
                <caption id={captionId}>
                    Caractéristiques techniques — {data.modele}
                </caption>

                <thead>
                    <tr>
                        <th scope="col">Caractéristique</th>
                        <th scope="col">Valeur</th>
                    </tr>
                </thead>

                <tbody>
                    {order.map((key) => (
                        <tr key={key}>
                            <th scope="row">{labels[key]}</th>
                            <td>{data[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export { TableTrottinette_Element };
