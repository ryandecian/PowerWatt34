/* Import des Components */
import { dataSEO_Root_data_SEO } from "../dataSEO_Root.data.seo";
import { dataSEO_Home_data_SEO } from "./dataSEO_Home.data.seo";

/* Import des JSON_LD */
import { JSON_LD_LocalBusiness_Root_schema_SEO } from "../JSON-LD_LocalBusiness_Root.schema.seo";
import { JSON_LD_HomePage_Home_schema_SEO } from "./JSON-LD_HomePage_Home.schema.seo";
import { JSON_LD_Breadcrumb_Home_schema_SEO } from "./JSON-LD_Breadcrumb_Home.schema.seo";

/* Import des Types */
import type { DataSEOHeadManager_Type } from "../../types/seo/dataSEOHeadManager.type";
import type { DataSEORoot_Type } from "../../types/seo/dataSEORoot.type";
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function HomeSEOHeadManager_root_SEO() {
    const dataSEORoot: DataSEORoot_Type = dataSEO_Root_data_SEO(); /* Récupération des données SEO */
    const dataSEO_Home: DataSEOTargetOne_Type = dataSEO_Home_data_SEO(); /* Récupération des données SEO de la page */

    const SEO: DataSEOHeadManager_Type = {
        title: dataSEO_Home.title,
        description: dataSEO_Home.description,
        url: dataSEO_Home.url,
        img: dataSEO_Home.img_JSON_LD,
        twitterUrlImg: dataSEO_Home.twitterUrlImg || dataSEO_Home.img_JSON_LD, // fallback
        twitterCompte: dataSEORoot.twitterCompte,
        keywords: dataSEO_Home.keywords,
        type: dataSEO_Home.type,
    };

    const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

    return (
        <>
            {/* JSON-LD */}
            <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON_LD_LocalBusiness_Root_schema_SEO() }}
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON_LD_HomePage_Home_schema_SEO() }}
            />
            <script 
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON_LD_Breadcrumb_Home_schema_SEO() }}
            />

            {/* Langue principale du document */}
            <html lang="fr" />

            {/* Métadonnées générales */}
            <title>{SEO.title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={SEO.description} />
            {filterKeywords && <meta name="keywords" content={filterKeywords} />}

            {/* SEO pour les moteurs de recherche */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />
            <link rel="canonical" href={SEO.url} />

            {/* Open Graph (Facebook, LinkedIn, WhatsApp...) */}
            <meta property="og:title" content={SEO.title} />
            <meta property="og:description" content={SEO.description} />
            <meta property="og:image" content={SEO.img} />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:type" content={SEO.type.website} />
            <meta property="og:locale" content="fr_FR" />

            {/* Twitter Cards */}
            <meta name="twitter:title" content={SEO.title} />
            <meta name="twitter:description" content={SEO.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={SEO.twitterUrlImg} />
            <meta name="twitter:site" content={SEO.twitterCompte} />
        </>
    );
}

export { HomeSEOHeadManager_root_SEO };
