/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Home_Page from "../pages/public/home_Page/Home.page";
import Trottinette_Page from "../pages/public/trottinette_Page/Trottinette.page";
import Dualtron_Page from "../pages/public/trottinette_Page/brands/dualtron_Page/Dualtron.page";
import Teverun_Page from "../pages/public/trottinette_Page/brands/teverun_Page/Teverun.page";

/**
 * Utilisation :
 * {router[0].path}
 */

const router: Router_Type[] = [
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
        element: <Trottinette_Page />,
    },
    /* {router[5].path} */
    {
        path: "/produits/trottinette/dualtron",
        element: <Dualtron_Page />,
    },
    /* {router[6].path} */
    {
        path: "/produits/trottinette/teverun",
        element: <Teverun_Page />,
    },
    /* {router[7].path} */
    {
        path: "/mentions-legales",
        element: <Teverun_Page />,
    },
];

export default router;
