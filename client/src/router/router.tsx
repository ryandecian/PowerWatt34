/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import CGV_Page from "../pages/public/cgv_Page/CGV.page";
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Dualtron_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/Dualtron.page";
import DualtronXLDT_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronXLDT.page";
import Home_Page from "../pages/public/home_Page/Home.page";
import Kaboo_Page from "../pages/public/trottinette_Page/brands/kaboo_Page/Kaboo.page";
import MentionsLegales_Page from "../pages/public/mentions-legales_Page/MentionsLegales.page";
import Teverun_Page from "../pages/public/trottinette_Page/brands/teverun_Page/Teverun.page";
import Trottinette_Page from "../pages/public/trottinette_Page/Trottinette.page";
import Vsett_Page from "../pages/public/trottinette_Page/brands/vsett_Page/Vsett.page";

/**
 * Utilisation :
 * {router[0].path}
 */

const router: Router_Type = [
    /* {router[0].path} */
    {
        path: "/",
        element: <Home_Page />,
    },
    /* {router[1].path} */
    {
        path: "/contact",
        element: <Contact_Page />,
    },
    /* {router[2].path} */
    {
        path: "/user/compte",
        element: <h1>compte utilisateur</h1>,
    },
    /* {router[3].path} */
    {
        path: "/admin/compte",
        element: <h1>compte admin</h1>,
    },
    /* {router[4].path} */
    {
        path: "/produits/trottinette",
        children: [
            /* {router[4]!.children![0]!.path} */
            {
                path: "/produits/trottinette",
                element: <Trottinette_Page />,
            },
            /* {router[4].children?.[1].path} */
            {
                path: "/produits/trottinette/dualtron",
                children: [
                    /* {router[4].children?.[1].children?.[0].path} */
                    {
                        path: "/produits/trottinette/dualtron",
                        element: <Dualtron_Page />,
                    },
                    /* {router[4]!.children![1]!.children![1].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-x-ldt",
                        element: <DualtronXLDT_Page />,
                    },
                ],
            },
            /* {router[4].children?.[2].path} */
            {
                path: "/produits/trottinette/teverun",
                children: [
                    /* {router[4].children?.[2].children?.[0].path} */
                    {
                        path: "/produits/trottinette/teverun",
                        element: <Teverun_Page />,
                    },
                ],
            },
            /* {router[4].children?.[3].path} */
            {
                path: "/produits/trottinette/kaboo",
                children: [
                    /* {router[4].children?.[3].children?.[0].path} */
                    {
                        path: "/produits/trottinette/kaboo",
                        element: <Kaboo_Page />,
                    },
                ],
            },
            /* {router[4].children?.[4].path} */
            {
                path: "/produits/trottinette/vsett",
                children: [
                    /* {router[4].children?.[4].children?.[0].path} */
                    {
                        path: "/produits/trottinette/vsett",
                        element: <Vsett_Page />,
                    },
                ],
            },
        ],
    },
    /* {router[5].path} */
    {
        path: "/mentions-legales",
        element: <MentionsLegales_Page />,
    },
    /* {router[6].path} */
    {
        path: "/cgv",
        element: <CGV_Page />,
    },
];

export default router;
