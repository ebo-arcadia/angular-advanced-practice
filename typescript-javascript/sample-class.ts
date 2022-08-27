class SoftwareDeveloper {

    title: string;
    responsibility: string;
    skills: any;
    expertise: string;
    basePay: number;
    isEmployed: boolean;

    constructor(titleParam: string, responsibilityParam: string, skillsParam: any, expertiseParam: string, basePayParam: number, isEmployedParam: boolean) {
        this.title = titleParam;
        this.responsibility = responsibilityParam;
        this.skills = skillsParam;
        this.expertise = expertiseParam;
        this.basePay = basePayParam;
        this.isEmployed = isEmployedParam;
    }

    getNetSalary(): number {
        let netPay: number = 0;
        if (this.isEmployed == true) {
            if (this.basePay < 100_000) { netPay = this.basePay - (this.basePay * 10 / 100)}
            else ( netPay = this.basePay - (this.basePay * 15 / 100));
        }
        else { netPay = 0}
        return netPay
    }
}

var developer_one: SoftwareDeveloper;
developer_one = new SoftwareDeveloper("application engineer 1", "developing software", ["python", "angular", "javascript", "java", "AWS"], "full-stack technologies and framework", 120_000, true);
var developer_two: SoftwareDeveloper;
developer_two = new SoftwareDeveloper("backend developer", "working with computer code", ["c#", "C--", "qSharp", "machine learning"], "backend", 280_000, true);
var developer_three: SoftwareDeveloper;
developer_three = new SoftwareDeveloper("cloud developer", "develop software in the cloud", ["tensorflow", "GitOps"], "cloud compute", 420_000, true);

var developers: SoftwareDeveloper[] = [];
developers.push(developer_one, developer_two, developer_three)

for (let i = 0; i < developers.length; i ++) {
    console.info(developers[i])
    console.log("get title of each developer object: ", developers[i].title)
}

