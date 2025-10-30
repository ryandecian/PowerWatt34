/* Import des modules CSS */
import css from "./menuNavPC.module.css";

/* Import des composants React */
import { Link } from "react-router-dom";

function MenuNavPC_Layout() {
    return (
        <ul className={css.MenuUlPC}>
            <li className={css.MenuLiPC}>
                <Link to="#" className={css.MenuLinkPC}>CONTACT</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to="#" className={css.MenuLinkPC}>COMPTE</Link>
            </li>
        </ul>
    )
}

export { MenuNavPC_Layout };
