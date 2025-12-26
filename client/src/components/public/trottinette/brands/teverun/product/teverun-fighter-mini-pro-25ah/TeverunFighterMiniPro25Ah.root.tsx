/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { teverunFighterMiniPro25Ah_Data } from "./teverunFighterMiniPro25Ah.data";
import { teverunFighterMiniPro25Ah_img_Data } from "./teverunFighterMiniPro25Ah.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function TeverunFighterMiniPro25Ah_Root() {
    const productData: Trottinette_Data_Type = teverunFighterMiniPro25Ah_Data();
    return (
        <section className={`TeverunFighterMiniPro25Ah_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={teverunFighterMiniPro25Ah_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default TeverunFighterMiniPro25Ah_Root;
