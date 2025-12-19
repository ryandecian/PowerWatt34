/* Import des modules CSS */
import style from "../../../../../../styleRootComponent.module.css";

/* Import des composants d'Elements */
import { CarrouselProduct_Element } from "../../../../../../elements/carrousel/CarrouselProduct.element";
import { TableTrottinette_Element } from "../../../../../../elements/table/TableTrottinette.element";

/* Import des Datas */
import { dualtronVictorLuxuryPlus35AhSamsung_Data } from "./dualtronVictorLuxuryPlus35AhSamsung.data";
import { dualtronVictorLuxuryPlus35AhSamsung_img_Data } from "./dualtronVictorLuxuryPlus35AhSamsung.img.data";

/* Import des Types */
import type { Trottinette_Data_Type } from "../../../../../../../types/produits/trottinette/trottinette.data.type";

function DualtronVictorLuxuryPlus35AhSamsung_Root() {
    const productData: Trottinette_Data_Type = dualtronVictorLuxuryPlus35AhSamsung_Data();
    return (
        <section className={`DualtronVictorLuxuryPlus35AhSamsung_Root ${style.ContainerRootRacine}`}>
            <h1 className={style.TitleH1}>{productData.modele}</h1>
            <CarrouselProduct_Element dataImg={dualtronVictorLuxuryPlus35AhSamsung_img_Data()} />
            <br />
            <p><strong>Prix : {productData.prix}</strong></p>
            <TableTrottinette_Element data={productData} />
        </section>
    );
}

export default DualtronVictorLuxuryPlus35AhSamsung_Root;
