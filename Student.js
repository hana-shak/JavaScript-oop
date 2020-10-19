class Student { 
    constructor(Id, Name, Email, Mobile_number){
        this.Id = Id;
        this.Name = Name;
        this.Email = Email;
        this.Mobile_number = Mobile_number;
    }

    name () {
        return this.Id +'for' + this.Name ;
    }
    mobile () {
        return "Phone number is " + this.Mobile_number;
    }

}
let student1 = new Student (123456, "sarah", "sara@orange.com", 07894561230);