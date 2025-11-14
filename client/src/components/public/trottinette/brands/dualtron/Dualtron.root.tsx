/* Import des modules CSS */
import css from "./dualtron.module.css";
import style from "../../../../styleRootComponent.module.css";

import { useState } from "react";

function Dualtron_Root() {
    const [search, setSearch] = useState("");

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
