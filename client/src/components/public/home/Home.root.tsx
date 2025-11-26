/* Import des modules CSS */
import css from "./home.module.css";
import style from "../../styleRootComponent.module.css";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <div className={css.ContainerSubAccueil}></div>
        </section>
    )
}

export default Home_Root;
