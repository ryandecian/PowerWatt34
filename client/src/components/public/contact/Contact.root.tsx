/* Import des modules CSS */
import css from "./contact.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des composants React */
import { Mail, Phone } from "lucide-react";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function Contact_Root() {
    return (
        <section className={`Contact_Root ${css.Contact_Root} ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Besoin d’un renseignement ? Contactez les manguole`}
                </h1>
            </header>
            <p className={`${style.TextP3} ${css.Subtitle}`}>
                test
            </p>
            <div className={`${style.ContainerRoot} ${css.ContactContainer}`}>
                <a href={routerExt.emailPowerWatt34} className={css.ContactItem}>
                    <Mail className={style.IconLucide} />
                    <span>powerwatt34+app@gmail.com</span>
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
