/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";
// import css from "./mentionsLegales.module.css";

/* Import des composants d'Elements */
import { A_Element } from "../../elements/Link/a/a.element";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function MentionsLegales_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mentions légales du site PowerWatt34, spécialiste trottinettes électriques
                </h1>
            </header>

            <h2 className={style.TitleH2_00N0}>
                1 – Édition du site
            </h2>

            <p className={style.TextP4}>
                En vertu de
                <A_Element href={routerExt.loi_01} text="l’article 6 de la loi n° 2004-575 du 21 juin 2004" />
                pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet
                <A_Element href={routerExt.linkPowerWatt34} text={routerExt.linkPowerWatt34} /> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
        </section>
    )
}

export default MentionsLegales_Root;
