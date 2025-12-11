/* Import des modules CSS */
// import css from "./dualtronXLTD.module.css";
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronXLTD_img_Data } from "./dualtronXLTD.img.data";
import { dualtronXLTD_Data } from "./dualtronXLTD.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronXLTD_Root() {
    const productData: Trottinette_Data_Type = dualtronXLTD_Data();
    return (
        <section className={`DualtronXLTD_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronXLTD_img_Data()} />
            <br />
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronXLTD_Root;
