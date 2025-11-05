/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import Contact_Page from "../pages/public/contact_Page/Contact.page";
import Home_Page from "../pages/public/home_Page/Home.page";

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
];

export default router;
