class Company {
    public title: string;
    private trademark: string;
    protected value: number;

    constructor(titleParam: string, trademarkParam: string, valueParam: number) {
        this.title = titleParam;
        this.trademark = trademarkParam;
        this.value = valueParam;
    }

    private getInternalAudit = () => {
        console.log("company to audit: " + this.title, "trade mark registered: " + this.trademark, "company worth: " + this.value)
    }

    public getCompanyProfile = () => {
        console.info("company name: " + this.title, "company trade mark: " + this.trademark, "company worth: " + this.value)
    }
}

let company = new Company("Apple", "iOS", 100_000)
company.title = "Start up A";
company.trademark = "AR toolkit";
company.getInternalAudit();
company.getCompanyProfile();

class Startup extends Company {
    private iPO: number = 2022;
    constructor(title: string, trademark: string, value: number) {
        super(title, trademark, value)
    }

    protected getStartupIPO () {
        console.info("company IPO: " + this.iPO)
    }
}

let startup = new Startup("cryptocurrency", "new coin base", 1000)
startup.getStartupIPO();
startup.iPO;

class Corporate extends Startup {
    private CEO: string = "Hosea";
    constructor(title: string, trademark: string, value: number) {
        super(title, trademark, value)
    }

}


