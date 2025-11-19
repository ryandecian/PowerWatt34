/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";
import css from "./mentionsLegales.module.css";

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
                En vertu de <a href={routerExt.loi_01} className={style.Link}><span>l’article 6 de la loi n° 2004-575 du 21 juin 2004</span></a> qkjhbz jqfhcbs oqjzcbh oljcbh qjsch  jqdch <a href="">test</a> joHC QLZEJFHB KHEFJB  LJFZHB
            </p>
        </section>
    )
}

export default MentionsLegales_Root;
