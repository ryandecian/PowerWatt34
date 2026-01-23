function jsonString_Utils(JSON_LD_Object: object): string {
    return (
        JSON.stringify(JSON_LD_Object)
    );
}

export { jsonString_Utils };

/* Cet Utils prend en paramètre un objet JSON-LD et retourne sa représentation sous forme de chaîne JSON de type string 
necessaire pour une injection de script JSON-LD dans une page web sous react */