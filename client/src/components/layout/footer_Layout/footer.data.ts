/* Import des composants Router */
import router from "../../../router/router";

const footer_Data = [
    {
        nameMenu: "À PROPOS",
        nameSubMenu: [
            { title: "Nos services", link: "#" },
            { title: "Nos valeurs", link: "#" },
            { title: "Notre atelier", link: "#" },
        ]
    },
    {
        nameMenu: "À PROPOS",
        nameSubMenu: [
            { title: "Instagram", link: "#" },
            { title: "Facebook", link: "#" },
            { title: "Google Maps", link: "#" },
        ]
    },
    {
        nameMenu: "À PROPOS",
        nameSubMenu: [
            { title: "Contact", link: router[1].path },
            { title: "Mentions légales", link: "#" },
            { title: "CGV", link: "#" },
        ]
    },
];

export { footer_Data };
