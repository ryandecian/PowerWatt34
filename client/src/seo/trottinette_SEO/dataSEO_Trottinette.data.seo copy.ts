/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_TrottinetteBrands_data_SEO(): DataSEOTargetOne_Type {
    const urlPage = `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[4].path}`; 
    // ⚠️ Adapte l'index selon TON router : ici j’imite ton usage router[4] pour "trottinettes"

    const dataSEO: DataSEOTargetOne_Type = {
        title: "Marques de trottinettes électriques - PowerWatt34",
        author: "Sofian ZEGAGH",
        description: "Découvrez toutes les marques de trottinettes électriques sélectionnées par PowerWatt34. Comparez et choisissez votre marque (Dualtron, Teverun, Kaabo, VSETT…).",
        url: urlPage,
        position: 2,
        name_Breadcrumb: "Marques de trottinettes",
        name_HomePage: "",

        twitterUrlImg: "",

        keywords: {
            1: "marques trottinettes électriques",
            2: "trottinette électrique Dualtron",
            3: "trottinette électrique Teverun",
            4: "trottinette électrique Kaabo",
            5: "trottinette électrique VSETT",
            6: "trottinette électrique Langfeite",
            7: "trottinette électrique ETWOW",
            8: "trottinette électrique Inmotion",
            9: "vente trottinettes électriques",
            10: "PowerWatt34 Lattes",
        },

        type: {
            website: "website",
            article: "article",
            video: "video.movie",
            music: "music.song",
            profile: "profile",
        },

        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/page/trottinette/marques/marques-trottinettes-powerwatt34.jpg`,
        id_Service: `${urlPage}#trottinettes-marques`,
        serviceType: "Liste des marques de trottinettes électriques proposées par PowerWatt34",
    };

    return dataSEO;
}

export { dataSEO_TrottinetteBrands_data_SEO };
