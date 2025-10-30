/* Import des Types */
import type { MenuData_Type } from "../../../../types/layout/nav/menu.data.type";

const menu_Data: MenuData_Type = {
    dataSubMenu: [
        {
            nameMenu: "PRODUITS",
            nameSubMenu: [
                { 
                    title: "Trotinettes",
                    link: "#" 
                },
                { 
                    title: "Vélos",
                    link: "#" 
                },
                { 
                    title: "Scooters",
                    link: "#" 
                },
            ],
        },
        {
            nameMenu: "SERVICES",
            nameSubMenu: [
                { 
                    title: "Réparation",
                    link: "#" 
                },
                { 
                    title: "Entretien",
                    link: "#" 
                },
                { 
                    title: "Assistance",
                    link: "#"
                },
            ],
        }
    ],
    dataMenu: [
        {
            nameMenu: "CONTACT",
            link: "#"
        },
        {
            nameMenu: "COMPTE",
            link: "#"
        }
    ]
}

export { menu_Data };