/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronForeverLimited24Ah_Data } from "./dualtronForeverLimited24Ah.data";
import { dualtronForeverLimited24Ah_img_Data } from "./dualtronForeverLimited24Ah.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronForeverLimited24Ah_Root() {
    const productData: Trottinette_Data_Type = dualtronForeverLimited24Ah_Data();
    return (
        <section className={`DualtronForeverLimited24Ah_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronForeverLimited24Ah_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronForeverLimited24Ah_Root;
