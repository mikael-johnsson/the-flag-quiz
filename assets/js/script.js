
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
    document.getElementById("start-div").style.display = "none"
    document.getElementById("game-div").style.display = "block"
    // fix the flags variable bug below
    if (flags !== "easyFlags"){
    alert("the Game is easyFlags")
    let i = Math.floor(Math.random() * flags.length + 1) 
    let question = flags[i]
    console.log(question["name"])
    }
     
}

function displayQuestion(){

}

function compareAnswer(){}

function countCorrectAnswer(){}

function endMessage(){}