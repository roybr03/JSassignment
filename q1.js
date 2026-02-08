
/*git remote add origin https://github.com/roybr03/JSassignment.git
git branch -M main
git push -u origin main*/
function  newPrice(currentPrice,discount) {
    if (typeof(currentPrice) !== "number" || typeof(discount) !== "number") {
        return "Invalid";
    }

    let results = (currentPrice - (currentPrice*(discount/100)));
    return results.toFixed(3);
}

let p = newPrice(500, "5");
console.log(p);
