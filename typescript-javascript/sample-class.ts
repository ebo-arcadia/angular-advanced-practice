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

console.log("obj: ", developer_one)
console.log("title: ", developer_one.title)
console.log("responsibility: ", developer_one.responsibility)
console.log("expertise: ", developer_one.expertise)
console.log("skills: ", developer_one.skills)
console.log("is employed or not: ", developer_one.isEmployed)
console.log("base salary: ", developer_one.basePay)
console.log("get salary: ", developer_one.getNetSalary())
