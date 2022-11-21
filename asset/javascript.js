//global variables
let now = new Date().now();
let endTime = now.setInterval();
let questions = [
    { title: ["This is the first question"], choices: ["hi", "how", "are", "you"], answer: ["hi"] },
    { title: ["This is the first question"], choices: ["hi", "how", "are", "you"], answer: ["hi"] },

]

let t = deadline - now;
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

questions.addEventListener("click", function (event) {
    console.log(event.target)
    if (choices === answer) { Score++; }
    //go to next question
}
)

let timer = setInterval(function () {
    let now = newDate().getTime();
    let t = endDate - now;

    if (t >= 0) {
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 90)) / 1000);
        document.getElementById("timer-mins").innerHTML = ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";
        document.getElementById("timer-secs").innerHTML = ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
    } else {
        document.getElementById("timer").innerHTML = "The countdown is over!"
    }

}, 1000);
//executables

//documents


