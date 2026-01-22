/* Import des composants Router */
import router from "../../router/router";

/* Import des Types */
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_Trottinette_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Marques de trottinettes électriques - PowerWatt34",
        author: "Sofian ZEGAGH",
        description: "Découvrez toutes les marques de trottinettes électriques sélectionnées par PowerWatt34. Comparez et choisissez votre marque (Dualtron, Teverun, Kaabo, VSETT...).",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}${router[4].path}`, /*URL de la page*/
        position: 2, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Marques de trottinettes", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_Service: "Marques de trottinettes - PowerWatt34", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "PowerWatt34", /* 1 mot clés */
            2: "Atelier réparation trottinette", /* 2 mots clés */
            3: "Marques trottinettes électriques", /* 3 mots clés */
            5: "Trottinette électrique Dualtron", /* 4 mots clés */
            4: "Trottinette électrique Teverun", /* 5 mots clés */
            6: "Trottinette électrique Kaabo", /* 6 mots clés */
            7: "Trottinette électrique VSETT", /* 7 mots clés */
            8: "Trottinette électrique Langfeite", /* 8 mots clés */
            9: "Trottinette électrique ETWOW", /* 9 mots clés */
            10: "Trottinette électrique Inmotion", /* 10 mots clés */
            11: "Vente trottinettes électriques", /* 11 mots clés */
            12: "PowerWatt34 Lattes", /* 12 mots clés */
            13: "", /* 13 mots clés */
            14: "", /* 14 mots clés */
            15: "", /* 15 mots clés */
        }, /* 10 a 15 mots max */
        type : {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        },
    
        /* Data Helmet et JSON-LD */
        img_JSON_LD: `${import.meta.env.VITE_DOMAIN_CLIENT}/page/home/homePCPowerWatt34.jpg`, /*Lien URL public de l'image*/
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${router[4].path}#trottinette`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Liste des marques de trottinettes électriques proposées par PowerWatt34",
    };

    return (
        dataSEO
    )
}

export { dataSEO_Trottinette_data_SEO };
