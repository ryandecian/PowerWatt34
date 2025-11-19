/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";
import css from "./mentionsLegales.module.css";

function MentionsLegales_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mentions légales du site PowerWatt34, spécialiste trottinettes électriques
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                1 – Édition du site
            </h2>
        </section>
    )
}

export default MentionsLegales_Root;
