/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronAchilleusRouge_Data } from "./dualtronAchilleusRouge.data";
import { dualtronAchilleusRouge_img_Data } from "./dualtronAchilleusRouge.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronAchilleusRouge_Root() {
    const productData: Trottinette_Data_Type = dualtronAchilleusRouge_Data();
    return (
        <section className={`DualtronAchilleusRouge_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronAchilleusRouge_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronAchilleusRouge_Root;
