/* Import des modules CSS */
import css from "./dualtron.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CardsProductTrottinette_Element } from "../../../../elements/cards-product-trottinette/CardsProductTrottinette.element";

/* Import des composants React */
import { useState } from "react";

/* Import des Datas */
import { dualtron_Data } from "./dualtron.data";

/* Import des Types */
import type { CardsTrottinetteBrand_data_Type } from "../../../../../types/produits/cardsTrottinetteBrand.data.type";

/* Import des Utils */
import { parsePrice_Utils } from "../../../../../utils/parsePrice.utils";

function Dualtron_Root() {
    const dualtronProducts: CardsTrottinetteBrand_data_Type = dualtron_Data();
    
    const [search, setSearch] = useState("");

    const filtered = dualtronProducts.filter((p) =>
        p.model.toLowerCase().includes(search.toLowerCase())
    );

    /* Trie les produits du prix le plus élevé au plus bas en convertissant chaque prix en nombre. */
    const sorted = [...filtered].sort((a, b) => {
        return parsePrice_Utils(b.price) - parsePrice_Utils(a.price);
    });

    return (
        <section className={`Dualtron_Root ${style.ContainerRootRacine}`}>
            
            {/* Container du titre */}
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Découvrez toutes les trottinettes électriques Dualtron proposées par PowerWatt34
                </h1>
            </header>

            {/* Paragraphe SEO */}
            <p className={css.DescriptionSEO}>
                Explorez notre sélection de trottinettes électriques <strong>Dualtron</strong>, 
                reconnues pour leurs performances exceptionnelles, leur fiabilité et la qualité 
                de leurs composants. Retrouvez ici tous les modèles Dualtron que PowerWatt34 
                commercialise et entretient, accompagnés de descriptions détaillées pour vous 
                aider à choisir la trottinette la mieux adaptée à votre usage.
            </p>

            {/* Input de recherche */}
            <div className={style.ContainerSearchBar}>
                <div>
                    <label 
                        htmlFor="search-dualtron-products" 
                        // className={css.LabelSearch}
                    >
                        Filtrer les trottinettes Dualtron
                    </label>

                    <input
                        type="search"
                        placeholder="Rechercher un modèle Dualtron..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        // className={style.searchBar}
                    />
                </div>
            </div>

            <div className={css.cardsContainer}>
                {sorted.map((dataProduct) => (
                    <CardsProductTrottinette_Element key={dataProduct.reactKey} dataProduct={dataProduct} />
                ))}
            </div>

        </section>
    );
}

export default Dualtron_Root;
