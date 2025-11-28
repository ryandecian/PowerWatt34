/* Import des modules CSS */
import css from "./home.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des Hooks */
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function Home_Root() {
    const viewportWidth: number = useMediaQueriesWidth_rem();
    let backgroundClass: string = "";

    if (viewportWidth > 50) { backgroundClass = css.BackgroundHome_PC }
    else { backgroundClass = css.BackgroundHome_Mobile }

    
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <div className={`${css.ContainerSubAccueil} ${backgroundClass}`}>
                <header className={css.ContainerTitle}>
                    <h1 className={`${style.TitleH1} ${css.TitleH1}`}>
                        Bienvenue chez PowerWatt34 <br />
                        Spécialiste des 2 roues électriques
                    </h1>
                </header>
            </div>

            <p>test</p>
        </section>
    )
}

export default Home_Root;
