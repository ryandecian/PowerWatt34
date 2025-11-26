/* Import des modules CSS */
import css from "./home.module.css";
import style from "../../styleRootComponent.module.css";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <div className={css.ContainerSubAccueil}>
                <header className={css.ContainerTitle}>
                    <h1 className={`${style.TitleH1} ${css.TitleH1}`}>
                        Bienvenue chez PowerWatt34 <br />
                        Spécialiste des 2 roues électriques
                    </h1>
                </header>
            </div>
        </section>
    )
}

export default Home_Root;
