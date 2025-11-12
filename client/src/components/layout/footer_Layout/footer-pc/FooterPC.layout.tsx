/* Import des modules CSS */
import css from "./footerPC.module.css";
import style from "../../../styleRootComponent.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../../router/router";

function FooterPC_Layout() {
    return (
        <section className={`FooterPC_Layout ${css.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={css.TitleH2}>
                    <span className={css.PowerSpan}>POWER</span>
                    <span className={css.WattSpan}>WATT</span>
                    <span className={css.NumberSpan}>34</span>
                </h2>
            </header>

            <nav className={css.ContainerNavFooter}>
                {/* Nav 1 : A propos */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            A propos
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Nos services
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Nos valeurs
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Notre atelier
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 2 : Réseaux */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            Réseaux
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Instagram
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Facebook
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Google Maps
                            </Link>
                        </li>
                    </ul>
                </section>

                {/* Nav 3 : Politique & Termes */}
                <section className={css.SubContainerNavFooter}>
                    <header className={css.TitleNavFooter}>
                        <h3 className={css.SubNav}>
                            Politique & Termes
                        </h3>
                    </header>

                    <ul className={css.UlText}>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Contact
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                Mentions légales
                            </Link>
                        </li>
                        <li className={css.LiTextLink}>
                            <Link to={`${router[0].path}#top`} className={css.Link}>
                                CGV
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </section>
    );
}

export { FooterPC_Layout };