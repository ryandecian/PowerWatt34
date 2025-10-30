/* Import des modules CSS */
import css from "./subMenuPC.module.css";
import style from "../../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

/* Import des Types */
import type { SubMenuNavPC_Type } from "../../../../../../types/layout/nav/subMenuNavPC.type";

function SubMenuPC_Element({ nameMenu, nameSubMenu }: SubMenuNavPC_Type) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <li className={`${nameMenu} ${css.MenuLiPC}`} onClick={() => setSubMenuOpen(!subMenuOpen)}>
            <button
                type="button"
                className={`${css.Openbtn} ${style.Button}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                aria-expanded={subMenuOpen}
                aria-controls="Ouverture du sous menu des produits"
                aria-haspopup="true"
            >
                {nameMenu} <span className={css.IconOpenBtn}>{subMenuOpen ? "▲" : "▼"}</span>
            </button>

            {subMenuOpen && (
                <>
                    {/* Bouton de fermeture menu burger */}
                    <button 
                        type="button" 
                        className={`${css.ButtonSubMenuPC} ${style.Button}`}
                        aria-label={`Fermer le sous menu des ${nameMenu}`}
                        onClick={() => setSubMenuOpen(!subMenuOpen)}
                    >
                        Fermer
                    </button>

                    <ul className={css.SubMenuUlPC}>
                        {/* Si il n'y a qu'un seul subMenu */}
                        {nameSubMenu.length === 1 && (
                            <li className={`${css.SubMenuLiPC} ${css.SubMenuLiTopPC} ${css.SubMenuLiBottomPC}`}>
                                <Link to={nameSubMenu[0].link}>{nameSubMenu[0].title}</Link>
                            </li>
                        )}

                        {/* Si il 2 ou plusieurs subMenus */}
                        {nameSubMenu.length > 1 && (
                            nameSubMenu.map((item, index) => {
                                const isLast = index === nameSubMenu.length - 1; /* isLast étant le dernier élément du tableau */
                                
                                /* Styles selon la position */
                                const liClass = isLast
                                    ? `${css.SubMenuLiPC} ${css.SubMenuLiBottomPC}` /* Si c'est le dernier élément */
                                    : `${css.SubMenuLiPC} ${css.SubMenuLiTopPC}`; /* Si c'est un élément du milieu */

                                return (
                                    <li key={index} className={liClass}>
                                        <Link to={item.link}>{item.title}</Link>
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

export { SubMenuPC_Element };
