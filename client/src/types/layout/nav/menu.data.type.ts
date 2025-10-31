type MenuData_Type = {
    dataSubMenu: {
        nameMenu: string;
        nameSubMenu: {
            title: string;
            link: string;
        }[];
    }[];
    dataMenu: {
        nameMenu: string;
        link: string;
    }[];
}

export type { MenuData_Type };