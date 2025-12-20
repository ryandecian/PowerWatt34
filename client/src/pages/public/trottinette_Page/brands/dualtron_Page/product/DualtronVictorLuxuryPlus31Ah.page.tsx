/* Import des modules CSS */
import style from "../../../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../../../components/layout/nav_Layout/Nav.root.layout";
import DualtronVictorLuxuryPlus31Ah_Root from "../../../../../../components/public/trottinette/brands/dualtron/product/dualtron-victor-luxury-plus-31ah/DualtronVictorLuxuryPlus31Ah.root";
import Footer_root_layout from "../../../../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des Hooks */
import { useScrollToHash_utils_Hook } from "../../../../../../hook/useScrollToHash.utils.hook";

function DualtronVictorLuxuryPlus31Ah_Page() {
    useScrollToHash_utils_Hook(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`DualtronVictorLuxuryPlus31Ah_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <DualtronVictorLuxuryPlus31Ah_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default DualtronVictorLuxuryPlus31Ah_Page;
