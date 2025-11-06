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
        </section>
    );
}

export default Trottinette_Root;
