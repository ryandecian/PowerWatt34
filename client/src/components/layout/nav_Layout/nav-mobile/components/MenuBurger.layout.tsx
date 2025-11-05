/* Import des modules CSS */
import css from "./menuBurger.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";

function MenuBurger_Layout() {
    const [active, setActive] = useState<boolean>(false)
    const funcActive = () => {
        setActive(!active)
    }

    return (
        <>
            <button 
                className={`${css.sideCloseNav} ${active ? css.active : ""} ${style.Button}`} 
                type="button" onClick={funcActive}
            >
                Fermer
            </button>
        </>
    )
}

export { MenuBurger_Layout };