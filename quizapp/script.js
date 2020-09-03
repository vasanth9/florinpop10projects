const quizData = [{
        question: "How old is Florin?",
        a: '10',
        b: '17',
        c: '26',
        d: '100',
        correct: 'c'
    },
    {
        question: 'what is the most used programming language used in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },



];
let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit')
loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;


}

function deselect() {
    const answersEl = document.querySelectorAll(".answer");
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

function getSelected() {
    const answersEl = document.querySelectorAll(".answer");
    let answer = undefined
    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        console.log(answer)
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length}questions</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }






})