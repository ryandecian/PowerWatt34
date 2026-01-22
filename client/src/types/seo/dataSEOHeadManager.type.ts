type DataSEOHeadManager_Type = {
    title: string;
    description: string;
    url: string;
    img: string;
    twitterUrlImg?: string; // fallback
    twitterCompte: string;
    type: {
        website: string;
        article: string;
        video: string;
        music: string;
        profile: string;
    };
}

export type { DataSEOHeadManager_Type };
