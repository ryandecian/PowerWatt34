/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";

function Dualtron_Root() {
    return (
        <section className={`Trottinette_Root ${style.ContainerRootRacine}`}>
            <header>
                <h1>
                    Découvrez toutes les marques de trottinettes électriques proposées par PowerWatt34
                </h1>
            </header>
        </section>
    );
}

export default Dualtron_Root;
