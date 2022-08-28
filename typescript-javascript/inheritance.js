var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Country = /** @class */ (function () {
    function Country(nameParam, populationParam, politicsParam, statesParam, religionsParam, isDemocraticParam) {
        this.name = nameParam;
        this.population = populationParam;
        this.politics = politicsParam;
        this.states = statesParam;
        this.religions = religionsParam;
        this.isDemocratic = isDemocraticParam;
    }
    Country.prototype.setLegislation = function () { console.info("set new legislation"); };
    Country.prototype.startWar = function () { console.info("time to defend the country!"); };
    return Country;
}());
var Community = /** @class */ (function (_super) {
    __extends(Community, _super);
    function Community(name, population, politics, states, religions, isDemocratic, locationParam) {
        var _this = _super.call(this, name, population, politics, states, religions, isDemocratic) || this;
        _this.location = locationParam;
        return _this;
    }
    // method overriding
    Community.prototype.setLegislation = function () {
        console.log("a new policy has just passed in the south phlly county!");
    };
    Community.prototype.startWar = function () {
        console.log("south philly has just started a war on child abuse!");
    };
    return Community;
}(Country));
var a_community;
a_community = new Community("south philly", 100000, 'democratic', ['little Italy', 'YMCA', 'washington Ave'], 'christian', true, 'south');
console.info("birth of a new community object: ", a_community);
a_community.setLegislation();
a_community.startWar();
