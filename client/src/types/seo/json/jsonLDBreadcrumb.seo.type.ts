type JsonLDBreadcrumb_seo_Type = {
    "@context": string;
    "@type": "BreadcrumbList";
    itemListElement: {
        "@type": "ItemList";
        position: number;
        name: string;
        item: {
            "@type": string;
            "@id": string;
            url: string;
            name: string;
        };
    }[];
};

export type { JsonLDBreadcrumb_seo_Type };
