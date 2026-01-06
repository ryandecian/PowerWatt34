/* Import des composants Router */
import ListDataRouter from "../../router/router";

/* Import des Types */
import type { DataSEOTargetOne_Type } from "../../types/seo/dataSEOTargetOne.type";

function dataSEO_Home_data_SEO(): DataSEOTargetOne_Type {
    const dataSEO = {
        /* Data Helmet */
        title: "Accueil - PowerWatt34",
        author: "Sofian ZEGAGH",
        description: "Atelier PowerWatt34 à Lattes : réparation, entretien et optimisation de trottinettes, scooters et vélos électriques. Diagnostic précis et conseils personnalisés.",
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}`, /*URL de la page*/
        position: 1, /* Clé pour Breadcrumb : Position UX de la page lors de la navigation dans le site */
        name_Breadcrumb: "Accueil", /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
        name_HomePage: "Accueil - PowerWatt34", /* Nom de la page d'accueil, utilisé dans le JSON-LD HomePage */
        twitterUrlImg: "", /* Lien URL de l'image */
        keywords: {
            1: "PowerWatt34", /* 1 mot clés */
            2: "Atelier réparation trottinette", /* 2 mots clés */
            3: "Réparation trottinette électrique Lattes", /* 3 mots clés */
            5: "Réparation scooter électrique", /* 4 mots clés */
            4: "Réparation vélo électrique", /* 5 mots clés */
            6: "Atelier trottinette Montpellier", /* 6 mots clés */
            7: "Diagnostic trottinette électrique", /* 7 mots clés */
            8: "Réparation batterie trottinette", /* 8 mots clés */
            9: "Réparation moteur trottinette", /* 9 mots clés */
            10: "Entretien trottinette électrique", /* 10 mots clés */
            11: "Révision scooter électrique", /* 11 mots clés */
            12: "Atelier 2 roues électriques", /* 12 mots clés */
            13: "Réparation trottinette Montpellier", /* 13 mots clés */
            14: "Réparation scooter Lattes", /* 14 mots clés */
            15: "Réparation vélo électrique Montpellier", /* 15 mots clés */
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
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${ListDataRouter[0].path}#home`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Découverte des prestations de réparation et d’entretien de deux-roues électriques proposées par PowerWatt34",
    };

    return (
        dataSEO
    )
}

export { dataSEO_Home_data_SEO };
