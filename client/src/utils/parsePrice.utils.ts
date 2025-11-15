function parsePrice_Utils(price: string): number {
    return Number(price.replace("€", "").replace(/\s+/g, ""));
}

export { parsePrice_Utils };
