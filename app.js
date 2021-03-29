const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const answerBtns = document.getElementById('answer-buttons');
const quesElement = document.getElementById('question');
const bodyElement = document.getElementsByTagName('body')[0];
const pointsContainer = document.getElementById('points-container');

let shuffledQues, currentQuesIndex;
let pointsEarned = 0;
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
answerBtns.addEventListener('click', checkAnswer);

function startQuiz() {
    pointsEarned = 0;
    pointsContainer.innerText = "";
    startBtn.classList.add('hide');
    quesElement.classList.remove('hide');
    shuffledQues = questions.sort(() => Math.random() - .5);
    currentQuesIndex = 0;
    questionContainer.classList.remove('hide');
    shuffleQuestion();
}

function shuffleQuestion() {
    showQuestion(shuffledQues[currentQuesIndex]);  
}

function showQuestion(question) {
    quesElement.innerText = question.question;
    question.answers.forEach(elem => {
        const newBtn = document.createElement('button');
        newBtn.classList.add('btn',);
        newBtn.innerText = elem.text
        answerBtns.appendChild(newBtn);
    });    
}

function nextQuestion(){
    //console.log("NEXTQUESTION()");
    currentQuesIndex++;
    //console.log(currentQuesIndex);
    bodyElement.classList.remove('correct');
    bodyElement.classList.remove('wrong');
    clearStack();
    if(currentQuesIndex < shuffledQues.length){
        showQuestion(shuffledQues[currentQuesIndex]);
    } else{
        startBtn.innerText = 'Restart';
        pointsContainer.innerText = `Points Earned: ${pointsEarned}`;
        console.log("pointsEarned " + pointsEarned);
        startBtn.classList.remove('hide');
        quesElement.classList.add('hide');
    }
}

function nextButton(){
    nextBtn.classList.remove('hide');
}

function checkAnswer(e) {
    for(let i = 0; i < 4; i++){
        if((e.target.innerText === shuffledQues[currentQuesIndex].answers[i].text)){
            if(shuffledQues[currentQuesIndex].answers[i].correct){
                bodyElement.classList.add('correct');
                pointsEarned++;
            }
            else {
                bodyElement.classList.add('wrong');
                bodyElement.classList.remove('correct');
            }
        }
    } 
    nextButton();
}

function clearStack(){
    nextBtn.classList.add('hide');
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

const questions = [
    {
        question: "Who invented JavaScript?",
        answers: [
            { text: "Douglas Crockford", correct: false },
            { text: "Matthew Perry", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "Terry Pierce", correct: false },
        ],
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: [
            { text: "Node.js", correct: false },
            { text: "npm", correct: true },
            { text: "TypeScript", correct: false },
            { text: "AngularJS", correct: false },
        ],
    },
    {
        question: "Which tools can you use to ensure code quality?",
        answers: [
            { text: "Angular", correct: false },
            { text: "jQuery", correct: false },
            { text: "RequireJS", correct: false },
            { text: "ESLint", correct: true },
        ],
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onmouseover", correct: false },
            { text: "onchange", correct: false },
            { text: "onmouseclick", correct: false },
            { text: "onclick", correct: true },
        ],
    },
    {
        question: "JavaScript is a _____ -side programming language?",
        answers: [
            { text: "Client", correct: false },
            { text: "Server", correct: false },
            { text: "Both", correct: true },
            { text: "None", correct: false },
        ],
    }
]