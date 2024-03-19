
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

// Wait for DOM to load, then get difficulty input
document.addEventListener("DOMContentLoaded",function(){
    let buttons = this.getElementsByClassName("difficulty-buttons");
    let flags;
    for (let button of buttons){
        button.addEventListener("click",function(){
            if (this.getAttribute("id") === "easy-button"){
                flags = easyFlags;
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
    document.getElementById("start-div").style.display = "none";
    document.getElementById("game-div").style.display = "block";

    //Question counter
    let i = 0;
    let questionCounter = 0;
    if (i <= 10){
        let isGameOver = false;
        displayQuestion(flags, questionCounter)
    } else {
        isGameOver = true;
        endMessage();
    }


   
}

function displayQuestion(flags, questionCounter){
     //To generate flag
     let flag = Math.floor(Math.random() * flags.length + 1);
     let question = flags[flag];
     document.getElementById("flag").src = question.flag; //correct answer is now in question.name and one of the answers
    
    
     //to generate options
     shuffle(question)
     let optionButtons = document.getElementsByClassName("option");
     let i = 0;
     while (i <= 4){
         optionButtons[i].innerHTML = question.answers[i]
         i++;
     }
     questionCounter += 1;

}

function compareAnswer(){}

function countCorrectAnswer(){}

function endMessage(){}

//Fisher Yates shuffle function //update 5 to question.answers.length
function shuffle(question) {
    for (let i = question.answers.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let k = question.answers[i];
      question.answers[i] = question.answers[j];
      question.answers[j] = k;
    }
}