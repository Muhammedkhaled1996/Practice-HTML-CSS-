import {
  currentQuiz,
  questions,
  questionsContainer,
  quizOptions,
} from "./index.js";

const correctSound = new Audio("../audio/صحيح.wav");
const wrongSound = new Audio("../audio/خطاء.wav");
const Sound = new Audio("../audio/ثواني.wav");
const finishSound = new Audio("../audio/تم الانتهاء.wav");


export default class Question {
  constructor(index) {
    this.index = index;
    this.type = questions[index].type;
    this.difficulty = questions[index].difficulty;
    this.category = questions[index].category;
    this.question = questions[index].question;
    this.correctAnswer = questions[index].correct_answer;
    this.incorrectAnswers = questions[index].incorrect_answers;
    this.answerd = false;
    this.answers = [...this.incorrectAnswers, this.correctAnswer].sort();
    this.timerInterval = null;
  }
  displayQuestion() {
    quizOptions.style.display = "none";
    questionsContainer.style.display = "block";
    const progressPercent = Math.round(
      ((this.index + 1) / questions.length) * 100
    );

    questionsContainer.innerHTML = `<div class="game-card question-card"> 
    <div class="xp-bar-container"> 
      <div class="xp-bar-header"> 
        <span class="xp-label"><i class="fa-solid fa-bolt"></i> Progress</span> 
        <span class="xp-value">Question ${this.index + 1}</span> 
      </div> 
      <div class="xp-bar"> 
        <div class="xp-bar-fill" style="width: ${progressPercent}%; transition: width 0.5s;"></div> 
        <!-- 🔹 تحديث العرض ديناميك حسب السؤال الحالي --> 
      </div> 
    </div> 

    <div class="stats-row "style="width: max-width: 60px;"> 
      <div class="stat-badge category"> 
        <i class="fa-solid fa-bookmark"></i> 
        <span>${this.category}</span> 
      </div> 
      <div class="stat-badge difficulty easy"> 
        <i class="fa-solid fa-face-smile"></i> 
        <span>${this.difficulty}</span> 
      </div> 
      <div class="stat-badge timer"> 
        <i class="fa-solid fa-stopwatch"></i> 
        <span class="timer-value">15</span>s 
      </div> 
      <div class="stat-badge counter"> 
        <i class="fa-solid fa-gamepad"></i> 
        <span>${questions.length}</span> 
      </div> 
    </div> 

    <h2 class="question-text">${this.question}</h2> 
    <div class="answers-grid"> 
      ${this.answers
        .map(
          (
            answer,
            index
          ) => `<button class="answer-btn" data-answer="${answer}"> 
            <span class="answer-key">${index + 1}</span> 
            <span class="answer-text">${answer}</span> 
          </button>`
        )
        .join("")} 
    </div> 
    <p class="keyboard-hint"> 
      <i class="fa-regular fa-keyboard"></i> Press 1-4 to select 
    </p> 
    <div class="score-panel"> 
      <div class="score-item"> 
        <div class="score-item-label">Score</div> 
        <div class="score-item-value">${currentQuiz.score}</div> 
      </div> 
    </div> 
  </div>`;

    questionsContainer
      .querySelectorAll(".answers-grid .answer-btn")
      .forEach((Btn) => {
        Btn.addEventListener("click", (e) => {
          this.checkAnswer(e);
        });
      });

    this.startTimer();
  }

  checkAnswer(e) {
    if (!this.answerd) {
      this.answerd = true;

      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        Sound.pause();
        Sound.currentTime = 0;
      }
      const selectedAnswer = e.currentTarget.dataset.answer;
      if (selectedAnswer === this.correctAnswer) {
        e.target?.classList.add(
          "correct",
          "animate__animated",
          "animate__flipInY"
        );
        correctSound.currentTime = 0;
        correctSound.play();
        currentQuiz.score++;
      } else if (selectedAnswer) {
        e.target.classList.add("wrong", "animate__animated", "animate__shakeX");
        wrongSound.currentTime = 0;
        wrongSound.play();
        const correctBtn = questionsContainer.querySelector(
          `.answer-btn[data-answer="${this.correctAnswer}"]`
        );
        if (correctBtn) correctBtn.classList.add("correct");
      }

      setTimeout(() => {
        this.nextQuestion();
      }, 1000);
    }
  }

  nextQuestion() {
    this.index++;
    if (this.index < questions.length) {
      const nextQuestion = new Question(this.index);
      nextQuestion.displayQuestion();
    } else {
      finishSound.currentTime = 0;
      finishSound.play();
      currentQuiz.displayFinalScreen();
      console.log("end");
    }
  }
  startTimer() {
    let timeLeft = 15;
    const timerEl = questionsContainer.querySelector(".timer-value");

    this.timerInterval = setInterval(() => {
      timeLeft--;
      if (timerEl) timerEl.textContent = timeLeft;

      if (timeLeft <= 5 && timeLeft >= 0) {
        if (Sound.paused) {
          Sound.currentTime = 0;
          Sound.play();
        }
      }
      if (timeLeft <= 0) {
        clearInterval(this.timerInterval);

        this.checkAnswer({
          currentTarget: { dataset: { answer: "" } },
          target: null,
        });
      }
    }, 1000);
  }
}










// export default class Question {
//   constructor(index) {
//     this.index = index;
//     this.type = questions[index].type;
//     this.difficulty = questions[index].difficulty;
//     this.category = questions[index].category;
//     this.question = questions[index].question;
//     this.correctAnswer = questions[index].correct_answer;
//     this.incorrectAnswers = questions[index].incorrect_answers;
//     this.answerd = false;
//     this.answers = [...this.incorrectAnswers, this.correctAnswer].sort();
//   }
//   displayQuestion() {
//     quizOptions.style.display = "none";
//     questionsContainer.style.display = "block";
//     questionsContainer.innerHTML = `
//  <div class="game-card question-card">
      
//       <div class="xp-bar-container">
//         <div class="xp-bar-header">
//           <span class="xp-label"><i class="fa-solid fa-bolt"></i> Progress</span>
//           <span class="xp-value">Question ${this.index + 1}</span>
//         </div>
//         <div class="xp-bar">
//           <div class="xp-bar-fill" style="width: 10%"></div>
//         </div>
//       </div>

//        <div class="stats-row "style="width: max-width: 60px;">
//         <div class="stat-badge category">
//           <i class="fa-solid fa-bookmark"></i>
//           <span>${this.category}</span>
//         </div>
//         <div class="stat-badge difficulty easy">
//           <i class="fa-solid fa-face-smile"></i>
//           <span>${this.difficulty}</span>
//         </div>
//         <div class="stat-badge timer">
//           <i class="fa-solid fa-stopwatch"></i>
//           <span class="timer-value">15</span>s
//         </div>
//         <div class="stat-badge counter">
//           <i class="fa-solid fa-gamepad"></i>
//           <span>${questions.length}</span>
//         </div>
//       </div>

//       <h2 class="question-text">What is the capital of France?</h2>

//       <div class="answers-grid">
//        ${this.answers
//          .map(
//            (
//              answer,
//              index
//            ) => `<button class="answer-btn" data-answer="${answer}">
//        <span class="answer-key">${index + 1}</span>
//           <span class="answer-text">${answer}</span>
//          </button>`
//          )
//          .join("")}
//       </div>

//       <p class="keyboard-hint">
//         <i class="fa-regular fa-keyboard"></i> Press 1-4 to select
//       </p>

//       <div class="score-panel">
//         <div class="score-item">
//           <div class="score-item-label">Score</div>
//           <div class="score-item-value">${currentQuiz.score}</div>
//         </div>
//       </div>
//     </div>
// `;

//     questionsContainer
//       .querySelectorAll(".answers-grid .answer-btn")
//       .forEach((Btn) => {
//         Btn.addEventListener("click", (e) => {
//           this.checkAnswer(e);
//         });
//       });
//       this.startTimer();
//   }
//   checkAnswer(e) {
//     const selectedAnswer = e.currentTarget.dataset.answer;
//     if (!this.answerd) {
//       if (selectedAnswer === this.correctAnswer) {
//         e.target.classList.add(
//           "correct",
//           "animate__animated",
//           "animate__flipInY"
//         );
//         correctSound.currentTime = 0;
//         correctSound.play();
//         currentQuiz.score++;
//       } else {
//         e.target.classList.add("wrong", "animate__animated", "animate__shakeX");
//         wrongSound.currentTime = 0;
//         wrongSound.play();
//       }
//       this.answerd = true;
//     }
//     setTimeout(()=>{
//     this.nextQuestion();
//   },1000);
//   }
//   nextQuestion() {
//     this.index++;
//     if (this.index< questions.length) {
//       const nextQuestion = new Question(this.index);
//       nextQuestion.displayQuestion();
//     }else{
//       finishSound.currentTime=0;
//       finishSound.play();
//     currentQuiz.displayFinalScreen()
//       console.log('end');
      
//     }
//   }
// }







/**
 * ============================================
 * QUESTION CLASS
 * ============================================
 *
 * This class handles displaying and interacting with a single question.
 *
 * PROPERTIES TO CREATE:
 * - quiz (Quiz) - Reference to the Quiz instance
 * - container (HTMLElement) - DOM element to render into
 * - onQuizEnd (Function) - Callback when quiz ends
 * - questionData (object) - Current question from quiz.getCurrentQuestion()
 * - index (number) - Current question index
 * - question (string) - The decoded question text
 * - correctAnswer (string) - The decoded correct answer
 * - category (string) - The decoded category name
 * - wrongAnswers (array) - Decoded incorrect answers
 * - allAnswers (array) - Shuffled array of all answers
 * - answered (boolean) - Has user answered? Starts false
 * - timerInterval (number) - The setInterval ID
 * - timeRemaining (number) - Seconds left, starts at 30 seconds
 *
 * METHODS TO IMPLEMENT:
 * - constructor(quiz, container, onQuizEnd)
 * - decodeHtml(html) - Decode HTML entities like &amp;
 * - shuffleAnswers() - Shuffle answers randomly
 * - getProgress() - Calculate progress percentage
 * - displayQuestion() - Render the question HTML
 * - addEventListeners() - Add click handlers to answers
 * - removeEventListeners() - Cleanup handlers
 * - startTimer() - Start countdown
 * - stopTimer() - Stop countdown
 * - hqandleTimeUp() - When timer reaches 0
 * - checkAnswer(choiceElement) - Check if answer is correct
 * - highlightCorrectAnswer() - Show correct answer
 * - getNextQuestion() - Load next or show results
 * - animateQuestion(duration) - Transition to next
 *
 * HTML ENTITIES:
 * The API returns text with HTML entities like:
 * - &amp; should become &
 * - &quot; should become "
 * - &#039; should become '
 *
 * Use this trick to decode:
 * const doc = new DOMParser().parseFromString(html, 'text/html');
 * return doc.documentElement.textContent;
 *
 * SHUFFLE ALGORITHM (Fisher-Yates):
 * for (let i = array.length - 1; i > 0; i--) {
 *   const j = Math.floor(Math.random() * (i + 1));
 *   [array[i], array[j]] = [array[j], array[i]];
 * }
 */

// TODO: Create constructor(quiz, container, onQuizEnd)
// 1. Store the three parameters
// 2. Get question data: this.questionData = quiz.getCurrentQuestion()
// 3. Store index: this.index = quiz.currentQuestionIndex
// 4. Decode and store: question, correctAnswer, category
// 5. Decode wrong answers (use .map())
// 6. Shuffle all answers
// 7. Initialize: answered = false, timerInterval = null, timeRemaining

// TODO: Create decodeHtml(html) method
// Use DOMParser to decode HTML entities

// TODO: Create shuffleAnswers() method
// 1. Combine wrongAnswers and correctAnswer into one array
// 2. Shuffle using Fisher-Yates algorithm
// 3. Return shuffled array

// TODO: Create getProgress() method
// Calculate: ((index + 1) / quiz.numberOfQuestions) * 100
// Round to whole number

// TODO: Create displayQuestion() method
// 1. Create HTML string for the question card
//    (See index.html for the structure to use)
// 2. Use template literals with ${} for dynamic data
// 3. Set this.container.innerHTML = yourHTML
// 4. Call this.addEventListeners()
// 5. Call this.startTimer()

// TODO: Create addEventListeners() method
// 1. Get all answer buttons: document.querySelectorAll('.answer-btn')
// 2. Add click event to each: call this.checkAnswer(button)
// 3. Add keyboard support: listen for keys 1-4
//    Valid keys are: ['1', '2', '3', '4']

// TODO: Create removeEventListeners() method
// Remove any keyboard listeners you added

// TODO: Create startTimer() method
// 1. Get timer display element
// 2. Use setInterval to run every 1000ms (1 second)
// 3. Decrement timeRemaining
// 4. Update the display
// 5. If timeRemaining <= 10 seconds, add 'warning' class
// 6. If timeRemaining <= 0, call stopTimer() and handleTimeUp()

// TODO: Create stopTimer() method
// Use clearInterval(this.timerInterval)

// TODO: Create handleTimeUp() method
// 1. Set answered = true
// 2. Call removeEventListeners()
// 3. Show correct answer (add 'correct' class)
// 4. Show "TIME'S UP!" message
// 5. Call animateQuestion() after a delay

// TODO: Create checkAnswer(choiceElement) method
// 1. If already answered, return early
// 2. Set answered = true
// 3. Stop the timer
// 4. Get selected answer from data-answer attribute
// 5. Compare with correctAnswer (case insensitive)
// 6. If correct: add 'correct' class, call quiz.incrementScore()
// 7. If wrong: add 'wrong' class, call highlightCorrectAnswer()
// 8. Disable other buttons (add 'disabled' class)
// 9. Call animateQuestion()

// TODO: Create highlightCorrectAnswer() method
// Find the button with correct answer and add 'correct-reveal' class

// TODO: Create getNextQuestion() method
// 1. Call quiz.nextQuestion()
// 2. If returns true: create new Question and display it
// 3. If returns false: show results using quiz.endQuiz()
//    Also add click listener to Play Again button

// TODO: Create animateQuestion(duration) method
// 1. Wait for 1500ms (transition delay)
// 2. Add 'exit' class to question card
// 3. Wait for duration
// 4. Call getNextQuestion()
