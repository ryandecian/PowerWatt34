/* Import des modules CSS */
import css from "./subMenuMobile.module.css";
import style from "../../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Import des Types */
import type { SubMenuNav_Type } from "../../../../../../types/layout/nav/subMenuNavPC.type";

function SubMenuMobile_Element({ dataMenu }: { dataMenu: SubMenuNav_Type }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <li className={`${dataMenu.nameMenu} ${css.MenuLiMobile}`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
            <button
                type="button"
                className={`${css.OpenBtn} ${style.Button}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                aria-expanded={subMenuOpen}
                aria-controls={`Ouverture du sous menu des ${dataMenu.nameMenu}`}
                aria-haspopup="true"
            >
                {dataMenu.nameMenu} <span className={css.IconOpenBtn}>{subMenuOpen ? "▲" : "▼"}</span>
            </button>

            {subMenuOpen && (
                <>
                    {/* Bouton de fermeture menu burger */}
                    <button 
                        type="button" 
                        className={`${css.ButtonSubMenuMobile} ${style.Button}`}
                        aria-label={`Fermer le sous menu des ${dataMenu.nameMenu}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                        Fermer
                    </button>

                    <ul className={css.SubMenuUlMobile}>
                        {/* Si il n'y a qu'un seul subMenu */}
                        {dataMenu.nameSubMenu.length === 1 && (
                            <li className={`${css.SubMenuLiMobile} ${css.SubMenuLiTopMobile} ${css.SubMenuLiBottomMobile}`}>
                                <Link to={dataMenu.nameSubMenu[0].link} className={css.SubMenuLinkMobile}>{dataMenu.nameSubMenu[0].title}</Link>
                            </li>
                        )}

                        {/* Si il 2 ou plusieurs subMenus */}
                        {dataMenu.nameSubMenu.length > 1 && (
                            dataMenu.nameSubMenu.map((item, index) => {

                                return (
                                    <li key={index} className={css.SubMenuLiMobile}>
                                        <Link to={item.link} className={css.SubMenuLinkMobile}>{item.title}</Link>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </>
            )}
        </li>
    )
}

export { SubMenuMobile_Element };
