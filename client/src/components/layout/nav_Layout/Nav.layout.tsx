/* Import des Hooks */
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function Nav_Layout() {
    const viewportWidth: number = useMediaQueriesWidth_rem();

    return (
        <>
            {/* MediaQuery maison 800px */}
            {viewportWidth < 50 && (
                <p>Nav Mobile</p>
            )}
            {/* MediaQuery maison 800px */}
            {viewportWidth >= 50 && (
                <p>Nav PC</p>
            )}
        </>
    )
}

export default Nav_Layout;
