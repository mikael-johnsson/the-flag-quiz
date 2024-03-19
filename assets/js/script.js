
// Flag arrays
let easyFlags = [
    {name: "Argentina", flag: "assets/images/flags-easy/argentina.png", answers:["Argentina", "Mexico", "China", "Japan", "Canada"]},
    {name: "Austria", flag: "assets/images/flags-easy/austria.png", answers:["Austria", "China", "Italy", "France", "Canada"]},
    {name: "Brazil", flag: "assets/images/flags-easy/brazil.png", answers:["Brazil", "Mexico", "Czech Republic", "Japan", "Canada"]},
    {name: "Canada", flag: "assets/images/flags-easy/canada.png", answers:["Canada", "Argentina", "Austria", "Czech Republic", "Brazil"]},
    {name: "China", flag: "assets/images/flags-easy/china.png", answers:["China", "France", "Italy", "Japan", "Canada"]},
    {name: "Czech Republic", flag: "assets/images/flags-easy/czech_republic.png", answers:["Czech Republic", "Canada", "Argentina", "Austria", "Italy"]},
    {name: "France", flag: "assets/images/flags-easy/france.png", answers: ["France", "Brazil", "Mexico", "Argentina", "Austria"]},
    {name: "Italy", flag: "assets/images/flags-easy/italy.png", answers: ["Italy", "Mexico", "Japan", "China", "Brazil"]},
    {name: "Japan", flag: "assets/images/flags-easy/japan.png", answers: ["Japan", "Czech Republic", "Italy", "France", "Brazil"]},
    {name: "Mexico", flag: "assets/images/flags-easy/mexico.png", answers: ["Mexico", "France", "Czech Republic", "China", "Austria"]}
];
// global variable to help runGame
let questionCounter = 0;
// variable containing all of the chosen flags during the game // this broke the game
let flags;


// Wait for DOM to load, then get difficulty input
document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByClassName("difficulty-buttons");
    //let flags;
    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("id") === "easy-button"){
                flags = easyFlags;
            } else if (this.getAttribute("id") === "moderate-button"){
                //flags = moderateFlags
                alert(`You clicked moderate`);
            } else if (this.getAttribute("id") === "hard-button"){
                //flags = hardFlags
                alert(`You clicked hard`);
            } else if (this.getAttribute("id") === "start-button" && flags !== undefined) {
                runGame(flags);
                //alert("You want to start game")
            } else alert("You need to choose difficulty");
        } )
    }
})



function runGame(flags) {
    //To display the game-div
    document.getElementById("start-div").style.display = "none";
    document.getElementById("game-div").style.display = "block";
    
    //Question counter
    if (questionCounter < 10){
        displayQuestion(flags);
    } else {
        endMessage();
    }

}

function displayQuestion(flags){
     //To generate flag
     let flag = Math.floor(Math.random() * flags.length + 1);
     let question = flags[flag];
     document.getElementById("flag").src = question.flag; //correct answer is now in question.name
    
    
     //to generate options in shuffled order
     shuffle(question);
     let optionButtons = document.getElementsByClassName("option");
     let i = 0;
     while (i <= 4){
         optionButtons[i].innerHTML = question.answers[i];
         i++;
        }
     
    questionCounter += 1;
     //to log which answer the user selects
     for (i of optionButtons){
        i.addEventListener("click", function(){
            let selectedAnswer = this.innerHTML
            compareAnswer(selectedAnswer, question.name); 
        })
     }
    
}


function compareAnswer(selectedAnswer, correctAnswer){
    if (selectedAnswer === correctAnswer){
        updateScore()
        alert("You were correct!");
    } else { 
        alert("You were wrong!");
    }
    runGame(flags);
}

//from love maths project
function updateScore(){
    let oldScore = parseInt(document.getElementById("score").innerHTML);
    document.getElementById("score").innerText = ++oldScore;

}

function endMessage(){
    alert("The Game is Over");
    document.getElementById("game-div").style.display = "none";
    document.getElementById("result-div").style.display = "block";
}

//Fisher Yates shuffle function
function shuffle(question) {
    for (let i = question.answers.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = question.answers[i];
      question.answers[i] = question.answers[j];
      question.answers[j] = k;
    }
}