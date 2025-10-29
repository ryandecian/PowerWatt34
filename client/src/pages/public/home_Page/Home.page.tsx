/* Import des Components */
import Nav_Layout from "../../../components/layout/nav_Layout/nav.layout";

function HomePage() {
    return (
        <section className={`Home_Page ${style.Page}`}>
            <header id="top"></header>
            <Nav_Layout />
        </section>
    );
}

export default HomePage;
