/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { CardsBrand_Type } from "../../../types/produits/cardsBrand.type";

function trottinetteBrands_Data() {
    const tab: CardsBrand_Type[] = [
        {
            reactKey: 1,
            path: router[4].children?.[1].children?.[0].path + "#top",
            title: "Dualtron",
            description: "Puissance extrême, finitions premium et modèles taillés pour la performance.",
            image: "/images/produits/brands/dualtron.webp",
            light: 3,
        },
        {
            reactKey: 2,
            path: router[4].children?.[2].children?.[0].path + "#top",
            title: "Tevenun",
            description: "Design moderne, technologies avancées et performances haut de gamme.",
            image: "/images/produits/brands/teverun.webp",
            light: 2,
        },
        {
            reactKey: 3,
            path: router[4].children?.[3].children?.[0].path + "#top",
            title: "Kaabo",
            description: "Robustesse et couple puissant, idéale pour l’urbain et le tout-terrain.",
            image: "/images/produits/brands/kaabo.webp",
            light: 6,
        },
        {
            reactKey: 4,
            path: router[4].children?.[4].children?.[0].path + "#top",
            title: "VSETT",
            description: "Équilibre parfait entre performance, confort et polyvalence au quotidien.",
            image: "/images/produits/brands/vsett.jpg",
            light: 4,
        },
        {
            reactKey: 5,
            path: "#",
            title: "LANGFEITE",
            description: "Machines puissantes et endurantes, pensées pour les trajets exigeants.",
            image: "/images/produits/brands/langfeite.jpg",
            light: 5,
        },
        {
            reactKey: 6,
            path: "#",
            title: "ETWOW",
            description: "Ultra compacte et légère, parfaite pour la mobilité urbaine.",
            image: "/images/produits/brands/etwow.jpg",
            light: 4,
        },
        {
            reactKey: 7,
            path: "#",
            title: "Kuickwheel",
            description: "Trottinettes pratiques et accessibles, conçues pour les trajets quotidiens.",
            image: "/images/produits/brands/kuickwheel.jpg",
            light: 4,
        },
        {
            reactKey: 8,
            path: "#",
            title: "INMOTION",
            description: "Fiabilité, confort et innovations pour rouler sereinement en ville.",
            image: "/images/produits/brands/inmotion.jpg",
            light: 4,
        },
    ]
    return (tab);
}

export { trottinetteBrands_Data };
