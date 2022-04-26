const util = require('util');
const inquirer = require('inquirer');
const fs=require('fs');
const generateHtml =require('./util/generateHtml');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const answers = [];


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
        const manager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber);
        answers.push(manager);
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

]).then (next=>{
    switch(next.selection){
        case "Add an Engineer":
            getGithub();
            break;
        case "Add an Intern":
            getSchool();
            break;
        case "All done adding":
            console.log("Everyone is added");
            generatePort();
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
            type:"input",
            name:"github",
            message:"What is the engineer's GitHub username?"
        }

    ]).then (ans=>{
        const engineer = new Engineer(ans.name,ans.id,ans.email,ans.github);
        answers.push(engineer);
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
    ]).then (ans=>{
        const intern = new Intern(ans.name,ans.id,ans.email,ans.school);
        answers.push(intern);
        ask();
    })

}
getOffice();
generatePort=()=>{fs.writeFile(`./TeamPortfolio.html`, generateHtml(answers),function(err){
    if(err){
        throw err;
    }
})};
