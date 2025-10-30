/* Import des modules CSS */
import css from "./menuNavPC.module.css";

/* Import des composants d'Elements */
import { SubMenuPC_Element } from "./elements/SubMenuPC.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des Types */
import type { SubMenuNavPC_Type } from "../../../../../types/layout/nav/subMenuNavPC.type";

function MenuNavPC_Layout() {
    const menuProduits: SubMenuNavPC_Type = {
        nameMenu: "Produits",
        nameSubMenu: [
            { title: "Trotinettes", link: "#" },
            { title: "Vélos", link: "#" },
            { title: "Scooters", link: "#" },
        ],
    };

    return (
        <ul className={css.MenuUlPC}>
            <SubMenuPC_Element />
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
