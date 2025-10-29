/* Import des modules CSS */
import style from "../../stylePage.module.css";

/* Import des Components */
import Nav_Layout from "../../../components/layout/nav_Layout/Nav.layout";

function HomePage() {
    return (
        <section className={`Home_Page ${style.Page}`}>
            <header id="top" className={style.Header}>
                <Nav_Layout />
            </header>
            <main className={style.Main}>
                <p>main</p>
            </main>
            <footer className={style.Footer}>
                <p>footer</p>
            </footer>
        </section>
    );
}

export default HomePage;
