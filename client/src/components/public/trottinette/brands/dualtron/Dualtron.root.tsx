/* Import des modules CSS */
import css from "./dualtron.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CardsProductTrottinette_Element } from "../../../../elements/cards-product-trottinette/cardsProductTrottinette.element";

/* Import des composants React */
import { useState } from "react";

/* Import des Datas */
import { dualtron_Data } from "./dualtron.data";

/* Import des Types */
import type { TrottinetteBrandDualtron_data_Type } from "../../../../../types/produits/trottinetteBrandDualtron.data.type";

function Dualtron_Root() {
    const dualtronProducts: TrottinetteBrandDualtron_data_Type = dualtron_Data();
    
    const [search, setSearch] = useState("");

    const filtered = dualtronProducts.filter((p) =>
        p.model.toLowerCase().includes(search.toLowerCase())
    );

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

            {/* Container des cards (à remplir ensuite) */}
            <section className={css.ContainerCards}>
                {/* tu feras un .map ici */}
            </section>

        </section>
    );
}

export default Dualtron_Root;
