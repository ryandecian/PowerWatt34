/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Trottinette_data_SEO } from "./dataSEO_Trottinette.data.seo";

/* Import des Types */
import type { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function JSON_LD_Breadcrumb_Trottinette_schema_SEO() : string {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Trottinette: DataSEOTargetOne_Type = dataSEO_Trottinette_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD = JSON.stringify({
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Trottinette.position,
                "name": dataSEO_Trottinette.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Trottinette.id_Service,
                    "url": dataSEO_Trottinette.url,
                    "name": dataSEO_Trottinette.name_Breadcrumb
                }
            },
        ],
    });

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Trottinette_schema_SEO };
