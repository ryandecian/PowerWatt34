/* Import des composants Router */
import routerExt from "../router/routerExt.router";
import router from "../router/router";

/* Import des Types */
import type { DataSEORoot_Type } from "../types/seo/dataSEORoot.type";

function dataSEO_Root_data_SEO(): DataSEORoot_Type {
    const dataSEORoots = {
        /* Data Helmet */
        creator: {
            "@type": "Person",
            "name": "Sofian ZEGAGH"
        },
        twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
    
        /* Data JSON-LD */
        "@context": "https://schema.org",
        "@type": {
            Local: "LocalBusiness",
            BreadcrumbList: "BreadcrumbList",
            Service: "Service",
            ContactPage: "ContactPage",
            HomePage: "HomePage",
            CollectionPage: "CollectionPage",
            ImageGallery: "ImageGallery",
            ItemList: "ItemList",
            Person: "Person",
            Blog: "Blog",
            BlogPosting: "BlogPosting",
            WebPage: "WebPage",
            TermsOfService: "TermsOfService",
            VideoObject: "VideoObject"
        },
        id_LocalBusiness: `${import.meta.env.VITE_DOMAIN_CLIENT}#pw34`, /* @id SEO-friendly, correspond id unique de l'entreprise */
        description: "PowerWatt34, dirigé par Sofian ZEGAGH, propose des prestations de réparations de véhicules électriques à Lattes et ses environs.", // Description de l'entreprise
        name: "PowerWatt34", /* Nom de l'entreprise */
        telephone: "+33756838181", /* Numéro de téléphone de l'entreprise (Manuel) */
        email: routerExt.emailPowerWatt34, /* Adresse email de l'entreprise (Dynamique) */
        url: `${import.meta.env.VITE_DOMAIN_CLIENT}`, /* URL de la page d'accueil de l'entreprise (Dynamique) */
        img: `${import.meta.env.VITE_DOMAIN_CLIENT}/logo/logo-powerwatt34.jpg`, // Lien URL public de l'image de l'entreprise (Dynamique) */
        isPartOf: {
            "@type": "WebSite",
            "name": "PowerWatt34",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}` /* URL de la page d'accueil de l'entreprise (Dynamique) */
        },
        mainEntity: {
            "@type": "Organization", 
            "name": "PowerWatt34",
            "url": "https://powerwatt34.fr",
        }, /* Entité principale de l'entreprise */
        publisher: {
            "@type": "Organization",
            "name": "PowerWatt34",
            "logo": {
                "@type": "ImageObject",
                "url": `${import.meta.env.VITE_DOMAIN_CLIENT}/logo/logo-powerwatt34-200x200.jpg`, // Logo au format carré si possible
                "width": 200,
                "height": 200
            },
        },
        logo: {
            "@type": "ImageObject",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}/logo/logo-powerwatt34-200x200.jpg`, // Logo au format carré si possible
            "width": 200,
            "height": 200
        },
        openingHours: [
            "Tu-Sa 10:00-12:30",
            "Tu-Sa 14:00-18:00"
        ], /* Horaires d'ouverture du mardi au samedi de 10h à 12h30 et de 14h à 18h */
        sameAs: [
            routerExt.instagram, /* Compte Instagram */
            routerExt.facebook, /* A modifier car ce n'est pas le bon compte */
        ],
        termsOfService: `${import.meta.env.VITE_DOMAIN_CLIENT}/${router[5].path}`, /* Conditions d'utilisation de l'entreprise (Dynamique) */
        "worksFor": {
            /* Indique de la personne est liée à cette activité */
            "@type": "Organization",
            "name": "PowerWatt34",
            "url": `${import.meta.env.VITE_DOMAIN_CLIENT}`
        },
        "knowsAbout": [
            /* Activité principale */
            "Réparation de trottinettes électriques",
            "Réparation de scooters électriques",
            "Réparation de vélos électriques",
            "Entretien de deux-roues électriques",
            "Optimisation de performances de véhicules électriques légers",

            /* Diagnostic & maintenance */
            "Diagnostic électronique de véhicules électriques",
            "Diagnostic batterie lithium",
            "Diagnostic moteur électrique",
            "Recherche de pannes électriques",
            "Maintenance préventive de deux-roues électriques",
            "Révision complète de trottinettes électriques",
            "Contrôle de sécurité véhicules électriques",

            /* Batteries & énergie */
            "Batteries lithium-ion pour trottinettes électriques",
            "Batteries lithium-ion pour scooters électriques",
            "Remplacement de batteries électriques",
            "Gestion et sécurité des batteries lithium",
            "Optimisation autonomie batterie",
            "Diagnostic BMS",
            "Recharge et cycles de batteries électriques",

            /* Électronique & motorisation */
            "Contrôleurs électroniques de trottinettes",
            "Moteurs brushless",
            "Capteurs et faisceaux électriques",
            "Électronique embarquée",
            "Réparation de cartes électroniques",
            "Programmation et paramétrage contrôleur",

            /* Mécanique & composants */
            "Freinage hydraulique et mécanique",
            "Systèmes de suspension",
            "Roues et pneumatiques",
            "Transmission et direction",
            "Châssis et structure de trottinettes",
            "Remplacement de pièces mécaniques",

            /* Marques & compatibilités */
            "Compatibilité multi-marques trottinettes électriques",
            "Compatibilité scooters électriques",
            "Pièces détachées pour deux-roues électriques",
            "Conseil sur choix de composants",

            /* Relation client & service */
            "Conseil personnalisé en atelier",
            "Accompagnement client après réparation",
            "Suivi et garantie de réparations",
            "Estimation et devis de réparation",
            "Sécurité et conformité des véhicules électriques",

            /* Réglementation & usage */
            "Réglementation des trottinettes électriques",
            "Sécurité routière des véhicules électriques légers",
            "Conformité et usage urbain des deux-roues électriques"
        ],
        "areaServed": [
            { "@type": "City", "name": "Lattes" },
            { "@type": "City", "name": "Montpellier" },
            { "@type": "City", "name": "Pérols" },
            { "@type": "City", "name": "Palavas-les-Flots" },
            { "@type": "City", "name": "Saint-Jean-de-Védas" },
            { "@type": "City", "name": "Castelnau-le-Lez" },
            { "@type": "AdministrativeArea", "name": "Hérault", "addressCountry": "FR" }
        ]
    }
    return (
        dataSEORoots
    )
};

export { dataSEO_Root_data_SEO };
