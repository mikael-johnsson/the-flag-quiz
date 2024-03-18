
// Flag arrays
let easyFlags = [
    {name: "Argentina", flag: "assets/images/flags-easy/argentina.png"},
    {name: "Austria", flag: "assets/images/flags-easy/austria.png"},
    {name: "Brazil", flag: "assets/images/flags-easy/brazil.png"},
    {name: "Canada", flag: "assets/images/flags-easy/canada.png"},
    {name: "China", flag: "assets/images/flags-easy/china.png"},
]

// Wait for DOM to load, then get difficulty input
document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByClassName("difficulty-buttons");
    let flags;
    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("id") === "easy-button"){
                flags = easyFlags
                alert("You clicked Easy");
            } else if (this.getAttribute("id") === "moderate-button"){
                //flags = moderateFlags
                alert(`You clicked moderate`);
            } else if (this.getAttribute("id") === "hard-button"){
                //flags = hardFlags
                alert(`You clicked hard`);
            } else if (this.getAttribute("id") === "start-button" && flags !== undefined) {
                runGame(flags);
                //alert("You want to start game")
            } else alert("You need to choose difficulty")
        } )
    }
})

function runGame(flags) {
    //To display the game-div
    document.getElementById("start-div").style.display = "none"
    document.getElementById("game-div").style.display = "block"

    //To generate flag
    let flag = Math.floor(Math.random() * flags.length + 1);
    let question = flags[flag];
    document.getElementById("flag").src = question.flag;

    //to generate options
    let optionButtons = document.getElementsByClassName("option");
    let i = 0;
    while (i <= 4){
        let country = Math.floor(Math.random() * flags.length + 1);
        optionButtons[i].textContent = flags[country].name 
        i++;
    }
    
    
     
}

function displayQuestion(){

}

function compareAnswer(){}

function countCorrectAnswer(){}

function endMessage(){}