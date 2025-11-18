/* Import des modules CSS */
import style from "../../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../../components/layout/nav_Layout/Nav.root.layout";
import Teverun_Root from "../../../../../components/public/trottinette/brands/teverun/Teverun.root";
import Footer_root_layout from "../../../../../components/layout/footer_Layout/Footer.root.layout";

function Teverun_Page() {
    return (
        <section className={`Teverun_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Teverun_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default Teverun_Page;
