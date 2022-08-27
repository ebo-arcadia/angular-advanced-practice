var SoftwareDeveloper = /** @class */ (function () {
    function SoftwareDeveloper(titleParam, responsibilityParam, skillsParam, expertiseParam, basePayParam, isEmployedParam) {
        this.title = titleParam;
        this.responsibility = responsibilityParam;
        this.skills = skillsParam;
        this.expertise = expertiseParam;
        this.basePay = basePayParam;
        this.isEmployed = isEmployedParam;
    }
    SoftwareDeveloper.prototype.getNetSalary = function () {
        var netPay = 0;
        if (this.isEmployed == true) {
            if (this.basePay < 100000) {
                netPay = this.basePay - (this.basePay * 10 / 100);
            }
            else
                (netPay = this.basePay - (this.basePay * 15 / 100));
        }
        else {
            netPay = 0;
        }
        return netPay;
    };
    return SoftwareDeveloper;
}());
var developer_one;
developer_one = new SoftwareDeveloper("application engineer 1", "developing software", ["python", "angular", "javascript", "java", "AWS"], "full-stack technologies and framework", 120000, true);
console.log("obj: ", developer_one);
console.log("title: ", developer_one.title);
console.log("responsibility: ", developer_one.responsibility);
console.log("expertise: ", developer_one.expertise);
console.log("skills: ", developer_one.skills);
console.log("is employed or not: ", developer_one.isEmployed);
console.log("base salary: ", developer_one.basePay);
console.log("get salary: ", developer_one.getNetSalary());
