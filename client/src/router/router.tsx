/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import CGV_Page from "../pages/public/cgv_Page/CGV.page";
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Dualtron_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/Dualtron.page";
import DualtronAchilleus_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronAchilleus.page";
import DualtronAchilleusRouge_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronAchilleusRouge.page";
import DualtronAlien_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronAlien.page";
import DualtronStormLTD_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronStormLTD.page";
import DualtronThunder2_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronThunder2.page";
import DualtronThunder3_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronThunder3.page";
import DualtronVictorLTD35Ah_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronVictorLTD35Ah.page";
import DualtronVictorLTD35AhSamsung_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronVictorLTD35AhSamsung.page";
import DualtronXLTD_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/product/DualtronXLTD.page";
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
    /* {router[4].path} : page parent = children[0]*/
    {
        path: "/produits/trottinette",
        children: [
            /* {router[4]!.children![0]!.path} : page parent */
            {
                path: "/produits/trottinette",
                element: <Trottinette_Page />,
            },
            /* {router[4].children?.[1].path} : page parent = children[0] */
            {
                path: "/produits/trottinette/dualtron",
                children: [
                    /* {router[4].children?.[1].children?.[0].path} : page parent */
                    {
                        path: "/produits/trottinette/dualtron",
                        element: <Dualtron_Page />,
                    },
                    /* {router[4]!.children![1]!.children![1].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-x-ltd",
                        element: <DualtronXLTD_Page />,
                    },
                    /* {router[4]!.children![1]!.children![2].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-storm-ltd",
                        element: <DualtronStormLTD_Page />,
                    },
                    /* {router[4]!.children![1]!.children![3].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-alien",
                        element: <DualtronAlien_Page />,
                    },
                    /* {router[4]!.children![1]!.children![4].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-achilleus",
                        element: <DualtronAchilleus_Page />,
                    },
                    /* {router[4]!.children![1]!.children![5].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-achilleus-rouge",
                        element: <DualtronAchilleusRouge_Page />,
                    },
                    /* {router[4]!.children![1]!.children![6].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-thunder-2",
                        element: <DualtronThunder2_Page />,
                    },
                    /* {router[4]!.children![1]!.children![7].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-thunder-3",
                        element: <DualtronThunder3_Page />,
                    },
                    /* {router[4]!.children![1]!.children![8].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-victor-ltd-35ah-samsung",
                        element: <DualtronVictorLTD35AhSamsung_Page />,
                    },
                    /* {router[4]!.children![1]!.children![9].path} */
                    {
                        path: "/produits/trottinette/dualtron/dualtron-victor-ltd-35ah",
                        element: <DualtronVictorLTD35Ah_Page />,
                    },
                ],
            },
            /* {router[4].children?.[2].path} : page parent = children[0] */
            {
                path: "/produits/trottinette/teverun",
                children: [
                    /* {router[4].children?.[2].children?.[0].path} : page parent */
                    {
                        path: "/produits/trottinette/teverun",
                        element: <Teverun_Page />,
                    },
                ],
            },
            /* {router[4].children?.[3].path} : page parent = children[0] */
            {
                path: "/produits/trottinette/kaboo",
                children: [
                    /* {router[4].children?.[3].children?.[0].path} : page parent */
                    {
                        path: "/produits/trottinette/kaboo",
                        element: <Kaboo_Page />,
                    },
                ],
            },
            /* {router[4].children?.[4].path} : page parent = children[0] */
            {
                path: "/produits/trottinette/vsett",
                children: [
                    /* {router[4].children?.[4].children?.[0].path} : page parent */
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
