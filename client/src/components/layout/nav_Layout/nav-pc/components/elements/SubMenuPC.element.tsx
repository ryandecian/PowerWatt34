/* Import des composants React */
import { useState } from "react";

/* Import des Types */

function SubMenuPC_Element({ name }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setSubMenuOpen(!subMenuOpenProduits)}>
            <button
                type="button"
                className={`${moduleMenuLink} ${moduleSubMenuPortraits} ${style.Button}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                aria-expanded={subMenuOpen}
                aria-controls="Ouverture du sous menu des produits"
                aria-haspopup="true"
            >
                PRODUITS <span className={moduleSpanPortraits}>{subMenuOpen ? "▲" : "▼"}</span>
            </button>

            {subMenuOpen && (
                <>
                    {/* Bouton de fermeture menu burger */}
                    <button 
                        type="button" 
                        className={`${moduleButtonSubMenu} ${style.Button}`}
                        aria-label="Fermer le sous menu des produits"
                        onClick={() => setSubMenuOpenProduits(!subMenuOpenProduits)}
                    >
                        Fermer
                    </button>

                    <ul className={moduleSubMenuUl}>
                        <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget1}`}>
                            <Link to={ListDataRouter[11].path} className={moduleSubMenuLink}>Corporate</Link>
                        </li>
                        <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget2}`}>
                            <Link to={ListDataRouter[12].path} className={moduleSubMenuLink}>LifeStyle</Link>
                        </li>
                        <li className={`${moduleSubMenuLi} ${moduleSubMenuLiTarget3}`}>
                            <Link to={ListDataRouter[13].path} className={moduleSubMenuLink}>Mariage</Link>
                        </li>
                    </ul>
                </>
            )}
        </li>
    )
}

export { SubMenuPC_Element };
