/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";

function Trottinette_Root() {
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
        </section>
    );
}

export default Trottinette_Root;
