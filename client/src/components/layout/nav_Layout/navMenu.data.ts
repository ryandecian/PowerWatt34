/* Import des composants Router */
import router from "../../../router/router";

/* Import des Types */
import type { NavMenu_data_Type } from "../../../types/layout/nav/navMenu.data.type";

function navMenu_Data(): NavMenu_data_Type {
    const safe = {
        trottinette: router[4]?.children?.[0]?.path ?? "/produits/trottinette",
        contact: router[1]?.path ?? "/contact",
    };
    return {
        dataSubMenu: [
            {
                nameMenu: "PRODUITS",
                nameSubMenu: [
                    { title: "Trottinettes", link: safe.trottinette },
                    { title: "Vélos",        link: "#" },
                    { title: "Scooters",     link: "#" },
                ],
            },
            {
                nameMenu: "SERVICES",
                nameSubMenu: [
                    { title: "Réparation", link: "#" },
                    { title: "Entretien",  link: "#" },
                    { title: "Assistance", link: "#" },
                ],
            },
        ],
        dataMenu: [
            { nameMenu: "CONTACT", link: safe.contact },
            { nameMenu: "COMPTE",  link: "#" },
        ],
    };
}

export { navMenu_Data };
