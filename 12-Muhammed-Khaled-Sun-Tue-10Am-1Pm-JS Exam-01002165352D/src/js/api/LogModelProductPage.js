import { foodLogs } from "./LogModel.js";

import { mealFullDetailsFromScanner, productDetailModal } from "./../main.js";
import { refreshFoodLogUI } from "./foodlog.js";

let image_model = document.getElementById("image_model"); // تعديل الصورة و ال alt
let brand_model = document.getElementById("brand_model"); // تعديل البراند
let name_model = document.getElementById("name_model"); // تعديل الاسم
let weight_model = document.getElementById("weight_model"); // تعديل وزن المنتج
let Nutri_Score_model_State = document.getElementById(
  "Nutri_Score_model_State",
); // تعديل لون الخلفية الغامق
let Nutri_Score_value = document.getElementById("Nutri_Score_value"); // تعديل نوع و لون Nutri
let Nutri_Score_sColor2 = document.getElementById("Nutri_Score_sColor2"); // تعديل لون يبفى زى اللى فات
let Nutri_model_State = document.getElementById("Nutri_model_State"); // تعديل الحالة الخاصة Nutria
let NOVA_Score_model_State = document.getElementById("NOVA_Score_model_State"); // تعديل اللوان الغامق
let NOVA_Score_value = document.getElementById("NOVA_Score_value"); // تعديل قيمة ولون Nova
let NOVA_Score_sColor2 = document.getElementById("NOVA_Score_sColor2"); // تعديل اللون الفاتح
let NOVA_model_State = document.getElementById("NOVA_model_State"); // تعديل الحالة الخاصة بال Nova
let model_Calories = document.getElementById("model_Calories");
let modelProtein = document.getElementById("modelProtein");
let model_Carbs = document.getElementById("model_Carbs");
let model_Fat = document.getElementById("model_Fat");
let model_Suger = document.getElementById("model_Suger");
let logFoodModel = document.getElementById("logFoodModel");
let ProteinProgessBar = document.getElementById("ProteinProgessBar");
let CarbsProgessBar = document.getElementById("CarbsProgessBar");
let FatProgessBar = document.getElementById("FatProgessBar");
let SugarProgessBar = document.getElementById("SugarProgessBar");

const SCORE_CONFIG = {
  nutrition: {
    A: { color: "#00c950", bg: "rgba(0, 201, 80, 0.4)", text: "Very Good" },
    B: { color: "#7CCF00", bg: "hsla(84, 100%, 41%, 0.4)", text: "Good" },
    C: { color: "#F0B100", bg: "rgba(240, 176, 0, 0.4)", text: "Average" },
    D: { color: "#FF6900", bg: "rgba(255, 106, 0, 0.4)", text: "Poor" },
    E: { color: "#FA2C37", bg: "rgba(250, 44, 54, 0.4)", text: "Bad" },
  },
  nova: {
    1: { color: "#00c950", bg: "rgba(0, 201, 80, 0.4)", text: "Very Good" },
    2: { color: "#7CCF00", bg: "hsla(84, 100%, 41%, 0.4)", text: "Good" },
    3: { color: "#F0B100", bg: "rgba(240, 176, 0, 0.4)", text: "Average" },
    4: { color: "#FA2C37", bg: "rgba(250, 44, 54, 0.4)", text: "Bad" },
  },
};

function getScoreData(type, value, fallback) {
  return SCORE_CONFIG[type][value] || SCORE_CONFIG[type][fallback];
}

export function modelProductScanner(meal) {
  const nutriGrade =
    meal.nutritionGrade && meal.nutritionGrade !== "UNKNOWN"
      ? meal.nutritionGrade.toUpperCase()
      : "D";

  const novaGrade = meal.novaGroup ?? 2;

  const nutri = getScoreData("nutrition", nutriGrade, "D");
  const nova = getScoreData("nova", novaGrade, 2);

  image_model.src = meal.image;
  image_model.alt = meal.name;

  brand_model.textContent = meal.brand;
  name_model.textContent = meal.name;

  model_Calories.textContent = meal.nutrients.calories;
  modelProtein.textContent = `${meal.nutrients.protein}g`;
  model_Carbs.textContent = meal.nutrients.carbs;
  model_Fat.textContent = meal.nutrients.fat;
  model_Suger.textContent = meal.nutrients.sugar;

  weight_model.textContent = "1KG";

  Nutri_Score_value.textContent = nutriGrade;
  NOVA_Score_value.textContent = novaGrade;

  const total =
    meal.nutrients.protein +
    meal.nutrients.carbs +
    meal.nutrients.fat +
    meal.nutrients.sugar;

  ProteinProgessBar.style.width = `${(meal.nutrients.protein / total) * 100}%`;
  CarbsProgessBar.style.width = `${(meal.nutrients.carbs / total) * 100}%`;
  FatProgessBar.style.width = `${(meal.nutrients.fat / total) * 100}%`;
  SugarProgessBar.style.width = `${(meal.nutrients.sugar / total) * 100}%`;

  // Nutri UI
  Nutri_Score_model_State.style.backgroundColor = nutri.bg;
  Nutri_Score_sColor2.style.color = nutri.color;
  Nutri_model_State.textContent = nutri.text;
  Nutri_Score_value.style.backgroundColor = nutri.bg;
  NOVA_Score_value.style.backgroundColor = nova.bg;
  // Nova UI
  NOVA_Score_model_State.style.backgroundColor = nova.bg;
  NOVA_Score_sColor2.style.color = nova.color;
  NOVA_model_State.textContent = nova.text;
}

// Save in localStorage
function saveToLocalStorage() {
  localStorage.setItem("allFoodLogs", JSON.stringify(foodLogs));
}

// لغلق الموديل
export function confirmLogMealModal() {
  logFoodModel.addEventListener("click", () => {
    console.log(mealFullDetailsFromScanner);

    foodLogs.push(mealFullDetailsFromScanner);
    saveToLocalStorage();
    productDetailModal.style.display = "none";

    console.log("Sucess from model Product Scanner");

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
    refreshFoodLogUI()
  });
}
