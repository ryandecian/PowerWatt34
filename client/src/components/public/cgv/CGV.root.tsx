/* Import des modules CSS */
import style from "../../styleRootComponent.module.css";

function CGV_Root() {
    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Conditions Générales de Vente - CGV PowerWatt34
                </h1>
            </header>

            <h2 className={style.TitleH2_00N0}>
                1 - Objet
            </h2>

            <p className={style.TextLiP4}>
                Les présentes Conditions Générales de Vente (CGV) régissent l’ensemble des ventes de véhicules 
                électriques et des prestations de services réalisées par <strong>PowerWatt34</strong>, incluant :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    la vente de trottinettes, vélos, motos et scooters <strong>100% électriques,</strong>
                </li>
                <li className={style.TextLiP4}>
                    les prestations d’entretien, diagnostic et réparation,
                </li>
                <li className={style.TextLiP4}>
                    la commande de pièces détachées ou accessoires.
                </li>
            </ul>

            <p className={style.TextP4}>
                Toute commande passée auprès de PowerWatt34 implique l’acceptation pleine et entière des présentes CGV.
            </p>

            <h2 className={style.TitleH2}>
                2 - Identification de l’entreprise
            </h2>

            <p className={style.TextLiP4}>
                <strong>PowerWatt34 / PowerWatt Mobility</strong> <br />
                 Entreprise spécialisée dans la vente et la réparation de véhicules électriques.
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>SIREN : </strong> 988482196
                </li>
                <li className={style.TextLiP4}>
                    <strong>Adresse : </strong> 122 Chemin de Saint Hubert 34970 Lattes
                </li>
                <li className={style.TextLiP4}>
                    <strong>Email : </strong> powerwatt34@gmail.com
                </li>
                <li className={style.TextLiP4}>
                    <strong>Téléphone : </strong> 07 56 83 81 81
                </li>
                <li className={style.TextLiP4}>
                    <strong>Directrice de la publication : </strong> Helena PEREZ
                </li>
            </ul>

            <h2 className={style.TitleH2}>
                3 - Produits et services
            </h2>

            <p className={style.TextLiP4}>
                PowerWatt34 propose à la vente uniquement des véhicules <strong>non thermiques</strong>, à savoir :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    trottinettes électriques,
                </li>
                <li className={style.TextLiP4}>
                    vélos électriques,
                </li>
                <li className={style.TextLiP4}>
                    motos électriques,
                </li>
                <li className={style.TextLiP4}>
                    scooters électriques,
                </li>
                <li className={style.TextLiP4}>
                    ainsi qu'un service de réparation, diagnostic, entretien et commande de pièces détachées.
                </li>
            </ul>

            <p className={style.TextP4}>
                Les caractéristiques techniques, performances, autonomies et photos sont fournies à titre indicatif 
                selon les informations des fabricants.
            </p>

            <h2 className={style.TitleH2}>
                4 - Commandes en atelier
            </h2>

            <p className={style.TextP4}>
                Toute vente ou prestation fait l’objet d’une validation par devis ou par confirmation de commande.
            </p>

            <h3 className={style.TitleH3}>
                4.1 - Commandes nécessitant une pièce ou une intervention spécifique
            </h3>

            <p className={style.TextLiP4}>
                Lorsque la réparation nécessite la commande de pièces détachées :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    un <strong>acompte obligatoire de 50 % du montant total du devis</strong> doit être réglé avant la 
                    prise en charge du véhicule,
                </li>
                <li className={style.TextLiP4}>
                    la commande des pièces n’est effectuée qu’après réception de cet acompte.
                    Le solde est <strong>exigible à la restitution du véhicule.</strong>
                </li>
            </ul>

            <h3 className={style.TitleH3}>
                4.2 - Délais
            </h3>

            <p className={style.TextP4}>
                Les délais de réparation, d’entretien ou de livraison des pièces sont 
                <strong> indiqués sur le devis</strong> et sont donnés à titre indicatif. <br />
                Un retard ne peut en aucun cas être considéré comme un motif d’annulation de commande, sauf accord écrit.
            </p>

            <h2 className={style.TitleH2}>
                5 - Modalités de paiement
            </h2>

            <h3 className={style.TitleH3}>
                5.1 - Moyens de paiement acceptés
            </h3>

            <p className={style.TextLiP4}>
                PowerWatt34 accepte les moyens de paiement suivants :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Carte Bancaire,</strong>
                </li>
                <li className={style.TextLiP4}>
                    <strong>Virement bancaire,</strong>
                </li>
                <li className={style.TextLiP4}>
                    <strong>Espèces,</strong> dans la limite légale de <strong>1 000 € par transaction </strong> 
                    (conformément à l’article D112-3 du Code monétaire et financier).
                </li>
            </ul>

            <h3 className={style.TitleH3}>
                5.2 - Moyens de paiement refusés
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Les <strong>chèques</strong> ne sont <strong>pas acceptés.</strong>
                </li>
            </ul>

            <h3 className={style.TitleH3}>
                5.3 - Exigibilité du paiement
            </h3>



















        </section>
    )
}

export default CGV_Root;
