class Teacher extends Student {
    constructor (Id, Name, Email, Mobile_number, Salary,Subject){
    super (Id, Name, Email, Mobile_number);
    this.Salary;
    this.Subject;
}
     salary (){
        return 'Salary is'+ this.Salary;
     }
     subject () {
       return Array.from(this.Subject.split(",")); 
     }
}

let teacher1 = new Teacher (96432, "Sadi", "Sadi@onratechange.com", 07777712345, 500 , "[English,Arabic,Math,Science]");

console.log(teacher1.salary());
console.log(teacher1.subject());


