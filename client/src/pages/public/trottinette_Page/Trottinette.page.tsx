/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Trottinette_Root from "../../../components/public/trottinette/Trottinette.root";

function Trottinette_Page() {
    return (
        <section className={`Trottinette_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Trottinette_Root />
            </main>
            <footer className={style.Footer}>
                <p>footer</p>
            </footer>
        </section>
    );
}

export default Trottinette_Page;
