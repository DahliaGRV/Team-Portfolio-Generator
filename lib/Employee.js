// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
    }
    getName(name){
       const e= new Employee(name);
        return this.name;
    }
    getId(id){
        const e = new Employee(id);
        return this.id;
    }
    getEmail(email){
        const e= new Employee(email);
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;
