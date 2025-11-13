/* Import des modules CSS */
import css from "./subMenuFooterMobile.module.css";
import style from "../../../../styleRootComponent.module.css";

/* Import des composants React */
import { useState } from "react";
// import { Link } from "react-router-dom";

type SubMenuFooterMobile_Type = {
    nameMenu: string;
    nameSubMenu: {
        title: string;
        link: string;
    }[];
};

function SubMenuFooterMobile_Element({ dataMenu }: { dataMenu: SubMenuFooterMobile_Type }) {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <section className={css.SubContainerNavFooter}>
            <button
                type="button"
                className={`${css.OpenBtn} ${style.Button}`}
                onClick={() => setSubMenuOpen(!subMenuOpen)}
                aria-expanded={subMenuOpen}
                aria-controls={`Ouverture du sous menu des ${dataMenu.nameMenu}`}
                aria-haspopup="true"
            >
                <span className={style.TextP3}>{dataMenu.nameMenu}</span> <span className={css.IconOpenBtn}>{subMenuOpen ? "▲" : "▼"}</span>
            </button>
        </section>
    );
}

export { SubMenuFooterMobile_Element };
