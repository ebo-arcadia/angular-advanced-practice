class Country {
    name: string;
    population: number;
    politics: string;
    states: any;
    religions: any;
    isDemocratic: boolean;

    constructor(nameParam: string, populationParam: number, politicsParam: string, statesParam: any, religionsParam: any, isDemocraticParam: any) {
        this.name = nameParam;
        this.population = populationParam;
        this.politics = politicsParam;
        this.states = statesParam;
        this.religions = religionsParam;
        this.isDemocratic = isDemocraticParam
    }

    setLegislation() { console.info("set new legislation")}
    startWar() { console.info("time to defend the country!")}

}

class Community extends Country {
    location: string;
    constructor(name: string, population: number, politics: string, states: any, religions: any, isDemocratic: boolean, locationParam: string) {
        super(name,population,politics,states,religions,isDemocratic)
        this.location = locationParam
    }

    // method overriding
    override setLegislation(): void {
        console.log("a new policy has just passed in the south phlly county!")
    }

    override startWar(): void {
        console.log("south philly has just started a war on child abuse!")
    }
}

var a_community: Community;
a_community = new Community("south philly", 100_000, 'democratic', ['little Italy', 'YMCA', 'washington Ave'], 'christian', true, 'south') 
console.info("birth of a new community object: ", a_community);
a_community.setLegislation();
a_community.startWar();