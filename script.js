<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MindShift AI</title>
    <script defer src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app-container">
        <h1>MindShift AI</h1>

        <!-- Daily Affirmation -->
        <section id="affirmation-container">
            <h2>Daily Affirmation</h2>
            <p id="daily-affirmation">You are capable of achieving great things today!</p>
            <button id="refresh-affirmation">Refresh Affirmation</button>
        </section>

        <!-- Mood Tracker -->
        <section id="mood-tracker">
            <h2>Track Your Mood</h2>
            <p>How are you feeling today?</p>
            <select id="mood-selector">
                <option value="happy">Happy 😊</option>
                <option value="sad">Sad 😔</option>
                <option value="stressed">Stressed 😟</option>
                <option value="anxious">Anxious 😬</option>
                <option value="calm">Calm 😌</option>
            </select>
            <button id="log-mood">Log Mood</button>
            <div id="mood-history">
                <h3>Mood History</h3>
                <ul id="mood-list"></ul>
            </div>
        </section>

        <!-- Negative to Positive Converter -->
        <section id="thoughts-container">
            <h2>Transform Negative Thoughts</h2>
            <textarea id="thought-input" placeholder="Enter your negative thought..." rows="3"></textarea>
            <br>
            <button id="submit-thought">Transform Thought</button>
            <p id="result"></p>
        </section>

        <!-- Positive-Negative Game -->
        <section id="game-container">
            <h2>Positive-Negative Game</h2>
            <div id="timer-bar"></div>
            <p id="word-display"></p>
            <button id="positive-btn">Positive</button>
            <button id="negative-btn">Negative</button>
            <p id="score">Score: 0</p>
            <p id="high-score">High Score: 0</p>
            <button id="start-game">Start Game</button>
        </section>
    </div>
</body>
</html>
