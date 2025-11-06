/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { MenuData_Type } from "../../../types/layout/nav/menu.data.type";

function menu_Data(): MenuData_Type {
    return {
        dataSubMenu: [
            {
                nameMenu: "PRODUITS",
                nameSubMenu: [
                    { title: "Trottinettes", link: router[4].path },
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

export { menu_Data };
