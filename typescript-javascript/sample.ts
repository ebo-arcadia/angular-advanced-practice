var ticketNumber: number = 100;
var content: string =  "I can only be string and nothing else!"
var blackOrWhite: boolean = false
var objectLiterals: any = ["faith", "hope", "love"]
var stringNum: string = '888'
var country: any = {
    countryName: "Bermuda",
    population: 69_000,
    armyNum: 2000,
    manageArmy: function() {
        if (this.armyNum >= 1500) { return "time to reduce army force!"}
        else { return "we need more army soldiers!"}
    },
    makePolicy: function() {
        return "passing a new tax law"
    }
}

country.constitution = "british parliment"

console.log(ticketNumber)
console.log(content)
console.log(blackOrWhite)
console.log(objectLiterals)
console.log(stringNum)
console.log(country.countryName)
console.log(country.population)
console.log(country.armyNum)
console.log(country.manageArmy())
console.log(country.makePolicy())
console.log(country.constitution)
