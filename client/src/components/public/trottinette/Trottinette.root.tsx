/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";
import css from "./trottinette.module.css";

/* Import des composants d'Elements */
import { CardBrand_Element } from "../../elements/cards-product-trottinette/CardBrand.element";

/* Import des composants React */
import { useState } from "react";

/* Import des Datas */
import { trottinetteBrands_Data } from "./trottinetteBrands.data";

/* Import des Types */
import type { CardsBrand_Type } from "../../../types/produits/cardsBrand.type";

function Trottinette_Root() {
    const brand: CardsBrand_Type[] = trottinetteBrands_Data();

    const [search, setSearch] = useState("");

    const filtered = brand.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className={`Trottinette_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Découvrez toutes les marques de trottinettes électriques proposées par PowerWatt34
                </h1>
            </header>

            <p>
                Chez <strong>PowerWatt34</strong>, nous sélectionnons les <strong>meilleures marques de trottinettes électriques </strong>
                afin de garantir performance, fiabilité et confort de conduite. 
                Avant de découvrir nos modèles en détail, choisissez la marque qui vous correspond le mieux.
            </p>

            <input
                type="search"
                placeholder="Rechercher une marque..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={style.searchBar}
            />

            <div className={css.cardsContainer}>
                {filtered.map((brand) => (
                    <CardBrand_Element
                        key={brand.reactKey}
                        dataBrand={brand}
                    />
                ))}
            </div>
            
        </section>
    );
}

export default Trottinette_Root;
