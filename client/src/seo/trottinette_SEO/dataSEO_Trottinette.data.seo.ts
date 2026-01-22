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
        name_PageGoogle: "Marques de trottinettes - PowerWatt34", /* Nom du service, utilisé dans le JSON-LD Service */
        twitterUrlImg: "", /* Lien URL de l'image */
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
