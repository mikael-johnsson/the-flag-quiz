
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

let moderateFlags = [
    {name: "Belgium", flag: "assets/images/flags-mid/belgium.png", answers:["Belgium", "Ghana", "Lithuania", "Romania", "South Korea"]},
    {name: "Georgia", flag: "assets/images/flags-mid/georgia.png", answers:["Georgia", "Jamaica", "Nigeria", "Portugal", "Romania"]},
    {name: "Ghana", flag: "assets/images/flags-mid/ghana.png", answers:["Ghana", "Belgium", "Philippines", "Vietnam", "Uruguay"]},
    {name: "Jamaica", flag: "assets/images/flags-mid/jamaica.png", answers:["Jamaica", "Thailand", "Portugal", "Georgia", "Slovakia"]},
    {name: "Lithuania", flag: "assets/images/flags-mid/lithuania.png", answers:["Lithuania", "Tunisia", "Nigeria", "Romania", "South Korea"]},
    {name: "Nigeria", flag: "assets/images/flags-mid/nigeria.png", answers:["Nigeria", "Philippines", "Portugal", "Thailand", "Uruguay"]},
    {name: "Philippines", flag: "assets/images/flags-mid/philippines.png", answers:["Philippines", "Tunisia", "Lithuania", "Slovakia", "Tunisia"]},
    {name: "Portugal", flag: "assets/images/flags-mid/portugal.png", answers:["Portugal", "Belgium", "Ghana", "Slovakia", "Vietnam"]},
    {name: "Romania", flag: "assets/images/flags-mid/romania.png", answers:["Romania", "Jamaica", "Georgia", "South Korea", "Thailand"]},
    {name: "Slovakia", flag: "assets/images/flags-mid/slovakia.png", answers:["Slovakia", "Belgium", "Georgia", "Nigeria", "Philippines"]},
    {name: "South Korea", flag: "assets/images/flags-mid/south_korea.png", answers:["South Korea", "Vietnam", "Uruguay", "Nigeria", "Lithuania"]},
    {name: "Thailand", flag: "assets/images/flags-mid/thailand.png", answers:["Thailand", "Jamaica", "Ghana", "Belgium", "Lithuania"]},
    {name: "Tunisia", flag: "assets/images/flags-mid/tunisia.png", answers:["Tunisia", "Vietnam", "Uruguay", "Slovakia", "Romania"]},
    {name: "Uruguay", flag: "assets/images/flags-mid/uruguay.png", answers:["Uruguay", "Portugal", "South Korea", "Thailand", "Jamaica"]},
    {name: "Vietnam", flag: "assets/images/flags-mid/vietnam.png", answers:["Vietnam", "Tunisia", "Philippines", "Ghana", "Georgia"]}
]

let hardFlags = [
    {name: "Armenia", flag: "assets/images/flags-hard/armenia.png", answers:["Armenia", "Ethiopia", "Gabon", "Guatemala", "Ivory Coast"]},
    {name: "Ethiopia", flag: "assets/images/flags-hard/ethiopia.png", answers:["Ethiopia", "Kazakhstan", "Kenya", "Pakistan", "Panama"]},
    {name: "Faroe Islands", flag: "assets/images/flags-hard/faroe_islands.png", answers:["Faroe Islands", "Somalia", "Vatican City", "Venezuela", "Gibraltar"]},
    {name: "Gabon", flag: "assets/images/flags-hard/gabon.png", answers:["Gabon", "Armenia", "Guatemala", "Somalia", "Sri Lanka"]},
    {name: "Gibraltar", flag: "assets/images/flags-hard/gibraltar.png", answers:["Gibraltar", "Ivory Coast", "Kazakhstan", "Kenya", "Vatican City"]},
    {name: "Guatemala", flag: "assets/images/flags-hard/guatemala.png", answers:["Guatemala", "Ethiopia", "Faroe Islands", "Gibraltar", "Panama"]},
    {name: "Ivory Coast", flag: "assets/images/flags-hard/ivory_coast.png", answers:["Ivory Coast", "Armenia", "Faroe Islands", "Pakistan", "Sri Lanka"]},
    {name: "Kazakhstan", flag: "assets/images/flags-hard/kazakhstan.png", answers:["Kazakhstan", "Venezuela", "Armenia", "Gabon", "Gibraltar"]},
    {name: "Kenya", flag: "assets/images/flags-hard/kenya.png", answers:["Kenya", "Guatemala", "Pakistan", "Kazakhstan", "Vatican City"]},
    {name: "Pakistan", flag: "assets/images/flags-hard/pakistan.png", answers:["Pakistan", "Venezuela", "Sri Lanka", "Somalia", "Panama"]},
    {name: "Panama", flag: "assets/images/flags-hard/panama.png", answers:["Panama", "Kenya", "Ivory Coast", "Gabon", "Ethiopia"]},
    {name: "Somalia", flag: "assets/images/flags-hard/somalia.png", answers:["Somalia", "Faroe Islands", "Gibraltar", "Vatican City", "Venezuela"]},
    {name: "Sri Lanka", flag: "assets/images/flags-hard/sri_lanka.png", answers:["Sri Lanka", "Armenia", "Kazakhstan", "Ethiopia", "Panama"]},
    {name: "Vatican City", flag: "assets/images/flags-hard/vatican_city.png", answers:["Vatican City", "Guatemala", "Gabon", "Ivory Coast", "Kenya"]},
    {name: "Venezuela", flag: "assets/images/flags-hard/venezuela.png", answers:["Venezuela", "Sri Lanka", "Somalia", "Pakistan", "Faroe Islands"]}
]
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
            } else if (this.getAttribute("id") === "start-button" && flags !== undefined && username !== undefined) {
                runGame(flags);
                //alert("You want to start game")
            } else alert("Have you chosen difficulty and a username?");
        } )
    }
})

//To display the chosen username
let username = document.getElementById("username").value;
console.log(username);
document.getElementById("score-username").innerHTML = `${username}'s score:`;



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
    // Display result div
    document.getElementById("game-div").style.display = "none";
    document.getElementById("result-div").style.display = "block";

    //Display end message
    let finalResult = document.getElementById("score").innerText
    document.getElementById("result-message").innerHTML = `Great job ${username.value}!\nYou got ${finalResult} correct answers!`
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