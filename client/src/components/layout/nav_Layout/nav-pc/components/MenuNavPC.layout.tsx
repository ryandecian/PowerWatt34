/* Import des modules CSS */
import css from "./menuNavPC.module.css";

/* Import des composants d'Elements */
import { SubMenuPC_Element } from "./elements/SubMenuPC.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Datas */
import { menu_Data } from "../../menu.data";

function MenuNavPC_Layout() {

    return (
        <ul className={css.MenuUlPC}>
            <SubMenuPC_Element dataMenu={menu_Data.dataSubMenu[0]} />

            <SubMenuPC_Element dataMenu={menu_Data.dataSubMenu[1]} />

            <li className={css.MenuLiPC}>
                <Link to="#" className={css.MenuLinkPC}>{menu_Data.dataMenu[0].nameMenu}</Link>
            </li>

            <li className={css.MenuLiPC}>
                <Link to="#" className={css.MenuLinkPC}>{menu_Data.dataMenu[1].nameMenu}</Link>
            </li>
        </ul>
    )
}

export { MenuNavPC_Layout };
