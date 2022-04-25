// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(officeNumber){
        super();
        this.officeNumber=officeNumber;
    }
    getOffice(officeNumber){
        const e= new Manager(officeNumber);
        return this.officeNumber;

    }
    getRole(){
        return "Manager";
    }

}
module.exports=Manager;