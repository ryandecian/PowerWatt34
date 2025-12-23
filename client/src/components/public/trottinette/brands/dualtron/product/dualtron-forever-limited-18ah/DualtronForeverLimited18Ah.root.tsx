/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronForeverLimited18Ah_Data } from "./dualtronForeverLimited18Ah.data";
import { dualtronForeverLimited18Ah_img_Data } from "./dualtronForeverLimited18Ah.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronForeverLimited18Ah_Root() {
    const productData: Trottinette_Data_Type = dualtronForeverLimited18Ah_Data();
    return (
        <section className={`DualtronForeverLimited18Ah_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronForeverLimited18Ah_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronForeverLimited18Ah_Root;
