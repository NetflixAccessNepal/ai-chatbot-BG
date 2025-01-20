// ------------------------ Negative to Positive Converter ------------------------

async function fetchAntonym(word) {
    try {
        const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
        const data = await response.json();
        return data.length > 0 ? data[0].word : word;
    } catch (error) {
        console.error("Error fetching antonym:", error);
        return word;
    }
}

async function transformNegativeToPositive(inputText) {
    const words = inputText.toLowerCase().split(" ");
    const transformedWords = await Promise.all(
        words.map(async (word) => {
            const antonym = await fetchAntonym(word);
            return antonym;
        })
    );
    return transformedWords.join(" ");
}

document.getElementById("submit-thought").addEventListener("click", async () => {
    const userInput = document.getElementById("thought-input").value.trim();

    if (!userInput) {
        document.getElementById("result").innerText = "Please enter a thought!";
        return;
    }

    document.getElementById("result").innerText = "Transforming your thoughts...";
    const positiveThought = await transformNegativeToPositive(userInput);
    document.getElementById("result").innerText = `Your positive thought: "${positiveThought}"`;
});

// ------------------------ Positive-Negative Game ------------------------

const positiveWords = ["happy", "joyful", "strong", "beautiful", "hopeful"];
const negativeWords = ["sad", "weak", "ugly", "hopeless", "unhappy"];
let score = 0;
let highScore = 0;
let currentWord = "";
let gameStarted = false;
let timer;
let timeRemaining = 30;

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}

function generateRandomWord() {
    const allWords = [...positiveWords, ...negativeWords];
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex];
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer-bar").style.width = `${(timeRemaining / 30) * 100}%`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function startGame() {
    score = 0;
    timeRemaining = 30;
    gameStarted = true;
    updateScore();
    generateNewWord();
    document.getElementById("word-display").classList.remove("game-end");
    startTimer();
}

function generateNewWord() {
    currentWord = generateRandomWord();
    document.getElementById("word-display").innerText = `Word: ${currentWord}`;
}

function handleUserChoice(isPositive) {
    if (!gameStarted) {
        alert("Please start the game first!");
        return;
    }

    const correct =
        (isPositive && positiveWords.includes(currentWord)) ||
        (!isPositive && negativeWords.includes(currentWord));

    if (correct) {
        score++;
        document.getElementById("word-display").classList.add("correct");
        setTimeout(() => document.getElementById("word-display").classList.remove("correct"), 300);
    } else {
        document.getElementById("word-display").classList.add("wrong");
        setTimeout(() => document.getElementById("word-display").classList.remove("wrong"), 300);
    }

    updateScore();
    generateNewWord();
}

function endGame() {
    gameStarted = false;
    highScore = Math.max(highScore, score);
    updateScore();
    document.getElementById("word-display").innerText = "Game Over! Press Start to play again.";
}

// Event Listeners
document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("positive-btn").addEventListener("click", () => handleUserChoice(true));
document.getElementById("negative-btn").addEventListener("click", () => handleUserChoice(false));

// Toggle Thoughts Section
document.getElementById("toggle-thoughts").addEventListener("click", () => {
    const thoughtsContainer = document.getElementById("thoughts-container");
    thoughtsContainer.classList.toggle("active");
});
