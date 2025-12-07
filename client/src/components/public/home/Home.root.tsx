/* Import des modules CSS */
import css from "./home.module.css";
import style from "../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { GeneratorCardAvisClient_Element } from "../../elements/generator-card-avis-client/GeneratorCardAvisClient.element";

/* Import des Datas */
import { avisClientHome_Data } from "../../../data/dataAvisClient.data";

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

            <h2 className={style.TitleH2}>
                Atelier de réparation de trottinettes et scooters électriques à Montpellier
            </h2>

            <p className={style.TextP4}>
                Chez <strong>PowerWatt34</strong>, nous savons qu’une trottinette ou un scooter électrique
                n’est pas seulement un moyen de transport : c’est un outil du quotidien, parfois même 
                indispensable pour le travail, les études ou les déplacements de tous les jours. 
                C’est pour cela que chaque client est accueilli avec le même état d’esprit : 
                <strong> bienveillance, écoute et honnêteté</strong>.
            </p>

            <p className={style.TextP4}>
                Avant toute intervention, nous prenons le temps de comprendre votre situation :
                votre modèle, vos habitudes, vos trajets, l’historique de vos pannes.
                Nous expliquons toujours ce qui sera fait, pourquoi, et à quel prix -
                <strong> sans surprise et sans jargon technique inutile</strong>.
            </p>

            <p className={style.TextP4}>
                Notre atelier travaille <strong>exclusivement</strong> sur les véhicules électriques, ce qui 
                nous permet de diagnostiquer rapidement, de réparer proprement et de garantir chaque 
                intervention. Que ce soit pour une panne soudaine, une batterie qui fatigue, une perte 
                de puissance, un souci moteur ou un simple entretien, nous traitons votre véhicule comme 
                si c’était le nôtre.
            </p>

            <p className={style.TextP4}>
                Notre priorité est simple&nbsp;: vous offrir un service <strong>fiable, transparent, humain 
                et durable</strong>, avec un suivi réel et une disponibilité constante si vous avez la 
                moindre question après réparation.
            </p>

            <GeneratorCardAvisClient_Element tabDataAvisClients={avisClientHome_Data}/>
        </section>
    )
}

export default Home_Root;
