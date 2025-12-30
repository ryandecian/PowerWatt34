/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { teverunFighterMiniQProPlus15Ah_Data } from "./teverunFighterMiniQProPlus15Ah.data";
import { teverunFighterMiniQProPlus15Ah_img_Data } from "./teverunFighterMiniQProPlus15Ah.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function TeverunFighterMiniQProPlus15Ah_Root() {
    const productData: Trottinette_Data_Type = teverunFighterMiniQProPlus15Ah_Data();
    return (
        <section className={`TeverunFighterMiniQProPlus15Ah_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={teverunFighterMiniQProPlus15Ah_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default TeverunFighterMiniQProPlus15Ah_Root;
