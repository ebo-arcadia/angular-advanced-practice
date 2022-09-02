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

// default arguments in a function
let motion = function(velocity=1000, accelerate=54, limit=888) {
    let position = velocity * (accelerate / limit)
    let motion = position * 3.14
    return motion
}

let motion_1 = motion(120, 4, 20)
console.log("values supplied to all arguments: ", motion_1)

let motion_2 = motion()
console.log("values not supplied at all: ", motion_2)

// scope of variables

// global variables
var global_var_1 = "earth planet";
let global_var_2 = "galaxy";
console.log("print global variable 1: ", global_var_1)
console.log("print global variable 2: ", global_var_2)

let nested_function = function( parameter ) {
    var local_var_1 = "country";
    let local_var_2 = "state";
    console.log("local variable 1: ", local_var_1);
    console.log("local variable 2: ", local_var_2);
    console.log("call global variable 1 from inside this function: ", global_var_1);
    console.log("call global variable 2 from inside this function: ", global_var_2);

    if (local_var_1 == "country") {
        var block_var_1 = "county";
        let block_var_2 = "street";
        console.log("access local variable 1 from inside 1st if block: ", local_var_1);
        console.log("access local variable 2 from inside 1st if block: ", local_var_2);
        console.log("access block variable 1 from inside 1st if block: ", block_var_1);
        console.log("access block variable 2 from inside 1st if block: ", block_var_2);
    }
    if (parameter) {
        var block_var_3 = "community";
        var block_var_4 = "building";
        console.log("access local variable 1 from inside 2nd if block: ", local_var_1);
        console.log("access local variable 2 from inside 2nd if block: ", local_var_2);
        console.log("access block variable 1 from inside 2nd if block: ", block_var_3);
        console.log("access block variable 2 from inside 2nd if block: ", block_var_4);
    }

    console.log("access block variable 1 from the local scope: ", block_var_1);
    console.log("access block variable 3 from the local scope: ", block_var_3);
}

// this won't work
// console.log("access local variable 1 outside the local function scope: ", local_var_1)

nested_function("true")