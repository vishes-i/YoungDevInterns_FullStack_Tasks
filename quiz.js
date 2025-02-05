
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 60;
let countdown;
let Backbtn=document.getElementById("back-button");


const quizArray = [
    {
        id: "0",
        question: " What does the term Full Stack Development refer to?"
,
        options: ["Development that involves stack data structures","Development that involves front-end and back-end programming","Development that involves only backend programming","None of the above"],
        correct: "Development that involves front-end and back-end programming",
    },
    {
        id: "1",
        question: " Which of the following is not a front-end technology?",
        options: ["HTML","CSS","JavaScript","SQL"],
        correct:"SQL" ,
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }, {
        id: "6",
        question: "How can you catch a computer virus?",
        options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
        correct: "Opening e-mail attachments",
    },
    {
        id: "7",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "Search Engine",
    },
    {
        id: "8",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "STP",
    },
    {
        id: "9",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "www.com.yahoo",
    },

    {
        id: "10",
        question:"The purpose of the Front-end framework in Full stack development is ____." ,
        options: ["To provide the client-side interface","To manage database","To reduce the server load","To send http requests",],
        correct: "To provide the client-side interface",
    },
    {
        id: "11",
        question:"Amongst which of the following programming language is used as a server-side language?" ,
        options: ["Python","C++","JavaScript","Both A and C"],
        correct: "Both A and C",
    },
    {
        id: "12",
        question:"What is a Front-end framework?",
        options: ["A development platform for developing user-interface for software applications","A database to store and manage the data of an application","A development platform for writing server-side logic","None of the above"],
        correct: "A development platform for developing user-interface for software applications",
    }, 
    {
        id: "13",
        question:"Database in Full stack development is used to ____",
        options: ["Styling HTML pages","Storing and retrieving data","Handling errors on server-side","Rendering web pages"],
        correct: "Storing and retrieving data",
    }, 
    {
        id: "14",
        question:"What is Git?",
        options: ["Framework","Version control system","Database","Package manager"],
        correct: "Version control system",
    }, 
    {
        id: "15",
        question:"CRUD stands for ____.",
        options: ["Create, Read, Upload, Delete","Create, Read, Upgrade, Deploy","Create, Remove, Upgrade, Delete","Create, Read, Update, Delete"],
        correct: "Create, Read, Update, Delete",
    },
    {
        id: "16",
        question:"The term deployment refers to",
        options: ["Running the project on a server to make it accessible to all","Bundling all the project files into a single file","Removing unnecessary files","Updating existing project"],
        correct: "Running the project on a server to make it accessible to all",
    },
    {
        id: "17",
        question:" A web server in Full Stack Development is ____.",
        options: ["Rendering the user interface","Handling client-side interactions","Executing server-side code and processing requests","Writing server-side logics"],
        correct: "Executing server-side code and processing requests",
    },
    {
        id: "18",
        question:"Is JavaScript synchronous or asynchronous?",
        options: ["Synchronous","Asynchronous","Both","Synchronous but can be used as asynchronous",],
        correct: "Synchronous but can be used as asynchronous",
    },
    {
        id: "19",
        question:" SPA stands for ____. ",
        options: ["Standard Page Application","Single Page Application","Smart Protocol Authentication","Scalable Performance Architecture"],
        correct: "Single Page Application",
    },
    {
        id: "20",
        question:"Amongst which of the following is a back-end framework in Python?",
        options: ["Django","Flask","Both A and B","None of the above"],
        correct: "Both A and B",
    },
    {
        id: "21",
        question:"Amongst which of the following type of database is used in Full stack development?",
        options: ["Relational","JSON","XML","GraphQL"],
        correct: "Relational",
    },
    {
        id: "22",
        question:"Amongst which of the following protocol is used to exchange the data between client and server?",
        options: ["HTTP","TCP","SMTP","FTP"],
        correct: "HTTP",
    },
    {
        id: "23",
        question:"What is the purpose of CSS in Full stack development?",
        options: ["To style and format HTML elements","To manage http request and response","To store and retrieve data","None of the above"],
        correct: "To style and format HTML elements",
    },
    {
        id: "24",
        question:"Which of the following statement is TRUE about AJAX?",
        options: ["AJAX enables asynchronous data retrieval without reloading the entire page","AJAX improves the design layout","AJAX helps in creating dynamic websites","AJAX is a popular query language for Full stack development"],
        correct: "AJAX enables asynchronous data retrieval without reloading the entire page",
    },
    {
        id: "25",
        question:" The role of view in model-view-controller architecture is ____.",
        options: ["Displaying data to the user","Optimize database queries","Handle client's request","Manage server-side routing"],
        correct: "Displaying data to the user",
    },
    {
        id: "26",
        question:"Amongst which of the following is TRUE about model-view-architecture?",
        options: ["The View accesses the data from the Model using AJAX calls","Model and View are independent and do not communicate directly","Model and View communicate via Controller","Model and View communicate directly"],
        correct: "Model and View are independent and do not communicate directly",
    },
    {
        id: "27",
        question:"Amongst which of the following is not a NoSQL database used in Full Stack Development?",
        options: ["MongoDB","PostgreSQL","CouchDB","Hadoop"],
        correct: "Hadoop",
    },
    {
        id: "28",
        question:" In HTML, the iframe tag is used to ____.",
        options: ["Embed another HTML document or a web page within the current document","Insert a video in the HTML document","Create a frame in an HTML document","None of the above"],
        correct: "Embed another HTML document or a web page within the current document",
    },
    {
        id: "29",
        question:"Which HTML tag is used to create vector graphics and illustrations?",
        options: ["canvas tag","svg tag","video tag","details tag"],
        correct: "svg tag",
    },
    {
        id: "30",
        question:"Which of the following statement is FALSE about class attributes in HTML elements?",
        options: ["The class attribute is used to assign one or more class names to an HTML element","Class attribute allows applying CSS and JavaScript to HTML elements based on the class name","The class attribute is used to assign an ID to the HTML element","The class attribute is one of the most used attributes in HTML elements"],
        correct: "The class attribute is used to assign an ID to the HTML element",
    },
    {
        id: "31",
        question:" In an HTML document, which tag is used to add JavaScript code?",
        options: ["javascript tag","js tag","script tag","java tag"],
        correct: "script tag",
    },
    {
        id: "32",
        question:"Which of the following is an array method in JavaScript?",
        options: ["map","every","reduce","all of the above"],
        correct: "all of the above",
    },
    {
        id: "33",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "34",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },

];




//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 60;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
Backbtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount -= 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 60;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer

const timerDisplay = ( ) => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
