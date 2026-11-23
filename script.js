
const terminal = document.getElementById("terminalText");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const messages = [
    "INITIALIZING SYSTEM...",
    "CONNECTING TO SECURE SERVER...",
    "IDENTIFYING TARGET...",
    "TARGET DETECTED: GAY BOY",
    "SCANNING PERSONALITY...",
    "EGO LEVEL: DANGEROUSLY HIGH",
    "INTELLIGENCE: ACCEPTABLE",
    "COMMON SENSE: 404 NOT FOUND",
    "LOADING BIRTHDAY PROTOCOL...",
    "MISSION READY."
];

let messageIndex = 0;

function typeMessage() {

    if (messageIndex >= messages.length) {

        progressText.textContent =
            "SYSTEM READY. ACCESS GRANTED.";

        document.getElementById("startButton")
            .style.display = "inline-block";

        return;
    }

    const currentMessage = messages[messageIndex];

    const paragraph = document.createElement("p");

    terminal.appendChild(paragraph);

    if (
        currentMessage.includes("404") ||
        currentMessage.includes("DANGEROUSLY")
    ) {
        paragraph.classList.add("warning");

        const terminalBox =
            document.querySelector(".terminal");

        terminalBox.classList.add("glitch");

        setTimeout(() => {
            terminalBox.classList.remove("glitch");
        }, 300);
    }

    let characterIndex = 0;

    function typeCharacter() {

        if (characterIndex < currentMessage.length) {

            paragraph.textContent +=
                currentMessage[characterIndex];

            characterIndex++;

            setTimeout(typeCharacter, 35);

        } else {

            messageIndex++;

            const progress =
                (messageIndex / messages.length) * 100;

            progressBar.style.width = progress + "%";

            progressText.textContent =
                "SYSTEM BOOTING... " +
                Math.round(progress) + "%";

            setTimeout(typeMessage, 400);
        }
    }

    typeCharacter();
}

typeMessage();

// Open the mission briefing

const startButton =
    document.getElementById("startButton");

const landingScreen =
    document.querySelector("main");

const missionScreen =
    document.getElementById("missionScreen");


startButton.addEventListener("click", function() {

    // Hide the first screen
    landingScreen.classList.add("hidden");

    // Show the mission screen
    missionScreen.classList.remove("hidden");

    // Start typing the mission message
    typeMission();

});


// Mission briefing messages

const missionMessages = [
    "AUTHENTICATION SUCCESSFUL.",
    "WELCOME, BISON.",
    "",
    "YOUR MISSION:",
    "Prove u r a Human not a Computer",
    "(we know u r a computer)",
    "",
    "3 CHALLENGES.",
    "FAILURE IS EMBARRASSING.",
    "It's good that u haven't had any bad experience.",
    "don't let this be ur first one.",
    "GOOD LUCK, IDIOT."
];


// Typewriter animation

function typeMission() {

    const missionText =
        document.getElementById("missionText");

    let lineIndex = 0;

    function typeLine() {

        
if (lineIndex >= missionMessages.length) {

    // Wait before unlocking the button
    setTimeout(function() {

        const button =
            document.getElementById("beginButton");

        button.classList.add("unlocked");

    }, 1000);

    return;
}


        const currentLine = missionMessages[lineIndex];

        const paragraph = document.createElement("p");

        missionText.appendChild(paragraph);

        // Preserve empty lines as spacing
        if (currentLine === "") {

            paragraph.innerHTML = "&nbsp;";

            lineIndex++;

            setTimeout(typeLine, 300);

            return;
        }

        let characterIndex = 0;

        function typeCharacter() {

            if (characterIndex < currentLine.length) {

                paragraph.textContent +=
                    currentLine[characterIndex];

                characterIndex++;

                setTimeout(typeCharacter, 40);

            } else {

                lineIndex++;

                setTimeout(typeLine, 450);

            }
        }

        typeCharacter();
    }

    typeLine();
}



// Begin the first challenge

const beginButton =
    document.getElementById("beginButton");


// ===================================
// OPERATION BIRTHDAY - GAME ENGINE
// ===================================

const gameScreen = document.getElementById("gameScreen");

const gameStatus = document.getElementById("gameStatus");
const gameTitle = document.getElementById("gameTitle");
const gameQuestion = document.getElementById("gameQuestion");
const gameAnswers = document.getElementById("gameAnswers");
const gameFeedback = document.getElementById("gameFeedback");
const attemptDisplay = document.getElementById("attemptDisplay");

const sideQuestArea = document.getElementById("sideQuestArea");
const sideQuestTitle = document.getElementById("sideQuestTitle");
const sideQuestDescription = document.getElementById("sideQuestDescription");
const sideQuestCount = document.getElementById("sideQuestCount");
const sideQuestButton = document.getElementById("sideQuestButton");

const continueButton = document.getElementById("continueButton");


// OUR THREE CHALLENGES

const challenges = [

   
{
    title: "PHOTO REVEAL.exe",
    question: "IDENTIFY THE TARGET. WHO IS THIS PERSON?",

    photos: [
        {
            src: "images/leader.jpg",
            options: ["OKITHA", "SAHATH", "NUSKHAN", "VITHUSAN"],
            answer: 0
        },
        {
            src: "images/photo2.jpg",
            options: ["KASUNI", "HESANDI", "TIMASHI", "NOYELLE"],
            answer: 1
        },
        {
            src: "images/photo3.jpg",
            options: ["TIMASHI", "OKITHA", "NUSKHAN", "HESANDI"],
            answer: 2
        },
        {
            src: "images/photo4.jpg",
            options: ["HESANDI", "SETHULI", "NOYELLE", "KASUNI"],
            answer: 3
        }
    ],

    roasts: [
        "BRO. YOU DON'T EVEN RECOGNIZE YOUR OWN GROUP MEMBERS?",
        "WE NEED A NEW LEADER GNG.",
        "OH MAN, WHY ARE U LIKE THIS?"
    ],

    success: "TARGET IDENTIFIED."
},


    
{
    title: "THE GOATED DATABASE.exe",

    questions: [
        {
            question: "01. YOUR GREATEST TALENT?",
            options: [
                "BEING ANNOYING",
                "BULLYING",
                "TAKING DYNAMIC DECISIONS",
                "ALL OF THE ABOVE"
            ],
            answer: 3,
            roasts: [
                "YOU REALLY DON'T KNOW YOURSELF?",
                "BRO, THIS IS LITERALLY YOUR PERSONALITY.",
                "EVEN YOUR OWN DATABASE IS DISAPPOINTED."
            ],
            success: "UNFORTUNATELY, SELF-AWARENESS DETECTED."
        },

        {
            question: "02. GREATEST THING YOU EVER DID?",
            options: [
                "WAIT FOR 20 SECONDS BEFORE GIVING ORALS",
                "BEING A GENTLEMAN",
                "RESPECT OTHERS",
                "ABSOLUTELY NOTHING"
            ],
            answer: 3,
            roasts: [
                "HAHA. NICE TRY.",
                "GENTLEMAN? THAT'S A BOLD CLAIM.",
                "STOP GIVING YOURSELF TOO MUCH CREDIT."
            ],
            success: "CORRECT. FINALLY, SOME HONESTY."
        },

        {
            question: "03. WORST MEMORY?",
            options: [
                "DRUNK DIARIES",
                "SELLING ANYA",
                "HAVING NOTHING TO DO",
                "NONE"
            ],
            answer: 0,
            roasts: [
                "YOU'RE TRYING TO ERASE HISTORY?",
                "SOME MEMORIES JUST WON'T DISAPPEAR.",
                "THE DATABASE REMEMBERS EVERYTHING."
            ],
            success: "THAT MEMORY IS PERMANENTLY ARCHIVED."
        }
    ]
},


    
{
    title: "RIDDLE.exe",
    type: "riddle",

    question: "I have keys but no locks. I have space but no room. What am I?",

    answer: "keyboard",

    roasts: [
        "BRO. YOU USE THIS EVERY DAY.",
        "THINK AGAIN. YOUR BRAIN IS BUFFERING.",
        "THE FINAL CHALLENGE AND YOU'RE STRUGGLING?"
    ],

    success: "✓ CORRECT. FINAL SECURITY LAYER BYPASSED."
}


];


// GAME VARIABLES

let currentChallenge = 0;
let attempts = 3;
let currentPhoto = 0;
let currentQuestion = 0;
let sideQuestClicks = 0;


// OPEN FIRST CHALLENGE

beginButton.addEventListener("click", function() {

    missionScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    currentChallenge = 0;

    showChallenge();

});


// DISPLAY CHALLENGE




function showChallenge() {
    const challenge = challenges[currentChallenge];
    document.querySelector(".terminal").classList.remove("final-report");
    // Restore elements for the next challenge
attemptDisplay.classList.remove("hidden");
gameAnswers.classList.remove("hidden");

    attempts = 3;

    gameTitle.textContent = challenge.title;
    gameQuestion.textContent = challenge.question || "";

    continueButton.classList.add("hidden");
    gameFeedback.textContent = "";

    // If this is the BISON quiz
    if (challenge.questions) {
    currentQuestion = 0;
    photoArea.classList.add("hidden");
    displayQuestion();
    return;
}

if (challenge.type === "riddle") {
    displayRiddle();
    return;
}

    // Otherwise, it's the photo challenge
    currentPhoto = 0;
    displayPhoto();
}


function displayPhoto() {
    const challenge = challenges[currentChallenge];
    const photo = challenge.photos[currentPhoto];

    attempts = 3;

    // Update question and photo
    gameQuestion.textContent =
        `IDENTIFY THE TARGET. WHO IS THIS PERSON? (${currentPhoto + 1}/4)`;

    photoArea.classList.remove("hidden");

    targetPhoto.src = photo.src;
    targetPhoto.classList.remove("revealed");
    targetPhoto.style.filter = "blur(18px)";

    document.querySelector(".photoCaption").textContent =
        "◈ TARGET IMAGE ENCRYPTED";

    // Reset attempts
    attemptDisplay.textContent = `ATTEMPTS REMAINING: ${attempts}`;

    // Hide old feedback and continue button
    gameFeedback.textContent = "";
    continueButton.classList.add("hidden");

    // Display answers for this photo
    gameAnswers.innerHTML = "";

    photo.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        gameAnswers.appendChild(button);
    });
}


function displayQuestion() {
    const challenge = challenges[currentChallenge];
    const question = challenge.questions[currentQuestion];

    attempts = 3;

    gameQuestion.textContent =
        question.question + ` (${currentQuestion + 1}/3)`;

    gameAnswers.innerHTML = "";
    gameFeedback.textContent = "";

    attemptDisplay.textContent =
        `ATTEMPTS REMAINING: ${attempts}`;

    continueButton.classList.add("hidden");

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {
            checkAnswer(index);
        });

        gameAnswers.appendChild(button);
    });
}


function displayRiddle() {

    const challenge = challenges[currentChallenge];

    attempts = 3;

    gameQuestion.textContent = challenge.question;

    gameAnswers.innerHTML = "";

    gameFeedback.textContent = "";

    attemptDisplay.textContent =
        `ATTEMPTS REMAINING: ${attempts}`;

    photoArea.classList.add("hidden");

    continueButton.classList.add("hidden");

    const answerInput = document.createElement("input");

    answerInput.type = "text";
    answerInput.id = "riddleInput";
    answerInput.placeholder = "TYPE YOUR ANSWER...";
    answerInput.autocomplete = "off";

    const submitButton = document.createElement("button");

    submitButton.textContent = "SUBMIT ANSWER →";

    submitButton.addEventListener("click", () => {
        checkAnswer(answerInput.value);
    });

    answerInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            checkAnswer(answerInput.value);
        }

    });

    gameAnswers.appendChild(answerInput);
    gameAnswers.appendChild(submitButton);

}




// CHECK ANSWERS



function checkAnswer(selectedAnswer) {
        const challenge = challenges[currentChallenge];

    // HANDLE BISON QUIZ
    if (challenge.questions) {

        const question = challenge.questions[currentQuestion];

        if (selectedAnswer === question.answer) {

            gameFeedback.textContent = "✓ " + question.success;
            gameFeedback.style.color = "#55ff91";

            gameAnswers.innerHTML = "";

            if (currentQuestion < challenge.questions.length - 1) {

                continueButton.textContent = "NEXT QUESTION →";

            } else {

                continueButton.textContent = "VIEW RESULTS →";

            }

            continueButton.classList.remove("hidden");

        } else {

            attempts--;

            const roastIndex = 3 - attempts;

            gameFeedback.textContent =
                question.roasts[Math.min(roastIndex - 1, 2)];

            gameFeedback.style.color = "#ff5555";

            attemptDisplay.textContent =
                `ATTEMPTS REMAINING: ${attempts}`;

            if (attempts === 0) {

                gameAnswers.innerHTML = "";

                gameFeedback.textContent =
                    "✖ EVEN THE BISON DATABASE HAS GIVEN UP.";

                setTimeout(() => {
                    startSideQuest();
                }, 1200);
            }
        }

        return;
    }
    

        // HANDLE TYPED RIDDLE
    if (challenge.type === "riddle") {

        const answer = selectedAnswer.trim().toLowerCase();

        if (answer === challenge.answer) {

            gameFeedback.textContent =
                "✓ FINAL SECURITY LAYER BYPASSED.";

            gameFeedback.style.color = "#55ff91";

            gameAnswers.innerHTML = "";
            attemptDisplay.classList.add("hidden");
            continueButton.classList.add("hidden");

            setTimeout(() => {
                document.getElementById("missionCompleteScreen")
                    .classList.remove("hidden");
            }, 1500);

        } else {

            attempts--;

            gameFeedback.textContent =
                challenge.roasts[3 - attempts - 1];

            gameFeedback.style.color = "#ff5555";

            attemptDisplay.textContent =
                `ATTEMPTS REMAINING: ${attempts}`;

            if (attempts > 0) {
                document.getElementById("riddleInput").value = "";
                document.getElementById("riddleInput").focus();
            } else {
                gameFeedback.textContent =
                    "✖ FINAL SECURITY LAYER REJECTED.";

                gameAnswers.innerHTML = "";
            }
        }

        return;
    }


    const photo = challenge.photos[currentPhoto];

    // CORRECT ANSWER
    if (selectedAnswer === photo.answer) {

        gameFeedback.textContent = "✓ " + challenge.success;
        gameFeedback.style.color = "#55ff91";

        gameAnswers.innerHTML = "";

        // Reveal the photo completely
        targetPhoto.style.filter = "blur(0px)";
        targetPhoto.classList.add("revealed");

        document.querySelector(".photoCaption").textContent =
            "◈ TARGET IDENTIFIED";

        // Check whether there are more photos
        if (currentPhoto < challenge.photos.length - 1) {

    continueButton.textContent = "NEXT PHOTO →";
    continueButton.classList.remove("hidden");

} else {

            // All four photos completed
            gameFeedback.textContent =
                "✓ ALL TARGETS IDENTIFIED. CHALLENGE COMPLETE!";

            continueButton.textContent = "CONTINUE →";
            continueButton.classList.remove("hidden");
        }

    } else {

        // WRONG ANSWER
        attempts--;

        const roastIndex = 3 - attempts - 1;

        gameFeedback.textContent =
            challenge.roasts[Math.min(roastIndex, challenge.roasts.length - 1)];

        gameFeedback.style.color = "#ff5555";

        attemptDisplay.textContent =
            `ATTEMPTS REMAINING: ${attempts}`;

        // Gradually remove the blur
        const blurLevels = {
            2: "12px",
            1: "6px",
            0: "2px"
        };

        targetPhoto.style.filter = `blur(${blurLevels[attempts]})`;

        document.querySelector(".photoCaption").textContent =
            "◈ ENCRYPTION WEAKENING...";

        // No attempts remaining
        if (attempts === 0) {

            gameAnswers.innerHTML = "";

            gameFeedback.textContent =
                "✖ ACCESS DENIED. YOU FAILED TO IDENTIFY THE TARGET.";

            setTimeout(() => {
                startSideQuest();
            }, 1200);
        }
    }
}




// SIDE QUEST

function startSideQuest() {

    gameQuestion.textContent = "";

    gameAnswers.innerHTML = "";

    gameFeedback.textContent = "";

    attemptDisplay.textContent = "";

    sideQuestArea.classList.remove("hidden");

    sideQuestTitle.textContent =
        "SIDE QUEST: THE BUTTON MASHER";

    sideQuestDescription.textContent =
        "Your brain has failed. Prove your fingers still work. Click five times.";

    sideQuestClicks = 0;

    sideQuestCount.textContent = "0 / 5";

    sideQuestButton.disabled = false;

}


// COUNT SIDE QUEST CLICKS

sideQuestButton.onclick = function() {

    sideQuestClicks++;

    sideQuestCount.textContent =
        sideQuestClicks + " / 5";

    if (sideQuestClicks >= 5) {

        sideQuestButton.disabled = true;

        sideQuestTitle.textContent =
            "SIDE QUEST COMPLETED.";

        sideQuestDescription.textContent =
            "Congratulations. You can press buttons. Incredible achievement.";

        continueButton.textContent =
            "RETURN TO MISSION →";

        continueButton.classList.remove("hidden");

    }

};


// CONTINUE TO NEXT CHALLENGE



continueButton.addEventListener("click", () => {

    const action = continueButton.textContent;

    // FINAL RIDDLE COMPLETED
if (action === "UNLOCK FINAL SEQUENCE →") {

    continueButton.classList.add("hidden");

    startFinalSequence();

    return;
}

    continueButton.classList.add("hidden");

    // SIDE QUEST COMPLETED
    if (!sideQuestArea.classList.contains("hidden")) {

        sideQuestArea.classList.add("hidden");

        currentChallenge++;

        if (currentChallenge < challenges.length) {
            showChallenge();
        } else {
            endGame();
        }

        return;
    }

    // NEXT PHOTO
    if (action === "NEXT PHOTO →") {

        currentPhoto++;
        displayPhoto();
        return;
    }

    // NEXT BISON QUESTION
    if (action === "NEXT QUESTION →") {

        currentQuestion++;
        displayQuestion();
        return;
    }

    // DISPLAY FINAL BISON PERSONALITY REPORT
    
    // DISPLAY FINAL BISON PERSONALITY REPORT
    if (action === "VIEW RESULTS →") {

        gameAnswers.innerHTML = "";
        gameQuestion.textContent = "";

        // Hide attempts and empty answer area
        attemptDisplay.classList.add("hidden");
        gameAnswers.classList.add("hidden");
document.querySelector(".terminal").classList.add("final-report");
        gameFeedback.innerHTML = `
            <br>
            <h2>PERSONALITY ANALYSIS COMPLETE</h2>
            <br>
            > SUBJECT: BISON.exe<br>
            > ANNOYANCE LEVEL: 999%<br>
            > EGO: UNREASONABLY HIGH<br>
            > PANDITHAI MODE: PERMANENTLY ON<br>
            > DECISION-MAKING: UNPREDICTABLE<br>
            > SOCIAL BATTERY: INFINITE<br><br>
            <h2>FINAL VERDICT:</h2>
            <h2>AN ABSOLUTE MENACE.</h2>
            Unfortunately, still one of our favourite humans.
        `;

        gameFeedback.style.color = "#55ff91";

        continueButton.textContent = "CONTINUE →";
        continueButton.classList.remove("hidden");

        return;
    }


    // MOVE TO NEXT CHALLENGE
    gameAnswers.innerHTML = "";
    gameQuestion.textContent = "";
    gameFeedback.textContent = "";

    showMissionTransition(() => {

    const enterButton =
        document.getElementById("enterNextChallenge");

    enterButton.textContent =
        `ENTER CHALLENGE ${String(currentChallenge + 2).padStart(2, "0")} →`;

    enterButton.classList.remove("hidden");

});

});




// END OF GAME





function finishGame() {

    gameStatus.textContent = "◈ ALL CHALLENGES COMPLETED";

    gameTitle.textContent = "MISSION ACCOMPLISHED";

    gameQuestion.textContent =
        "Against all odds, you survived.";

    gameAnswers.innerHTML = "";

    gameFeedback.textContent =
        "Your intelligence has been temporarily verified.";

    // Remove the attempt display completely
    
    // Remove the empty answer area
   

    photoArea.classList.add("hidden");

    continueButton.classList.add("hidden");

}





function showMissionTransition(callback) {

    const transitionScreen =
        document.getElementById("transitionScreen");

    const transitionText =
        document.getElementById("transitionText");

    const messages = [
        "> ALL 4 TARGETS IDENTIFIED",
        "> MEMORY DATABASE ACCESSED",
        "> GROUP KNOWLEDGE: ACCEPTABLE",
        "> ANALYZING NEXT MISSION...",
        "> PREPARING CHALLENGE 02..."
    ];

    let messageIndex = 0;
    let charIndex = 0;

    transitionScreen.classList.remove("hidden");
    transitionText.innerHTML = "";

    function typeNextCharacter() {

        if (messageIndex >= messages.length) {
            setTimeout(callback, 1000);
            return;
        }

        const currentMessage = messages[messageIndex];

        if (charIndex < currentMessage.length) {

            transitionText.innerHTML +=
                currentMessage.charAt(charIndex);

            charIndex++;

            setTimeout(typeNextCharacter, 35);

        } else {

            transitionText.innerHTML += "<br>";

            messageIndex++;
            charIndex = 0;

            setTimeout(typeNextCharacter, 400);
        }
    }

    typeNextCharacter();
}
document.getElementById("enterNextChallenge")
    .addEventListener("click", () => {

        const transitionScreen =
            document.getElementById("transitionScreen");

        transitionScreen.classList.add("hidden");

        document.getElementById("enterNextChallenge")
            .classList.add("hidden");

        currentChallenge++;

        if (currentChallenge < challenges.length) {
            showChallenge();
        } else {
            endGame();
        }

    });


function startFinalSequence() {

    gameStatus.textContent = "◈ SYSTEM SHUTDOWN INITIATED";

    gameTitle.textContent = "MISSION ACCOMPLISHED";

    gameQuestion.textContent = "";

    gameAnswers.innerHTML = "";

    gameFeedback.innerHTML = `
        <h2>ALL SECURITY LAYERS BYPASSED.</h2>
        <br>
        > CHALLENGE 01: COMPLETED<br>
        > CHALLENGE 02: COMPLETED<br>
        > CHALLENGE 03: COMPLETED<br>
        > SUBJECT STATUS: HUMAN (QUESTIONABLE)<br>
        > BIRTHDAY PROTOCOL: UNLOCKED<br><br>
        <h1>MISSION ACCOMPLISHED.</h1>
    `;

    gameFeedback.style.color = "#55ff91";

    attemptDisplay.classList.add("hidden");

    gameAnswers.classList.add("hidden");

    photoArea.classList.add("hidden");

    continueButton.textContent = "ACCESS CLASSIFIED GIFT →";

    continueButton.classList.remove("hidden");

}
// CONTINUE FROM MISSION COMPLETED TO LETTER

document.getElementById("continueToLetter")
    .addEventListener("click", () => {

        document.getElementById("missionCompleteScreen")
            .classList.add("hidden");

        document.getElementById("letterScreen")
            .classList.remove("hidden");

    });

    // DOWNLOAD BISON'S PERSONAL LETTER

document.getElementById("letterDownloadButton")
    .addEventListener("click", () => {

        const downloadLink = document.createElement("a");

        downloadLink.href = "bison.pdf";
        downloadLink.download = "A_Message_For_Bison.pdf";

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // UNLOCK THE FINAL SURPRISE BUTTON
        document.getElementById("continueToGift")
            .classList.remove("hidden");

    });

    // OPEN THE FINAL GIFT REVEAL

document.getElementById("continueToGift")
    .addEventListener("click", () => {

        // Hide the classified letter screen
        document.getElementById("letterScreen")
            .classList.add("hidden");

        // Reveal the final gift screen
        document.getElementById("finalGiftScreen")
            .classList.remove("hidden");

    });