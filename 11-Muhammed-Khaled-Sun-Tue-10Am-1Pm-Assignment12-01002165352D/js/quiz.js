export const finallyScore = document.querySelector("#finallyScore");
export default class Quiz {
  constructor(category, difficulty, questionNumber) {
    this.category = category;
    this.difficulty = difficulty;
    this.questionNumber = questionNumber;
    this.score = 0;
  }

  async getQuestion() {
    const req = await fetch(
      `https://opentdb.com/api.php?amount=${this.questionNumber}&category=${this.category}&difficulty=${this.difficulty}`
    );
    const data = await req.json();
    return data.results;
  }

  displayFinalScreen() {
    
    questionsContainer.style.display = "none";
    finallyScore.style.display = "block";
    
    const totalQuestions = this.questions.length;
    const score = this.score;
    const percentage = Math.round((score / totalQuestions) * 100); 
    const playerNameInput = document.querySelector("#playerName"); 
    const playerName =
      playerNameInput && playerNameInput.value.trim()
        ? playerNameInput.value.trim()
        : "Player";
    let highScores = [];
    try {
      const stored = JSON.parse(localStorage.getItem("quizHighScores"));
      highScores = Array.isArray(stored) ? stored : [];
    } catch (e) {
      highScores = [];
    }
    highScores.push({ name: playerName, score: percentage });
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 20);
    localStorage.setItem("quizHighScores", JSON.stringify(highScores));
    finallyScore.innerHTML = `
    <div class="game-card results-card">
      <h2 class="results-title">Quiz Complete!</h2>
      <p class="results-score-display">${score} / ${totalQuestions}</p>
      <p class="results-percentage">${percentage}% Accuracy</p>
      ${
        percentage >= 80
          ? `<div class="new-record-badge"><i class="fa-solid fa-star"></i> New High Score!</div>`
          : ``
      }
      <div class="leaderboard">
        <h4 class="leaderboard-title"><i class="fa-solid fa-trophy"></i> Leaderboard</h4>
        <ul class="leaderboard-list">
          ${highScores
            .map(
              (p, i) => `
            <li class="leaderboard-item ${
              i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : ""
            }">
              <span class="leaderboard-rank">#${i + 1}</span>
              <span class="leaderboard-name">${p.name}</span>
              <span class="leaderboard-score">${p.score}%</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
      <div class="action-buttons">
        <button class="btn-restart" onclick="location.reload()">
          <i class="fa-solid fa-rotate-right"></i> Play Again
        </button>
      </div>
    </div>
  `;
  }
}


/**
 * ============================================
 * QUIZ CLASS
 * ============================================
 *
 * This class manages the entire quiz game state.
 *
 * PROPERTIES TO CREATE:
 * - category (string) - The selected category ID
 * - difficulty (string) - easy, medium, or hard
 * - numberOfQuestions (number) - How many questions
 * - playerName (string) - The player's name
 * - score (number) - Current score, starts at 0
 * - questions (array) - Questions from API, starts empty
 * - currentQuestionIndex (number) - Which question we're on, starts at 0
 *
 * METHODS TO IMPLEMENT:
 * - constructor(category, difficulty, numberOfQuestions, playerName)
 * - async getQuestions() - Fetch questions from API
 * - buildApiUrl() - Create the API URL with parameters
 * - incrementScore() - Add 1 to score
 * - getCurrentQuestion() - Get the current question object
 * - nextQuestion() - Move to next question, return true/false
 * - isComplete() - Check if quiz is finished
 * - getScorePercentage() - Calculate percentage (0-100)
 * - saveHighScore() - Save to localStorage
 * - getHighScores() - Load from localStorage
 * - isHighScore() - Check if current score qualifies
 * - endQuiz() - Generate results screen HTML
 *
 */

// TODO: Create constructor
// Initialize all properties mentioned above

// TODO: Create async getQuestions() method
// 1. Build the API URL using buildApiUrl()
// 2. Use fetch() to get data
// 3. Check if response.ok, throw error if not
// 4. Parse JSON: const data = await response.json()
// 5. Check if data.response_code === 0 (success)
// 6. Store data.results in this.questions
// 7. Return this.questions

// TODO: Create buildApiUrl() method
// Use URLSearchParams to build query string
// Example result: "https://opentdb.com/api.php?amount=10&difficulty=easy"

// TODO: Create incrementScore() method
// Simply add 1 to this.score

// TODO: Create getCurrentQuestion() method
// Return this.questions[this.currentQuestionIndex]
// Return null if index is out of bounds

// TODO: Create nextQuestion() method
// Increment currentQuestionIndex
// Return true if there are more questions
// Return false if quiz is complete

// TODO: Create isComplete() method
// Return true if currentQuestionIndex >= questions.length

// TODO: Create getScorePercentage() method
// Calculate: (score / numberOfQuestions) * 100
// Round to whole number using Math.round()

// TODO: Create saveHighScore() method
// 1. Get existing high scores using getHighScores()
// 2. Create new score object: { name, score, total, percentage, difficulty, date }
// 3. Push to array
// 4. Sort by percentage (highest first)
// 5. Keep only top 10
// 6. Save to localStorage using JSON.stringify()

// TODO: Create getHighScores() method
// 1. Get from localStorage using 'quizHighScores' key
// 2. Parse JSON
// 3. Return array (or empty array if nothing saved)
// Wrap in try/catch for safety

// TODO: Create isHighScore() method
// Return true if:
// - Less than 10 saved, OR
// - Current percentage beats the lowest saved score

// TODO: Create endQuiz() method
// 1. Calculate percentage
// 2. Check if it's a high score
// 3. If yes, save it (BEFORE getting high scores for display)
// 4. Get high scores (AFTER saving)
// 5. Return HTML string for results screen
//    (See index.html for the HTML structure to use)
