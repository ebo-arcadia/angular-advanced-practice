let simpleMath = function(x, y) {
    let result = (x * y) / 100;
    return result
};

console.log(simpleMath())
let result_1 = simpleMath(2000, 5123)
console.info(result_1)
let result_2 = simpleMath(10, 5)
console.info(result_2)
let result_3 = result_1 * result_2
console.log(result_3)

function doOneThingOnly() { console.info("always execute the same line with this function..")}
doOneThingOnly()
doOneThingOnly()
doOneThingOnly()

function toDoToday() {
    console.info("all activities to do for today...");
    getEnergy();
    getSpiritualFood();
    getMoney();
    getRest();
    getConnection()
}

let getEnergy = function() { console.log("eat two meals and drink 8 glasses")}
let getSpiritualFood = function() { console.log("read the Bible and new church books")}
let getMoney = function() { console.log("go to the office and finish tasks")}
let getRest = function() { console.log("take breaks. meditate. rest. sleep")}
let getConnection = function() { console.log("socialize with my peers and family and friends")}

toDoToday()

// one function calls another function
let getDownPayment = function(downPayment) { return downPayment }
let calculateInterest = function(downPayment) { return getDownPayment(downPayment) * 0.05 }
let calculateEquity = function(downPayment) { return getDownPayment(downPayment) - downPayment * calculateInterest(downPayment)}

let closingDeal = calculateEquity(5_000)
console.log(closingDeal);