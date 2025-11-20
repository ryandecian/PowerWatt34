/* Import des modules CSS */
import style from "../../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../../components/layout/nav_Layout/Nav.root.layout";
import Dualtron_Root from "../../../../../components/public/trottinette/brands/dualtron/Dualtron.root";
import Footer_root_layout from "../../../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des Hooks */
import { useScrollToHash_utils_Hook } from "../../../../../hook/useScrollToHash.utils.hook";

function Dualtron_Page() {
    useScrollToHash_utils_Hook(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`Dualtron_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Dualtron_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default Dualtron_Page;
