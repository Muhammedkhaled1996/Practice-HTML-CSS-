import { mealFullDetails, meal, mealNutraints } from "./../main.js";
import { refreshFoodLogUI } from "./foodlog.js";

let logMealBtn = document.getElementById("log-meal-btn");
let logMealModal = document.getElementById("log-meal-modal");
let cancelLogMeal = document.getElementById("cancel-log-meal");
let confirmLogMeal = document.getElementById("confirm-log-meal");
export let foodLogs = JSON.parse(localStorage.getItem("allFoodLogs")) || [];
let mealImage = document.querySelector(".mealImage");
let mealname = document.querySelector(".mealname");
let decreaseServings = document.getElementById("decrease-servings");
let increaseServings = document.getElementById("increase-servings");
export let mealServings = document.getElementById("meal-servings");
let modalCalories = document.getElementById("modal-calories");
let modalProtein = document.getElementById("modal-protein");
let modalCarbs = document.getElementById("modal-carbs");
let modalFat = document.getElementById("modal-fat");

// لفتح الموديل لتسجيل الوجبة فى ال Food Log
export function openLogMealModal() {
  logMealBtn.addEventListener("click", () => {
    mealImage.src = `${meal.thumbnail}`;
    mealname.innerHTML = `${meal.name}`;
    modalCalories.innerHTML = `${mealNutraints.data.perServing.calories}`;
    modalProtein.innerHTML = `${mealNutraints.data.perServing.protein}`;
    modalCarbs.innerHTML = `${mealNutraints.data.perServing.carbs}`;
    modalFat.innerHTML = `${mealNutraints.data.perServing.fat}`;

    logMealModal.style.display = "flex";
  });
}

// لغلق الموديل
export function cancelLogMealModal() {
  cancelLogMeal.addEventListener("click", () => {
    logMealModal.style.display = "none";
  });
}

// initial value
let mealServingsValue = parseFloat(mealServings.value) || 1;

// decrease Servings
export function decreaseServingsCounter() {
  decreaseServings.addEventListener("click", () => {
    if (mealServingsValue > 0.5) {
      mealServingsValue -= 0.5;
    } else {
      mealServingsValue = 0.5;
    }
    mealServings.value = mealServingsValue;
  });

  return mealServingsValue;
}

// increase Servings
export function increaseServingsCounter() {
  increaseServings.addEventListener("click", () => {
    if (mealServingsValue < 10) {
      mealServingsValue += 0.5;
    } else {
      mealServingsValue = 10;
    }
    mealServings.value = mealServingsValue;
  });
  return mealServingsValue;
}

// Save in localStorage
function saveToLocalStorage() {
  localStorage.setItem("allFoodLogs", JSON.stringify(foodLogs));
}

// لغلق الموديل
export function confirmLogMealModal() {
  confirmLogMeal.addEventListener("click", () => {
    mealFullDetails.ServingsValue = increaseServingsCounter();

    foodLogs.push(mealFullDetails);
    saveToLocalStorage();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Saved successfully in foodlog",
    });

    logMealModal.style.display = "none";
    refreshFoodLogUI();
  });
}
