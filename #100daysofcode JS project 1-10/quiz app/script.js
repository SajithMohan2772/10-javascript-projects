const quizData = [
    {
        question: 'What keyword is used to declare a variable in JavaScript?',
        a: 'variable',
        b: 'declare',
        c: 'var',
        d: 'v',
        correct: 'c'
    },
    {
        question: 'Which function is used to print content to the browser console in JavaScript? ',
        a: 'print()',
        b: 'log()',
        c: 'console.log()',
        d: 'display()',
        correct: 'c'
    },
    {
        question: 'What is the correct way to comment a single line of code in JavaScript?',
        a: '/* comment */',
        b: ' // comment',
        c: '# comment',
        d: ' <!-- comment -->',
        correct: 'b'
    },
    {
        question: ' Which of the following is NOT a valid way to create a function in JavaScript? ',
        a: 'function myFunction() {}',
        b: 'var myFunction = function() {};',
        c: 'const myFunction = () => {};',
        d: 'myFunction = () => {}',
        correct: 'd'
    },
    {
        question: ' What will the following code snippet output: console.log(5 + "5");?',
        a: '10',
        b: '"50"',
        c: '"5 + 5"',
        d: '"55"',
        correct: 'd'
    },
    {
        question: 'Which array method is used to add elements to the end of an array in JavaScript?',
        a: 'push()',
        b: 'pop()',
        c: 'shift()',
        d: 'unshift()',
        correct: 'a'
    },
    {
        question: ' What is the purpose of the JSON.stringify() function in JavaScript? ',
        a: 'To parse JSON data',
        b: 'To convert JSON data to a JavaScript object',
        c: 'To convert a JavaScript object to a JSON string',
        d: 'To validate JSON syntax',
        correct: 'c'
    },
    {
        question: ' What does the === operator do in JavaScript?',
        a: 'Checks for equality of values',
        b: 'Checks for equality of values and types',
        c: 'Converts operands to the same type before comparison',
        d: 'Performs mathematical addition',
        correct: 'b'
    },
    {
        question: 'Which JavaScript keyword is used to declare a constant variable? ',
        a: 'let',
        b: 'const',
        c: 'var',
        d: 'constant',
        correct: 'b'
    },
    {
        question: 'what year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '2000',
        correct: 'b'
    },

]  

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let answer = undefined;


loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
    
    // currentQuiz = currentQuiz + 1;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log('answer', answer);

    if (answer) {
        console.log('correct', quizData[currentQuiz].correct)

        if (answer === quizData[currentQuiz].correct) {
            console.log('score', score);
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert("Please select an option before submiting!")
    }
});