/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Trottinette_data_SEO } from "./dataSEO_Trottinette.data.seo";

/* Import des composants SEO */
import { JSON_LD_Breadcrumb_Home_schema_SEO } from "../home_SEO/JSON-LD_Breadcrumb_Home.schema.seo";

/* Import des Types */
import type { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";
import type { JsonLDBreadcrumb_seo_Type } from "../../types/seo/json/jsonLDBreadcrumb.seo.type";

function JSON_LD_Breadcrumb_Trottinette_schema_SEO(): JsonLDBreadcrumb_seo_Type {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO();
    const dataSEO_Trottinette: DataSEOTargetOne_Type = dataSEO_Trottinette_data_SEO();

    const JSON_LD: JsonLDBreadcrumb_seo_Type = {
        "@context": dataSEORoot["@context"],
        "@type": dataSEORoot["@type"].BreadcrumbList,
        "itemListElement": [
            JSON_LD_Breadcrumb_Home_schema_SEO().itemListElement[0],
            {
                "@type": "ListItem",
                "position": dataSEO_Trottinette.position,
                "name": dataSEO_Trottinette.name_Breadcrumb,
                "item": {
                    "@type": dataSEORoot["@type"].WebPage,
                    "@id": dataSEO_Trottinette.id_Service,
                    "url": dataSEO_Trottinette.url,
                    "name": dataSEO_Trottinette.name_Breadcrumb,
                },
            },
        ],
    };

    return JSON_LD;
}

export { JSON_LD_Breadcrumb_Trottinette_schema_SEO };
