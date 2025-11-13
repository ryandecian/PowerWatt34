/* Import des modules CSS */
import css from "./footerMobile.module.css";
import style from "../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { SubMenuFooterMobile_Element } from "./elements/SubMenuFooterMobile.element";

/* Import des Datas */
import { footer_Data } from "../footer.data";

function FooterMobile_Layout() {
    const dataFooter = footer_Data();
    return (
        <section className={`FooterMobile_Layout ${css.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h2 className={css.TitleH2}>
                    <span className={css.PowerSpan}>POWER</span>
                    <span className={css.WattSpan}>WATT</span>
                    <span className={css.NumberSpan}>34</span>
                </h2>
            </header>

            <nav className={css.ContainerNavFooter}>
                {/* Nav 1 : A propos */}
                <SubMenuFooterMobile_Element dataMenu={dataFooter[0]} />
                {/* <section className={css.SubContainerNavFooter}>
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
                </section> */}
            </nav>
        </section>
    );
}

export { FooterMobile_Layout };
