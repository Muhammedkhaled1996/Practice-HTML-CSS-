import Question from "./question.js";
import Quiz from "./quiz.js";

export let questions;
export let currentQuiz;

export const quizOptions = document.querySelector("#quizOptions");
export const questionsContainer = document.querySelector("#questionsContainer");

document.querySelector("#startQuiz").addEventListener("click", async () => {
  const categoryMenu = document.querySelector("#categoryMenu").value;
  const difficultyOptions = document.querySelector("#difficultyOptions").value;
  const questionsNumber = document.querySelector("#questionsNumber").value;

  currentQuiz = new Quiz(categoryMenu, difficultyOptions, questionsNumber);

  questions = await currentQuiz.getQuestion();
  currentQuiz.questions = questions;

  const firstQuestion = new Question(0);
  firstQuestion.displayQuestion();
  console.log(currentQuiz);
});

/**
 * ============================================
 * MAIN ENTRY POINT (index.js)
 * ============================================
 *
 * This file is the starting point of your application.
 * It handles:
 * - Getting DOM elements
 * - Form validation
 * - Starting the quiz
 * - Loading/error states
 *
 * DOM ELEMENTS TO GET:
 * - quizOptionsForm: #quizOptions
 * - playerNameInput: #playerName
 * - categoryInput: #categoryMenu
 * - difficultyOptions: #difficultyOptions
 * - questionsNumber: #questionsNumber
 * - startQuizBtn: #startQuiz
 * - questionsContainer: .questions-container
 *
 * FUNCTIONS TO IMPLEMENT:
 * - showLoading() - Display loading spinner
 * - hideLoading() - Remove loading spinner
 * - showError(message) - Display error card
 * - validateForm() - Check if form is valid
 * - showFormError(message) - Show error on form
 * - resetToStart() - Reset to initial state
 * - startQuiz() - Main function to start quiz
 */

// ============================================
// TODO: Get DOM Element References
// ============================================
// Use document.getElementById() and document.querySelector()

// ============================================
// TODO: Create variable to store current quiz
// ============================================
// let currentQuiz = null;

// ============================================
// TODO: Create showLoading() function
// ============================================
// Set questionsContainer.innerHTML to loading HTML
// See index.html for the HTML structure

// ============================================
// TODO: Create hideLoading() function
// ============================================
// Find and remove the loading overlay

// ============================================
// TODO: Create showError(message) function
// ============================================
// Set questionsContainer.innerHTML to error HTML
// Include the message parameter in the display
// Add click listener to retry button that calls resetToStart()

// ============================================
// TODO: Create validateForm() function
// ============================================
// Return object: { isValid: boolean, error: string | null }
// Check:
// 1. questionsNumber has a value
// 2. Value is >= 1 (minimum questions)
// 3. Value is <= 50 (maximum questions)

// ============================================
// TODO: Create showFormError(message) function
// ============================================
// Create error div with class 'form-error'
// Insert before the start button
// Remove after 3 seconds with fade effect

// ============================================
// TODO: Create resetToStart() function
// ============================================
// 1. Clear questionsContainer
// 2. Reset form values
// 3. Show the form (remove 'hidden' class)
// 4. Set currentQuiz = null

// ============================================
// TODO: Create async startQuiz() function
// ============================================
// This is the main function, called when Start button is clicked
//
// Steps:
// 1. Validate the form
// 2. If not valid, show error and return
// 3. Get form values:
//    - playerName (use 'Player' if empty)
//    - category
//    - difficulty
//    - numberOfQuestions
// 4. Create new Quiz instance
// 5. Hide the form (add 'hidden' class)
// 6. Show loading spinner
// 7. Try to fetch questions:
//    - await currentQuiz.getQuestions()
//    - Hide loading
//    - Check if questions exist
//    - Create first Question and display it
// 8. Catch any errors:
//    - Hide loading
//    - Show error message

// ============================================
// TODO: Add Event Listeners
// ============================================
// 1. startQuizBtn click -> call startQuiz()
// 2. questionsNumber keydown -> if Enter, call startQuiz()
