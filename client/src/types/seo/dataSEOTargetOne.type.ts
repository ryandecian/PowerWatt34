type DataSEOTargetOne_Type = {
    title: string;
    description: string;
    url: string;
    position: number;
    name_Breadcrumb: string; /* Le libellé du lien dans le fil d’Ariane. Exemple : Portfolio ou Portrait Duo */
    name_PageGoogle?: string; /* Nom de la page affichée dans les résultats Google */
    twitterUrlImg?: string; /* fallback */
    type: {
        website: string;
        article: string;
        video: string;
        music: string;
        profile: string;
    };
    img_JSON_LD: string;
    id_Service: string; /* @id SEO-friendly, correspond à l'URL de la page + mots clés */
    serviceType: string; /* Type de service */
}

export type { DataSEOTargetOne_Type };
