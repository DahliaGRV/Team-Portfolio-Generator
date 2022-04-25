const util = require('util');
const inquirer = require('inquirer');


const getOffice =()=>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Please enter the manager's name:"
        },{
            type:"number",
            name:"id",
            message:"Please enter the manager's ID:",
        
        },{
            type:"input",
            name:"email",
            message:"Please enter the manager's email address:"
        },
        {
            type:"number",
            name:"officeNumber",
            message:"What is the office number?"
        }

    ]).then(ans=>{
        console.log("Team Manager Added");
        ask();
    })

}

const ask=()=>{
    inquirer.prompt([
        {
            type:"list",
            name:"selection",
            message:"Would you like to add another contributor?",
            choices:["Add an Engineer","Add an Intern","All done adding"]
        }

]).then (next =()=>{
    switch(next.selection){
        case "Add an Engineer":
            getGitHub();
        case "Add an Intern":
            getSchool();
        case "All done adding":
            console.log("Everyone is added");
            break;  
    }
})
}

const getGithub=()=>{
    
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Please enter the engineer's name:"
        },{
            type:"number",
            name:"id",
            message:"Please enter the engineer's ID:",
        
        },{
            type:"input",
            name:"email",
            message:"Please enter the engineer's email address:"
        },
        {
            type:"type",
            name:"GitHubUser",
            message:"What is the engineer's GitHub username?"
        }

    ]).then (next =()=>{
        ask();
    })
}

const getSchool=()=>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Please enter the intern's name:"
        },{
            type:"number",
            name:"id",
            message:"Please enter the intern's ID:",
        
        },{
            type:"input",
            name:"email",
            message:"Please enter the intern's email address:"
        }
        ,{
            type:"type",
            name:"school",
            message:"What is the intern's school?"
        }
    ]).then (next =()=>{
        ask();
    })

}
getOffice();
