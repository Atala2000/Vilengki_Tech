function calcPrice(waterUsage, householdPrice, prepBalance){
    let moneyUsed = waterUsage*householdPrice;
    let amountRemaining = prepBalance-moneyUsed;
    return {moneyUsed, amountRemaining}
}