/* Import des modules CSS */
import style from "../../../styleRootComponent.module.css";

type A_Element_Props = {
    option?: 1 | 2 | 3;
    href: string;
    text: string;
};

function A_Element({option, href, text }: A_Element_Props) {
    return (
        <>
            {option === 1 && (<>{" "}</>)}
            {option === 3 && (<>{" "}</>)}
            <a
                href={href}
                className={style.Link}
                rel="noopener noreferrer"
                target="_blank"
            >
                {text}
            </a>
            {option === 2 && (<>{" "}</>)}
            {option === 3 && (<>{" "}</>)}
        </>
    );
}

export { A_Element };
