/* Import des modules CSS */
import css from "./menuBurger.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
import { Link } from "react-router-dom";

import { menu_Data } from "../../nav-pc/menu.data";

function MenuBurger_Layout() {
    const [active, setActive] = useState<boolean>(false)
    const funcActive = () => {
        setActive(!active)
    }

    return (
        <>
            {/* Bouton d'ouverture du menu burger, accessible uniquement lorsque le menu burger est fermé */}
            {active === false &&
                <button type="button" 
                    className={`${css.openBtn} ${style.Button}`}
                    aria-label="Ouvrir le menu principal"
                    onClick={funcActive}>
                    <span className={css.menuBurger}>
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
            }

            {/* Bouton de fermeture du menu burger, accessible uniquement lorsque le menu burger est ouvert */}
            <button 
                className={`${css.sideCloseNav} ${active ? css.active : ""} ${style.Button}`} 
                type="button" onClick={funcActive}
            >
                Fermer
            </button>

            {/* Contenu du menu burger, accessible uniquement lorsque le menu burger est ouvert */}
            <div className={`${css.sideNav} ${active ? css.active : ""} ${css.mySideNav}`}>
                <div>
                    <button type="button" 
                        className={`${css.closeBtn} ${style.Button}`}
                        aria-label="Fermer le menu principal"
                        onClick={funcActive}
                    >
                        x
                    </button>
                </div>
                
                {/* contenue du menu burger */}
                <ul className={css.MenuUlMobile}>
                    <li className={`${css.MenuLiMobile} ${css.MenuLiTopMobile}`}>
                        <Link to="#" className={css.MenuLinkMobile}>{menu_Data.dataMenu[0].nameMenu}</Link>
                    </li>

                    <li className={`${css.MenuLiMobile} ${css.MenuLiBottomMobile}`}>
                        <Link to="#" className={css.MenuLinkMobile}>{menu_Data.dataMenu[1].nameMenu}</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export { MenuBurger_Layout };