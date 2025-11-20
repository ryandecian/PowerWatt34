/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { Footer_data_Type } from "../../../types/layout/footer/footer.data.type";

function footer_Data(): Footer_data_Type {
    return [
        {
            nameMenu: "A PROPOS",
            nameSubMenu: [
                { title: "Nos services", link: "#" },
                { title: "Nos valeurs", link: "#" },
                { title: "Notre atelier", link: "#" },
            ],
        },
        {
            nameMenu: "RESEAUX",
            nameSubMenu: [
                { title: "Instagram", link: "#" },
                { title: "Facebook", link: "#" },
                { title: "Google Maps", link: "#" },
            ],
        },
        {
            nameMenu: "POLITIQUE & TERMES",
            nameSubMenu: [
                { title: "Contact", link: router[1].path },
                { title: "Mentions légales", link: router[7].path },
                { title: "CGV", link: router[8].path },
            ],
        },
    ];
}

export { footer_Data };
