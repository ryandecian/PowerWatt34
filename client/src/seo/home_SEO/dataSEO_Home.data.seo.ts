/* Import des composants Router */
import router from "../../router/router";

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
        name_PageGoogle: "Accueil - PowerWatt34", /* Nom de la page affichée dans les résultats Google */
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
        id_Service: `${import.meta.env.VITE_DOMAIN_CLIENT}${router[0].path}#home`, // @id SEO-friendly, correspond à l'URL de la page + mots clés
        serviceType: "Découverte des prestations de réparation et d’entretien de deux-roues électriques proposées par PowerWatt34",
    };

    return (
        dataSEO
    )
}

export { dataSEO_Home_data_SEO };
