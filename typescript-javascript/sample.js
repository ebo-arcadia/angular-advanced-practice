var ticketNumber = 100;
var content = "I can only be string and nothing else!";
var blackOrWhite = false;
var objectLiterals = ["faith", "hope", "love"];
var stringNum = '888';
var country = {
    countryName: "Bermuda",
    population: 69000,
    armyNum: 2000,
    manageArmy: function () {
        if (this.armyNum >= 1500) {
            return "time to reduce army force!";
        }
        else {
            return "we need more army soldiers!";
        }
    },
    makePolicy: function () {
        return "passing a new tax law";
    }
};
country.constitution = "british parliment";
console.log(ticketNumber);
console.log(content);
console.log(blackOrWhite);
console.log(objectLiterals);
console.log(stringNum);
console.log(country.countryName);
console.log(country.population);
console.log(country.armyNum);
console.log(country.manageArmy());
console.log(country.makePolicy());
console.log(country.constitution);
