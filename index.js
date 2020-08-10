var inquirer=require("inqiurer")
var Manager=require("./lib/Manager")
var Engineer=require("./lib/Engineer")
var Intern=require("./lib/Intern")
const generateHTML = require("./utils/generateHTML");

let id = 1
var employeeList = []
function mainMenu(){
    inquirer.prompt({
        type:"list",
        message:"Please select position",
        name:"addEmployee",
        choices:["add Manager", "add Engineer", "add Intern"]
    }).then(function(userInput){
        switch(userInput.addEmployee){
            case "add Manager":
                addManager()
                break 
            case "add Engineer":
                addEngineer()
                break
            case "add Intern":
                addIntern()
                break
        }
    })
}
function addManager(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "managerName",
            
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "managerOfficeNumber"
        },
    ]).then(function(userInput) {
        var manager = new Manager(userInput.managerName, id++, userInput.managerEmail, userInput.managerOfficeNumber)

          employeeList.push(manager)

          console.log(employeeList)

          mainMenu()
    })

}
function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "engineerName",
            
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is your gitHub username?",
            name: "engineerGithub"
        },
    ]).then(function(userInput) {
        var engineer = new Engineer(userInput.engineerName, id++, userInput.engineerEmail, userInput.engineerGithub)

          employeeList.push(engineer)

          console.log(employeeList)

          mainMenu()
    })

}
function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "internName",
            
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What is your school name?",
            name: "internSchool"
        },
    ]).then(function(userInput) {
        var intern = new Intern(userInput.internName, id++, userInput.internEmail, userInput.internSchool)

          employeeList.push(intern)

          console.log(employeeList)

          mainMenu()
    })

}

init();



// $(".btn").on("click", function () {

// }

// // dog={
// //     name:"wolffy",
// //     age:12
// // }
// //dog.name
// //dog.age
// // cat ={
// //     name:"meow",
// //     age:10
// // }
// //cat.name
// //cat.age

// // constructor - consolidate objects  that same structure

// function Animal(name,age){
//     this.name=name
//     this.age=age
// }

// class Animal{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
// }

// var dog = new Animal("wolffy",12)

// var cat = new Animal("meow",10)