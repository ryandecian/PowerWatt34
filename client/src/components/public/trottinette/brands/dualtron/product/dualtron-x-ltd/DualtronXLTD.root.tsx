/* Import des modules CSS */
import css from "./dualtronXLDT.module.css";
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/carrouselProduct.element";

/* Import des Datas */
import { dualtronXLTD_img_Data } from "./dualtronXLDT.img.data";


/* 2. Composant principal */
function DualtronXLTD_Root() {
    return (
        <section className={`DualtronXLTD_Root ${style.ContainerRootRacine}`}>
            <CarrouselProduct_Element dataImg={dualtronXLTD_img_Data()} />
        </section>
    );
}

export default DualtronXLTD_Root;
