
// Wait for DOM to load, then get difficulty input
document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByClassName("difficulty-buttons");
    let flags;
    alert("hello")
    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("id") === "easy-button"){
                //flags = easyFlags
                alert("You clicked Easy");
            } else if (this.getAttribute("id") === "moderate-button"){
                //flags = moderateFlags
                alert(`You clicked moderate`);
            } else {
                // flags = hardFlags
                alert(`You clicked hard`);
            }
        } )
    }
return flags;
})

// Flag arrays

let easyFlags = [
    {name: "Argentina", flag: "assets/images/flags-easy/argentina.png"},
    {name: "Austria", flag: "assets/images/flags-easy/austria.png"},
    {name: "Brazil", flag: "assets/images/flags-easy/brazil.png"},
    {name: "Canada", flag: "assets/images/flags-easy/canada.png"},
    {name: "China", flag: "assets/images/flags-easy/china.png"},
]


function runGame() {

}

function displayQuestion(){}

function compareAnswer(){}

function countCorrectAnswer(){}

function endMessage(){}