//global variables
let startQuizbtn =
    let now = new Date().now();
let endTime = now.setInterval();
let questions = [
    { title: ["Question 1"], choices: ["hi", "how", "are", "you"], answer: ["hi"] },
    { title: ["This is the first question"], choices: ["hi", "how", "are", "you"], answer: ["hi"] },
]

//functions
function startQuiz() {
    //aler("i started the game");

    //bring up question
    let title = document.createElement("h2");
    title.textContent = questions[0].choices[0];
    qDiv.appendChild(title);

    let buttonOne = document.createElement("button");
    buttonOne.textContent = questions[0].choices[0];
    buttonOne.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonOne);

    let buttonTwo = document.createElement("button");
    buttonTwo.textContent = questions[0].choices[1];
    buttonTwo.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonTwo);

    let buttonThree = document.createElement("button");
    buttonThree.textContent = questions[0].choices[2];
    buttonThree.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonThree);

    let buttonFour = document.createElement("button");
    buttonFour.textContent = questions[0].choices[3];
    buttonFour.dataset.answer = questions[0].answer;
    qDiv.appendChild(buttonFour);

    //make clickable
}


startQuizbtn.addEventListener("click", startQuiz);

qDiv.addEventListener("click", function (event) {
    console.log(event);
    let choice = event.target.innerHTML;
    let answer = event.target.dataset.answer;
    if (choice === answer) {
        alert('you are correct');
        Score++;
    } else {
        alert('incorrect');
    }

    //go to next question
}
)

//executables

//documents


