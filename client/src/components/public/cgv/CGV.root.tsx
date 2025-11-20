/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";

function CGV_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Conditions Générales de Vente - CGV PowerWatt34
                </h1>
            </header>

            <h2 className={style.TitleH2_00N0}>
                1 - Objet
            </h2>

            <p className={style.TextLiP4}>
                Les présentes Conditions Générales de Vente (CGV) régissent l’ensemble des ventes de véhicules 
                électriques et des prestations de services réalisées par <strong>PowerWatt34</strong>, incluant :
            </p>
        </section>
    )
}

export default CGV_Root;
