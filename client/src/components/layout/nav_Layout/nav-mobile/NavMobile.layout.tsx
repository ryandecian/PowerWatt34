import css from "./NavMobile.module.css";
import { Link } from "react-router-dom"
import MenuBurger from "./MenuBurger/MenuBurger.layout";

function NavMobile() {

    return (
        <nav className={css.NavMobile}>
            <div className={css.ContainerLogoNavMobile}>
                <Link to="/">
                        PowerWatt34
                </Link>
            </div>

            <MenuBurger />
        </nav>
    )
}
export default NavMobile;
