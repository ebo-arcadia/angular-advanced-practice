class SoftwareDeveloper {
    jobTitle: string = "";
    jobResponsibility: string = "";
    skills: any = [];
    expertise: string = "";
    isEmployed?: boolean;
    basePay: number = 0;
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
developer_one = new SoftwareDeveloper();
developer_one.jobTitle = "application engineer one";
developer_one.jobResponsibility = "working with computer code";
developer_one.expertise = "full-stack technologies and framework";
developer_one.skills = ["python", "angular", "javascript", "java", "AWS"];
developer_one.isEmployed = true;
developer_one.basePay = 120_000;

console.log("obj: ", developer_one)
console.log("title: ", developer_one.jobTitle)
console.log("responsibility: ", developer_one.jobResponsibility)
console.log("expertise: ", developer_one.expertise)
console.log("skills: ", developer_one.skills)
console.log("is employed or not: ", developer_one.isEmployed)
console.log("base salary: ", developer_one.basePay)
console.log("callback function: ", developer_one.getNetSalary())
