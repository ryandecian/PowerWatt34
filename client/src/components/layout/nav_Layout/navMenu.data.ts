/* Import des composants Router */
import router from "../../../router/router";

function navMenu_Data() {
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
