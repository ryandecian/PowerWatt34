/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { teverunBladeMiniUltra27Ah_Data } from "./teverunBladeMiniUltra27Ah.data";
import { teverunBladeMiniUltra27

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function TeverunFighterMini25Ah_Root() {
    const productData: Trottinette_Data_Type = teverunFighterMini25Ah_Data();
    return (
        <section className={`TeverunFighterMini25Ah_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={teverunFighterMini25Ah_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default TeverunFighterMini25Ah_Root;
