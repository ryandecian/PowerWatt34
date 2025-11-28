/* Import des modules CSS */
import css from "./home.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";

/* Import des Datas */
import { avisClientHome_Data } from "./dataAvisClient.data";

function Home_Root() {
    
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <div className={`${css.ContainerSubAccueil} ${css.BackgroundHome}`}>
                <header className={css.ContainerTitle}>
                    <h1 className={`${style.TitleH1} ${css.TitleH1}`}>
                        Bienvenue chez PowerWatt34 <br />
                        Spécialiste des 2 roues électriques
                    </h1>
                </header>
            </div>

            <p>test</p>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientHome_Data}/>
        </section>
    )
}

export default Home_Root;
