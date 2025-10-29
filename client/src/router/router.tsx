/* Import des Types */
import type { Router_Type } from "../types/router/router.type";

/* Liste des pages en import */
/* Page Frontend verrouillée */

/* Page Frontend public */
import HomePage from "../pages/public/home_Page/home.page";

/**
 * Utilisation :
 * {router[0].path}
 */

const router: Router_Type[] = [
    /* Exemple d’accès à la première route : {router[0].path} */
    {
        path: "/",
        element: <HomePage />,
    },
];

export default router;
