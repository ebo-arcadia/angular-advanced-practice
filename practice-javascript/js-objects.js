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

// real world scenarios
// object: developer

var developer = {
    firstName: "Jake",
    lastName: "Wesker",
    title: "Mid-level Application developer",
    salary: 75_000,
    workExperienceInYears: 4,
    isEligibleForPromotion: false,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    promote: function() {
        if (this.title == "Application developer") {
            if (this.workExperienceInYears >= 1 && this.workExperienceInYears <= 3) {
                this.isEligibleForPromotion = true;
                this.title = "Mid-level Application developer";
                this.salary += this.salary * 0.10;
            }
            else {
                this.isEligibleForPromotion = false;
            }
        }

        else if (this.title == "Mid-level Application developer") {
            if (this.workExperienceInYears > 3 && this.workExperienceInYears <= 5) {
                this.isEligibleForPromotion = true;
                this.title = "Architect consultant";
                this.salary += this.salary * 0.30;
            }
            else {
                this.isEligibleForPromotion = false;
            }
        }
        return this.isEligibleForPromotion;
    }

};


if (developer.promote() == true) {
    console.log("Dear " + developer.getFullName() + ", Congratulations! You are promoted!")
    console.log("Your new title is: " + developer.title);
    console.info("Your new salary is: " + developer.salary)
}
else {
    console.info("You will be promoted in the near future!")
};

// adding properties and methods from outside of object

var newHire = {};
newHire.title = "SWE";
newHire["salary"] = 100_000;
newHire.tools = ["python", "javascript", "java", "swift3"]
newHire.greeting = function(name) { return `My name is ${name} and I am a new SWE!`}
console.info(newHire.title);
console.info(newHire["tools"])
console.info(newHire.salary)
console.info(newHire.greeting("leon"));
console.info(newHire);

console.log("-----------")
