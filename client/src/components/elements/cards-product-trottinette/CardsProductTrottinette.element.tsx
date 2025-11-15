/* Import des modules CSS */
import css from "./cardsProductTrottinette.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Types */
import type { CardsProductTrottinette_Type } from "../../../types/elements/cards-product-trottinette/cardsProductTrottinette.type";

function CardsProductTrottinette_Element({dataProduct}: {dataProduct: CardsProductTrottinette_Type}) {
    return (
        <Link
            key={dataProduct.reactKey}
            to={`${dataProduct.path}`}
            className={css.card}
            style={{backgroundImage: `url(${dataProduct.image})`}}
        >
            <div className={css.overlay}>
                    <h3 className={css.cardTitle}>{dataProduct.model}</h3>
                    <div className={css.ContainerText1}>
                        <p className={css.SubText}>{dataProduct.battery}</p>
                        <p className={css.TextPrice}>{dataProduct.price}</p>
                    </div>
                    <div className={css.ContainerText2}>
                        <p className={css.SubText}>{dataProduct.power}</p>
                        <p className={css.SubText}>{dataProduct.range}</p>
                    </div>
                </div>
        </Link>
    )
}

export { CardsProductTrottinette_Element };
