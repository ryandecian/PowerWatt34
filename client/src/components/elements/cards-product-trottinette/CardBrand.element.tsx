/* Import des modules CSS */
import css from "./cardBrand.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Types */
import type { CardsBrand_Type } from "../../../types/produits/cardsBrand.type";

type CardBrand_Element_Props = {
    dataBrand: CardsBrand_Type;
};

function CardBrand_Element({ dataBrand }: CardBrand_Element_Props) {
    return (
        <Link
            to={dataBrand.path}
            className={`${css.card} ${dataBrand.light ? css[`card${dataBrand.light}`] : ""}`}
            style={{ backgroundImage: `url(${dataBrand.image})` }}
        >
            <div className={css.overlay}>
                <h3 className={css.cardTitle}>{dataBrand.title}</h3>
                <p className={css.cardDescription}>{dataBrand.description}</p>
            </div>
        </Link>
    );
}

export { CardBrand_Element };
