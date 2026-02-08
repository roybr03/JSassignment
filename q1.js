function  newPrice(currentPrice,discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }

    let results = (currentPrice - (currentPrice*(discount/100)));
    return Number(results.toFixed(3));
}