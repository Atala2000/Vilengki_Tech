function calcPrice(waterUsage, price, prepaidBalance){
    let defaultLitres = prepaidBalance/price;
    let moneyUsed = waterUsage*price;
    let amountRemaining = prepaidBalance-moneyUsed;
    return {moneyUsed, amountRemaining, prepaidBalance, defaultLitres}
}

export {calcPrice}