/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { teverunFighter7260R_V4_2025_Data } from "./teverunFighter7260RV4Edition2025.data";
import { teverunFighter7260RV4Edition2025_img_Data } from "./teverunFighter7260RV4Edition2025.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function TeverunFighter7260RV4Edition2025_Root() {
    const productData: Trottinette_Data_Type = teverunFighter7260R_V4_2025_Data();
    return (
        <section className={`TeverunFighter7260RV4Edition2025_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={teverunFighter7260RV4Edition2025_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default TeverunFighter7260RV4Edition2025_Root;
