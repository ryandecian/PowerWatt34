/* Import des modules CSS */
import style from "../../../../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../../../../components/layout/nav_Layout/Nav.root.layout";
import DualtronVictorLTD35AhSamsung_Root from "../../../../../../components/public/trottinette/brands/dualtron/product/dualtron-victor-ltd-35ah-samsung/DualtronVictorLTD35AhSamsung.root";
import Footer_root_layout from "../../../../../../components/layout/footer_Layout/Footer.root.layout";

/* Import des Hooks */
import { useScrollToHash_utils_Hook } from "../../../../../../hook/useScrollToHash.utils.hook";

function DualtronVictorLTD35AhSamsung_Page() {
    useScrollToHash_utils_Hook(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */

    return (
        <section className={`DualtronVictorLTD35AhSamsung_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <DualtronVictorLTD35AhSamsung_Root />
            </main>
            <footer className={style.Footer}>
                <Footer_root_layout />
            </footer>
        </section>
    );
}

export default DualtronVictorLTD35AhSamsung_Page;
