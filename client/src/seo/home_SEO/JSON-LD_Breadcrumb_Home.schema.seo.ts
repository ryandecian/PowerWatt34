/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Home_data_SEO } from "./dataSEO_Home.data.seo";

/* Import des Types */
import type { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";
import type { JsonLDBreadcrumb_seo_Type } from "../../types/seo/json/jsonLDBreadcrumb.seo.type";

function JSON_LD_Breadcrumb_Home_schema_SEO() : JsonLDBreadcrumb_seo_Type {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Home: DataSEOTargetOne_Type = dataSEO_Home_data_SEO(); /* Récupération des données SEO de la page */

    const JSON_LD: JsonLDBreadcrumb_seo_Type = {
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": dataSEO_Home.position,
                "name": dataSEO_Home.name_Breadcrumb, /* Le libellé du lien dans le fil d’Ariane */
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Home.id_Service,
                    "url": dataSEO_Home.url,
                    "name": dataSEO_Home.name_Breadcrumb
                }
            },
        ],
    };

    return (
        JSON_LD
    )
}

export { JSON_LD_Breadcrumb_Home_schema_SEO };
