const prompt = require('prompt-sync')({sigint: true});
console.log("Welcome to the To-Do List Manager Application!")
console.log("\n")
console.log("==============================================")
console.log("\n")
console.log("Your to-do list is empty.")

console.log("~Select an action~")
console.log("[1] Create a to- do item ")
console.log("[2] Complete a to-do item")
console.log("[3] unfinnished to-do item")
console.log("[6] Exiting to-do list")

let option = Number(prompt(">"))
let toDoList = []
let statusArray = []

while(option !== 6){
    if(option === 1){

        console.log("~ Creating a new to-do item ~")
        console.log("What is this to-do item called?")

        let addItem = prompt("> ")
        while(addItem.length === 0){
        console.log("Invalid Entry")
        addItem = prompt("> ")
        }

        toDoList.push(addItem)
        statusArray.push(false)

        toList()

        selectOption()

    }else if (option === 2){
        if(toDoList.length !== 0){
        console.log("\n ~ Select an action a new to-do item ~")
        toList()

        let newStatus = Number(prompt("> "))

            while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
            console.log(("Pease input a valid number: "))
            newStatus = Number(prompt("> "))
            }
            statusArray[newStatus-1] = true
               
        }else{
            console.log("Please add to the to-do list: ")
        }
            toList()
            selectOption()
    }else if(option === 3){

        if(toDoList.length !== 0){
            console.log("\n ~ Select an action a new to-do item ~")
            toList()
    
             newStatus = Number(prompt("> "))
    
                while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
                console.log(("Pease input a valid number: "))
                newStatus = Number(prompt("> "))
                }
                statusArray[newStatus-1] = false
                   
            }else{
                console.log("Please add to the to-do list: ")
            }
                toList()
                selectOption()
        

    }
    else if(option === 4){

        if(toDoList.length !== 0){
            console.log("\n ~ Select an action a new to-do item ~")
            toList()
    
             let modify = Number(prompt("> "))
    
                while(isNaN(modify) || modify > statusArray.length || modify < 1 || modify === 0){
                console.log(("Pease input a valid number: "))
                modify = Number(prompt("> "))
                }
                toDoList[modify - 1] = prompt("Enter new text: ")
                
                toList()
                selectOption()
            }else{
                console.log("Please add to the to-do list: ")
            }
                toList()
                selectOption()
        }else if(option === 5){

            if(toDoList.length !== 0){
                console.log("\n ~ Select an action a new to-do item ~")
                toList()
        
                 let deleteA = Number(prompt("> "))
        
                    while(isNaN(deleteA) || deleteA > statusArray.length || deleteA < 1 || deleteA === 0){
                    console.log(("Pease input a valid number: "))
                    deleteA = Number(prompt("> "))
                    }
                    toDoList.splice([deleteA-1],1) 
                    statusArray.splice([deleteA-1],1)
                    toList()
                    selectOption()
                }else{
                    console.log("Please add to the to-do list: ")
                }
                    toList()
                    selectOption()
            }else {
            console.log("\n Invalid entry ")
                selectOption()
}


console.log("~Exiting to-do list~")



function selectOption(){
    console.log("~Select an action~")
    console.log("[1] Create a to- do item ")
    console.log("[2] Complete a to-do item")
    console.log("[3] unfinnished to-do item")
    console.log("[4] Modify to-do item text")
    console.log("[5] delete to-do item ")
    console.log("[6] Exiting to-do list")
    option = Number(prompt(">"))
}



function toList(){
    if(toDoList === 0){
        console.log("Your to do list is empty")
    }else{
        console.log(" You have " + toDoList.length + " to-do item(s) ")
    }
        for(let i = 0; i < toDoList.length; i++){
        let status = ""
            if(statusArray[i] === false){
            status = "[Incomplete] "
            }else if(statusArray[i] === true){
            status = "[Complete] "
            }
        console.log((i+1) + ". " + status + toDoList[i])
        }
}
}