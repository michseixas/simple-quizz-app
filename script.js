const questions = [
    {
        question: "What does the box-sizing: border-box; property do?",
        answers: [
            {text: "Includes padding and border in the element’s width and height.", correct: true},
            {text: "Excludes padding and border from the element’s width and height.", correct: false},
            {text: "Automatically adds a border to the element.", correct: false},
            {text: "Centers the element within its container.", correct: false},
        ]
    },
    {
        question: "Which property is used to change the text color of an element?",
        answers: [
            {text: "background-color", correct: false},
            {text: "color", correct: true},
            {text: "font-color", correct: false},
            {text: "text-color", correct: false},
        ]
    },
    {
        question: "What is the purpose of the z-index property?",
        answers: [
            {text: " It controls the horizontal stacking order of elements.", correct: false},
            {text: "It sets the zoom level of an element.", correct: false},
            {text: "It controls the vertical stacking order of overlapping elements.", correct: true},
            {text: "It defines the opacity of an element.", correct: false},
        ]
    },
    {
        question: "Which CSS property is used to create space between the element’s content and its border?",
        answers: [
            {text: "Margin.", correct: false},
            {text: "Padding", correct: true},
            {text: "border-spacing", correct: false},
            {text: "outline-offset", correct: false},
        ]
    },
    {
        question: "Which of the following values can display take to hide an element without removing it from the document flow?",
        answers: [
            {text: "None", correct: true},
            {text: "hidden", correct: false},
            {text: "block", correct: false},
            {text: "inline-block", correct: false},
        ]
    },
    {
        question: "Which CSS unit is relative to the font-size of the root element?",
        answers: [
            {text: "em", correct: false},
            {text: "rem", correct: true},
            {text: "px", correct: false},
            {text: "vh", correct: false},
        ]
    },
    {
        question: "How do you make a background image cover the entire element’s background area?",
        answers: [
            {text: "background-clip: cover", correct: false},
            {text: "background-size: cover", correct: true},
            {text: "background-repeat: cover", correct: false},
            {text: "background-position: cover", correct: false},
        ]
    },
    {
        question: "Which CSS property controls the space between lines of text?",
        answers: [
            {text: "letter-spacing", correct: false},
            {text: "line-height", correct: true},
            {text: "word-spacing", correct: false},
            {text: "text-spacing", correct: false},
        ]
    },
    {
        question: "What does the :hover pseudo-class do?",
        answers: [
            {text: "It targets an element that is being clicked.", correct: false},
            {text: "It targets an element when the mouse is over it.", correct: true},
            {text: "It targets an element when it is active.", correct: false},
            {text: "It targets the first element of a type.", correct: false},
        ]
    },
    {
        question: "Which of the following properties can be animated using CSS??",
        answers: [
            {text: "background-color", correct: false},
            {text: "height", correct: false},
            {text: "transform", correct: false},
            {text: "All of the above", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}

function showQuestion(){
    resetState(); //resets the previous answers and questions
    //display the question with the question number
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1; //since indexes start at 0
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    //display the answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");//creates a button tag and saves it in a variable called "button"
        button.innerHTML = answer.text; //adding the answers to the buttons
        button.classList.add("btn"); //adding class to the buttons
        answerButtons.appendChild(button); //display the button inside the <div id="answer-buttons">
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

//to make sure each new question starts with a clean slate:
function resetState(){
    nextButton.style.display = "none"; //hides the “Next” button by setting its display style to "none"
    while(answerButtons.firstChild){// -> checks if there is any child element (an answer button) inside the answerButtons container.
        answerButtons.removeChild(answerButtons.firstChild);//->If there is a child, the function removeChild(answerButtons.firstChild) removes it.
    }
}


function selectAnswer(e){
    const selectedBtn = e.target; 
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => { //Array.from converts the collection of buttons(answerButtons.children) into a real Array
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;//Disabling all buttons prevents the user from changing their answer after one is selected.
    });
    nextButton.style.display = "block";//makes the “Next” button visible by changing its display property to block.
}


startQuiz();


