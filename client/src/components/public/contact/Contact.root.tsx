/* Import des modules CSS */
import css from "./contact.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des composants React */
import { Mail, Phone } from "lucide-react";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function Contact_Root() {
    return (
        <section className={`Contact_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Besoin d’un réparateur ? <br />
                    Contactez PowerWatt34, spécialiste des 2 roues électriques !
                </h1>
            </header>

            <p className={`${style.TextP4}`}>
                Chez PowerWatt34, nous sommes un atelier spécialisé dans la réparation, la révision et le custom de 
                deux-roues électriques : trottinettes, scooters, vélos et motos électriques. Situé à Montpellier, 
                notre atelier prend en charge toutes les marques pour garantir à vos véhicules une performance 
                optimale et durable.
            </p>

            <p className={`${style.TitleH3}`}>
                🛠️ Pourquoi choisir PowerWatt34 ?
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Expertise 
                    <span className={style.SpanBold}>
                        {` 100% dédiée `}
                    </span>
                    aux deux-roues
                    <span className={style.SpanBold}>
                        {` électriques.`}
                    </span>
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Réparations rapides et soignées, `}
                    </span>
                    avec pièces de
                    <span className={style.SpanBold}>
                        {` qualité garanties.`}
                    </span>
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Diagnostic précis, `}
                    </span>
                    conseils personnalisés et
                    <span className={style.SpanBold}>
                        {` suivi client sérieux.`}
                    </span>
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Révision complète, `}
                    </span>
                    optimisation moteur/électronique et projets custom sur mesure.
                </li>
            </ul>
            
            <p className={`${style.TextP4}`}>
                Que vous ayez besoin d’un changement de batterie, d’une réparation moteur, ou simplement d’une révision 
                de votre trottinette, vélo ou scooter électrique, notre équipe vous accompagne avec professionnalisme et 
                passion.
            </p>
            
            <p className={`${style.TextP4} ${css.Subtitle}`}>
                🔋 Contactez-nous dès aujourd’hui pour un devis ou pour planifier une intervention — PowerWatt34, votre 
                atelier de confiance pour des deux-roues électriques performants et durables.
            </p>

            <div className={`${css.ContactContainer}`}>
                <a href={routerExt.emailPowerWatt34} className={css.ContactItem}>
                    <Mail className={style.IconLucide} />
                    <span>powerwatt34@gmail.com</span>
                </a>
                <a href={routerExt.phonePowerWatt34} className={css.ContactItem}>
                    <Phone className={style.IconLucide} />
                    <span>+33 07 56 83 81 81</span>
                </a>
            </div>
        </section>
    )
}

export default Contact_Root;
