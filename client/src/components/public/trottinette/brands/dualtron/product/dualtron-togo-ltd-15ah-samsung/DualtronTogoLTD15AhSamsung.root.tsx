/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronTogoLTD15AhSamsung_Data } from "./dualtronTogoLTD15AhSamsung.data";
import { dualtronTogoLTD15AhSamsung_img_Data } from "./dualtronTogoLTD15AhSamsung.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronTogoLTD15AhSamsung_Root() {
    const productData: Trottinette_Data_Type = dualtronTogoLTD15AhSamsung_Data();
    return (
        <section className={`DualtronTogoLTD15AhSamsung_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronTogoLTD15AhSamsung_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronTogoLTD15AhSamsung_Root;
