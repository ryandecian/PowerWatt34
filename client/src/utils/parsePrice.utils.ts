function parsePrice_Utils(price: string): number {
    return Number(price.replace("€", "").replace(/\s+/g, ""));
}

export { parsePrice_Utils };

/**
 * Convertit un prix écrit sous forme de texte (ex : "3 490 €") en un nombre utilisable.
 *
 * Pourquoi ?  
 * Lorsque les prix sont écrits dans tes données avec des espaces ou le symbole "€",
 * ils ne peuvent pas être triés ou comparés directement, car ce sont des chaînes de caractères.
 *
 * Cette fonction :
 * 1. Supprime le symbole "€"
 * 2. Supprime tous les espaces (ex : "3 490 €" devient "3490")
 * 3. Convertit le résultat en nombre JavaScript
 *
 * Exemple :
 * parsePrice_Utils("3 490 €")  → 3490
 * parsePrice_Utils("1490€")    → 1490
 *
 * Utile pour :
 * - Trier les trottinettes du prix le plus cher au moins cher
 * - Comparer des prix entre eux
 * - Manipuler les prix comme de vrais nombres
 */
