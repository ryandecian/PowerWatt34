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
                1 - Édition du site
            </h2>

            <p className={style.TextP4}>
                En vertu de
                <A_Element option={3} href={routerExt.loi_01} text="l’article 6 de la loi n° 2004-575 du 21 juin 2004" />
                pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site internet
                <A_Element option={3} href={routerExt.linkPowerWatt34} text="www.powerwatt34.fr" />
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

            <h2 className={style.TitleH2}>
                2 - Propriété intellectuelle et contrefaçons
            </h2>

            <p className={style.TextP4}>
                PowerWatt34 est le propriétaire des droits de propriété intellectuelle et détient les droits
                d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, 
                graphismes, logos, vidéos, architecture, icônes et sons.
            </p>

            <p className={style.TextP4}>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable 
                de PowerWatt34.
            </p>

            <p className={style.TextP4}>
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée 
                comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles
                <A_Element option={1} href={routerExt.loi_02} text="L.335-2 et suivants du Code de Propriété Intellectuelle." />
            </p>

            <h2 className={style.TitleH2}>
                3 - Limitation de responsabilité
            </h2>

            <p className={style.TextP4}>
                PowerWatt34 ne pourra être tenu pour responsable des dommages directs et indirects 
                causés au matériel de l’utilisateur, lors de l’accès au site
                <A_Element option={3} href={routerExt.emailPowerWatt34} text="powerwatt34@gmail.com." />
                PowerWatt34 décline toute responsabilité quant à l’utilisation qui pourrait 
                être faite des informations et contenus présents sur
                <A_Element option={1} href={routerExt.linkPowerWatt34} text="www.powerwatt34.fr" />
            </p>

            <p className={style.TextP4}>
                PowerWatt34 s’engage à sécuriser au mieux le site
                <A_Element option={3} href={routerExt.linkPowerWatt34} text="www.powerwatt34.fr." />
                Cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont 
                importées et installées sur son site à son insu.
            </p>
        </section>
    )
}

export default MentionsLegales_Root;
