/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_root_Layout from "../../../components/layout/nav_Layout/Nav.root.layout";
import Contact_Root from "../../../components/public/contact/Contact.root";

/* Import des Hooks */
import { useScrollToHash_utils_Hook } from "../../../hook/useScrollToHash.utils.hook";

function Contact_Page() {
    useScrollToHash_utils_Hook(); /* Utilisation du hook pour gérer le scroll vers les sections avec des IDs */
    
    return (
        <section className={`Contact_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_root_Layout />
            </header>
            <main className={style.Main}>
                <Contact_Root />
            </main>
            <footer className={style.Footer}>
                <p>footer</p>
            </footer>
        </section>
    );
}

export default Contact_Page;
