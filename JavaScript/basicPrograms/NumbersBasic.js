/**
 * convert Dogs Age to equivalent Humman Age
 */
function dogAgeToHumanAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
}

/** max amout of milk-bottles for Money given */
function maxMilkBottles(money) {
    const price = 1.4;
    return Math.floor(money / price);
}
/* */

/**
 * Life remmaning 
 * @param {*} age in years
 */
function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var x = yearsLeft * 365;//days
    var y = yearsLeft * 52; //weeks
    var z = yearsLeft * 12;// months
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}
