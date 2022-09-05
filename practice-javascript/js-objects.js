// an object is an real world entity often consists of attributes and functions
// an object in computer science is data stored in memory
// it can be accessed with an reference variable
// example

var city = {
    name: "Cardiff",
    population: 5_756_000,
    attractions: ["museums", "museum_1", "museum_2", "museum_3", "parks", "park_1", "park2", "restaurants", "stakehouse", "wawa"],
    passLegislation: function(laws) {
        let lawsPassed = `${laws} are passed by the city supreme court`
        return lawsPassed + " at the city of " + this.name + " with population of " + this.population
    },
    retrieveAttraction: function(attractions) {
        let new_attractions_list = []
        for (let i = 0; i < attractions.length; i ++) {
            console.info("current attraction: ", attractions[i])
            new_attractions_list += attractions[i] + ", ";
        }
        return new_attractions_list
    }
}

console.info(city)
console.info(city.name)
console.info(city.attractions)
console.info(city.passLegislation("anti-discrimination law"))
console.info(city.retrieveAttraction(city.attractions))

// this keyword 
// when used outside any object, it represent {} by default
// used inside any object to represent properties and methods in that object
// used only inside an object
// use reference to the object outside the object
this.globalThisAttr = "global variable value"
console.log("what keyword this is referred to outside the object?: ", this.globalThisAttr);
