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
                <A_Element option={3} href={routerExt.loi_01} text="l’article 6 de la loi n° 2004-575 du 21 juin 2004" />
                pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet
                <A_Element option={3} href={routerExt.linkPowerWatt34} text={routerExt.linkPowerWatt34} />
                l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>

            <p className={style.TextP4}>
                <strong>Propriétaire du site :</strong> PowerWatt34 et ou PowerWatt Mobility – Contact :
                <A_Element option={3} href={routerExt.emailPowerWatt34} text="powerwatt34@gmail.com" /> ou 
                <A_Element option={3} href={routerExt.phonePowerWatt34} text="07 56 83 81 81" /> 
                – Adresse :
                <A_Element option={1} href={routerExt.adressPowerWatt34} text="122 Chemin de Saint Hubert, 34970 Lattes." />
            </p>

            <p className={style.TextP4}>
                <strong>Identification de l'entreprise :</strong> PowerWatt Mobility au capital social de 200 € – 
                SIREN : 988482196 – RCS ou RM : Montpellier – Adresse postale : 1348 Avenue de la Mer-Raymond du 34000 Montpellier.
            </p>

            <p className={style.TextP4}>
                <strong>Directrice de la publication :</strong> Helena PEREZ – Contact : 
                <A_Element option={3} href={routerExt.phonePowerWatt34} text="07 56 83 81 81" />
            </p>

            <p className={style.TextP4}>
                <strong>Hébergeur :</strong> infomaniak Network SA – Adresse : 
                <A_Element option={3} href={routerExt.adressInfomaniak} text="Rue Eugène-Marziano 25, 1227 Genève, Suisse" />
                - Téléphone :
                <A_Element option={1} href={routerExt.phoneInfomaniak} text="+41 22 820 35 41" />
            </p>

            <p className={style.TextP4}>
                <strong>Délégué à la protection des données :</strong> Helena PEREZ -  
                <A_Element option={1} href={routerExt.emailPowerWatt34} text="powerwatt34@gmail.com" />
            </p>

            <p className={style.TextP4}>
                <strong>Autre contributeurs :</strong>
            </p>

            <h2 className={style.TitleH2_00N0}>
                2 - Propriété intellectuelle et contrefaçons
            </h2>
        </section>
    )
}

export default MentionsLegales_Root;
