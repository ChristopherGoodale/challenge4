//global variables

let saveScore = document.querySelector("#saveInitials");
let showScores = document.querySelector("#showScores");
let viewScores = document.querySelector("#viewScores");
let startQuizbtn = document.querySelector("#startQuiz");
let questionSection = document.querySelector("#questions");
let questions = [
    { title: ["Which of the below options is not a language we have coded in?"], choices: ["python", "css", "html", "javascript"], answer: ["python"] },
    { title: ["What is the correct character to use when calling IDs?"], choices: [".", "!", "4", "#"], answer: ["#"] },
    { title: ["what language, now deprecated, allowed coders to quickly set up websites with out-of-the-box designs?"], choices: ["python", "jquery", "tailwind", "css"], answer: ["jquery"] },
    { title: ["This is the fourth question"], choices: ["a", "b", "c", "d"], answer: ["c"] },
    { title: ["This is the fifth question"], choices: ["a", "b", "c", "d"], answer: ["b"] },
    { title: ["This is the sixth question"], choices: ["a", "b", "c", "d"], answer: ["b"] },
];
let questionsIndex = 1;
let timerDiv = document.querySelector("#timer");
let score = 0;
let time = 60
let timer = 0;

let scores = JSON.parse(localStorage.getItem("scores")) || [];

//functions
function startQuiz() {
    timer = setInterval(function () {
        time--; ``
        timerDiv.innerHTML = time;
    }, 1000);
    alert("Begin game")
    //aler("i started the game");

    createButtons(0);
    //bring up question


    //make clickable
}

function createButtons(index) {
    //this will cycle the buttons 
    let title = document.createElement("h2");
    title.textContent = questions[index].title;
    questionSection.appendChild(title);

    //buttons
    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[index].choices[0];
    buttonOne.dataset.answer = questions[index].answer;
    questionSection.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = questions[index].choices[1];
    buttonTwo.dataset.answer = questions[index].answer;
    questionSection.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = questions[index].choices[2];
    buttonThree.dataset.answer = questions[index].answer;
    questionSection.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = questions[index].choices[3];
    buttonFour.dataset.answer = questions[index].answer;
    questionSection.appendChild(buttonFour);
}


questionSection.addEventListener("click", function (event) {
    console.log(event);
    let choice = event.target.innerHTML;
    let answer = event.target.dataset.answer;
    if (choice === answer) {
        alert('you are correct');
        if (questionsIndex === questions.length) {
            alert('Game over!')
            score++;
        } else
            createButtons(questionsIndex);
        questionsIndex++;
        score++;
        console.log(score);
    } else {
        if (questionsIndex === questions.length) {
            alert('Game over!')
        } else
            alert('Oops, that\'s wrong!');
        createButtons(questionsIndex);
        console.log(score);
    }
    //go to next question
}
)

function enterScore() {
    let initials = document.querySelector("#initials").value;
    let userScore = {
        initials: initials,
        score: score,
    };
    scores.push(userScore);
    scores.localStorage.setItem

}

//executables
startQuizbtn.addEventListener("click", startQuiz);
saveScore.addEventListener("click", enterScore);
//documents


