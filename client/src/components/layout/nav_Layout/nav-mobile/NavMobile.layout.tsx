import css from "./NavMobile.module.css";
import { Link } from "react-router-dom"
// import MenuBurger from "./MenuBurger/MenuBurger.layout";

function NavMobile_Layout() {

    return (
        <nav className={css.NavMobile}>
            <p className={css.ContainerLogoNavMobile}>
                <Link to="/">
                    <span className={css.PowerSpan}>POWER</span>
                    <span className={css.WattSpan}>WATT</span>
                    <span className={css.NumberSpan}>34</span>
                </Link>
            </p>

            {/* <MenuBurger /> */}
        </nav>
    )
}

export { NavMobile_Layout };
