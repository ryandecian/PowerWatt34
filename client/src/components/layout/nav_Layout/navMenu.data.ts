/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/nav/navMenu.data.type";

function navMenu_Data(): NavMenu_data_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRODUITS",
                nameSubMenu: [
                    { title: "Trottinettes", link: router[4].children?.[0].path },
                    { title: "Vélos", link: "#" },
                    { title: "Scooters", link: "#" },
                ],
            },
            {
                nameMenu: "SERVICES",
                nameSubMenu: [
                    { title: "Réparation", link: "#" },
                    { title: "Entretien", link: "#" },
                    { title: "Assistance", link: "#" },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "CONTACT", link: router[1].path },
            { nameMenu: "COMPTE", link: "#" },
        ],
    };
}

export { navMenu_Data };
