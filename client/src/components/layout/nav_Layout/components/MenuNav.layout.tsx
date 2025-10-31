import { useState } from "react";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import style from "../../../StyleRootComponent.module.css";

interface MenuNavRootProps {
    moduleMenuUl: string;
    moduleMenuLi: string;
    moduleMenuLink: string;
    moduleSubMenuUl: string;
    moduleSubMenuLi: string;
    moduleSubMenuLink: string;
    moduleSpanPortraits?: string;
    moduleSubMenuPortraits?: string;

    moduleMenuLiTarget1?: string;
    moduleMenuLiTarget2?: string;
    moduleMenuLiTarget3?: string;
    moduleMenuLiTarget4?: string;
    moduleMenuLiTarget5?: string;
    moduleMenuLiTarget6?: string;

    moduleButtonSubMenu?: string;
    moduleSubMenuLiTarget1?: string;
    moduleSubMenuLiTarget2?: string;
    moduleSubMenuLiTarget3?: string;
}

function MenuNavRoot(Props: MenuNavRootProps) {
    const { moduleMenuUl, moduleMenuLi, 
        moduleMenuLink, moduleSubMenuUl, 
        moduleSubMenuLi, moduleSubMenuLink, 
        moduleSpanPortraits, moduleSubMenuPortraits, 
        moduleMenuLiTarget1, moduleMenuLiTarget2, 
        moduleMenuLiTarget3, moduleMenuLiTarget4,
        /*moduleMenuLiTarget5,*/ moduleMenuLiTarget6,
        moduleSubMenuLiTarget1,moduleSubMenuLiTarget2,
        moduleSubMenuLiTarget3, moduleButtonSubMenu } = Props;

    const [subMenuOpenProduits, setSubMenuOpenProduits] = useState(false);
    const [subMenuOpenServices, setSubMenuOpenServices] = useState(false);

    return (
        <ul className={moduleMenuUl}>
            {/* Menu déroulant pour Produits */}
            <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setSubMenuOpenProduits(!subMenuOpenProduits)}>
            <button
                type="button"
                className={`${moduleMenuLink} ${moduleSubMenuPortraits} ${style.Button}`}
                onClick={() => setSubMenuOpenProduits(!subMenuOpenProduits)}
                aria-expanded={subMenuOpenProduits}
                aria-controls="Ouverture du sous menu des produits"
                aria-haspopup="true"
            >
                PRODUITS <span className={moduleSpanPortraits}>{subMenuOpenProduits ? "▲" : "▼"}</span>
            </button>

                {subMenuOpenProduits && (
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
            
            {/* Menu déroulant pour Portraits */}
            <li className={`${moduleMenuLi} ${moduleMenuLiTarget1}`} onClick={() => setSubMenuOpenProduits(!subMenuOpenProduits)}>
            <button
                type="button"
                className={`${moduleMenuLink} ${moduleSubMenuPortraits} ${style.Button}`}
                onClick={() => setSubMenuOpenProduits(!subMenuOpenProduits)}
                aria-expanded={subMenuOpenProduits}
                aria-controls="Ouverture du sous menu des produits"
                aria-haspopup="true"
            >
                SERVICES <span className={moduleSpanPortraits}>{subMenuOpenProduits ? "▲" : "▼"}</span>
            </button>

                {subMenuOpenProduits && (
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

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget2}`}>
                <Link to="#" className={moduleMenuLink}>CONTACT</Link>
            </li>

            <li className={`${moduleMenuLi} ${moduleMenuLiTarget6}`}>
                <Link to="#" className={moduleMenuLink}>COMPTE</Link>
            </li>
        </ul>
    );
}

export default MenuNavRoot;
