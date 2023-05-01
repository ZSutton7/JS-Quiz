// Quiz data array
const quizData = [ 
{    
    question: "What artist released the hit song 'Uptown Funk' in 2014?",    
    answer: "Mark Ronson",    
    options: ["Mark Ronson", "Bruno Mars", "Pharrell Williams", "Justin Timberlake"]
},
{
    question: "What is the name of the character played by Millie Bobby Brown in the Netflix series 'Stranger Things'?",
    answer: "Eleven",
    options: ["Eleven", "Max", "Nancy", "Joyce"]
},
{
    question: "What movie won the Academy Award for Best Picture in 2016?",
    answer: "Moonlight",
    options: ["Moonlight", "La La Land", "Arrival", "Manchester by the Sea"]
},
{
    question: "What celebrity couple famously split up in 2016, causing a media frenzy?",
    answer: "Brad Pitt and Angelina Jolie",
    options: ["Brad Pitt and Angelina Jolie", "Kim Kardashian and Kanye West", "Taylor Swift and Calvin Harris", "Beyonce and Jay-Z"]
},
{
    question: "What is the name of the character played by Ryan Reynolds in the 2016 movie 'Deadpool'?",
    answer: "Wade Wilson",
    options: ["Wade Wilson", "Peter Quill", "Tony Stark", "Bruce Wayne"]
}
];

// Get the quiz container, question container, and options container
const quizContainer = document.querySelector('.quiz');
const questionContainer = quizContainer.querySelector('.qna h1');
const optionsContainer = quizContainer.querySelector('.qna .ansOpts');

// Set initial values for currentQuestionIndex and score
let currentQuestionIndex = 0;
let score = 0;

// Define buttons array 
const buttons = optionsContainer.querySelectorAll('button');

// Function to display current question
function displayQuestion() {
    questionContainer.textContent = quizData[currentQuestionIndex].question;
}

// Shuffle array using Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to display options for current question
function displayOptions() {
    // Shuffle options array using shuffle() function
    const options = shuffle(quizData[currentQuestionIndex].options);
    // Loop through option buttons and set text content and event listeners
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = options[i];
        buttons[i].classList.remove('dim');
        buttons[i].addEventListener('mouseenter', () => {
        buttons[i].classList.add('dim');
    });
    buttons[i].addEventListener('mouseleave', () => {
        buttons[i].classList.remove('dim');
    });
    }
}

// Function to display final score at end of quiz
function displayFinalScore() {
    quizContainer.innerHTML = `<h2>You finished the quiz!</h2>
    <p>Your final score is ${score} out of ${quizData.length}.</p>`;
}

// Call displayQuestion() and displayOptions() functions to show first question and options
displayQuestion();
displayOptions();

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if selected answer is correct
        if (button.textContent === quizData[currentQuestionIndex].answer) {
            // Increase score
            score++;
        }
        // Move on to next question
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            displayQuestion();
            displayOptions();
        } else {
            displayFinalScore();
        }
    });
});