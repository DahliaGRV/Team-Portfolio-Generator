// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(github){
      super();
      this.github=github;
    }
    getGithub(){}
    getRole(){
        return "Engineer";
    }

}
module.exports=Engineer;