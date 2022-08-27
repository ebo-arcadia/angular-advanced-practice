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
var developer_two;
developer_two = new SoftwareDeveloper("backend developer", "working with computer code", ["c#", "C--", "qSharp", "machine learning"], "backend", 280000, true);
var developer_three;
developer_three = new SoftwareDeveloper("cloud developer", "develop software in the cloud", ["tensorflow", "GitOps"], "cloud compute", 420000, true);
var developers = [];
developers.push(developer_one, developer_two, developer_three);
for (var i = 0; i < developers.length; i++) {
    console.info(developers[i]);
    console.log("get title of each developer object: ", developers[i].title);
}
