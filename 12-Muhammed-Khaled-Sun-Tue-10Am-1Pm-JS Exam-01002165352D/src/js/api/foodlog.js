let foodlogDate = document.getElementById("foodlog-date");
let totalCalories = document.getElementById("totalCaloriesScanner");
let totalCaloriesProgressBar = document.getElementById(
  "totalCaloriesProgressBar",
);
let totalProtein = document.getElementById("totalProtein");
let totalProteinProgressBar = document.getElementById(
  "totalProteinProgressBar",
);
let totalCarbs = document.getElementById("totalCarbs");
let totalCarbsProgressBar = document.getElementById("totalCarbsProgressBar");
let totalFat = document.getElementById("totalFat");
let totalFatProgressBar = document.getElementById("totalFatProgressBar");
let countLogItems = document.getElementById("countLogItems");

let WeeklyAverage = document.getElementById("WeeklyAverage");
let TotalItemsThisWeek = document.getElementById("TotalItemsThisWeek");
let DaysOnGoal = document.getElementById("DaysOnGoal");
const clearFoodlog = document.getElementById("clear-foodlog");

let allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];

let today;
let todayMeals;

// function تجيب تاريخ اليوم بنفس الفورمات
function getTodayFormattedDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

// function تجيب بيانات اليوم فقط من localStorage
function getTodayMeals() {
  today = getTodayFormattedDate();
  todayMeals = allFoodLog.filter((meal) => {
    return meal.addDate === today;
  });
  console.log(todayMeals, "البيانات الخاصة بال food log باليوم الحالى فقط");
  return todayMeals;
}

todayMeals = getTodayMeals();

// function تحسب إجمالي calories / carbs / fat / protein لليوم
function getTodayNutritionTotals() {
  const totals = todayMeals.reduce(
    (totals, item) => {
      const n = item.nutrients || {};
      const servings = Number(item.ServingsValue) || 1;

      totals.calories += (Number(n.calories) || 0) * servings;
      totals.carbs += (Number(n.carbs) || 0) * servings;
      totals.fat += (Number(n.fat) || 0) * servings;
      totals.protein += (Number(n.protein) || 0) * servings;

      return totals;
    },
    {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    },
  );

  return {
    calories: Math.round(totals.calories * 100) / 100,
    carbs: Math.round(totals.carbs * 100) / 100,
    fat: Math.round(totals.fat * 100) / 100,
    protein: Math.round(totals.protein * 100) / 100,
  };
}

function renderFoodLogMeals() {
  allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];
  const todayMeals = getTodayMeals();
  const totals = getTodayNutritionTotals();

  const mainContainer = document.querySelector(".mainContainer");
  const foodLogContainer = document.getElementById("foodLogContainer");

  //  تاريخ  اليوم بالتسيق دا Tuesday, Jan 14
  foodlogDate.innerHTML = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  // الاحصائيات الخاصة باليوم الحالى
  totalCalories.innerHTML = totals.calories;
  totalCaloriesProgressBar.style.width = `${totals.calories <= 2000 ? (totals.calories / 2000) * 100 : 100}%`;
  totalCaloriesProgressBar.style.backgroundColor = `${totals.calories >= 1750 ? "red" : ""}`;

  totalProtein.innerHTML = totals.protein;
  totalProteinProgressBar.style.width = `${totals.protein <= 50 ? (totals.protein / 50) * 100 : 100}%`;
  totalProteinProgressBar.style.backgroundColor = `${totals.protein >= 40 ? "red" : ""}`;

  totalCarbs.innerHTML = totals.carbs;
  totalCarbsProgressBar.style.width = `${totals.carbs <= 250 ? (totals.carbs / 250) * 100 : 100}%`;
  totalCarbsProgressBar.style.backgroundColor = `${totals.carbs >= 200 ? "red" : ""}`;

  totalFat.innerHTML = totals.fat;
  totalFatProgressBar.style.width = `${totals.fat <= 65 ? (totals.fat / 65) * 100 : 100}%`;
  totalFatProgressBar.style.backgroundColor = `${totals.fat >= 45 ? "red" : ""}`;
  countLogItems.innerHTML = todayMeals.length || 0;

  if (todayMeals.length > 0) {
    foodLogContainer.style.display = "block";
    mainContainer.style.display = "none";
    clearFoodlog.style.display = "block";

    foodLogContainer.innerHTML = todayMeals
      .map((meal, index) => {
        return `
      <div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all"  style="margin-bottom:10px ;">
                        <div class="flex items-start gap-4">
                            <img src="${meal.image}" alt="${meal.name}" class="w-14 h-14 rounded-xl object-cover">
                            <div class="alignLeft">
                                <p class="font-semibold text-gray-900">${meal.name}</p>
                                <p class="text-sm text-gray-500">
                                    ${meal.ServingsValue} servings
                                    <span class="mx-1">•</span>
                                    <span class="text-${meal.from === "Recipe" ? "red" : "blue"}-600">${meal.from}</span>
                                </p>
                                <p class="text-xs text-gray-400 mt-1">${meal.addTime}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <p class="text-lg font-bold text-emerald-600">${meal.nutrients.calories * meal.ServingsValue}</p>
                                <p class="text-xs text-gray-500">kcal</p>
                            </div>
                            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                                <span class="px-2 py-1 bg-blue-50 rounded">${meal.nutrients.protein * meal.ServingsValue}g P</span>
                                <span class="px-2 py-1 bg-amber-50 rounded">${meal.nutrients.carbs * meal.ServingsValue}g C</span>
                                <span class="px-2 py-1 bg-purple-50 rounded">${meal.nutrients.fat * meal.ServingsValue}g F</span>
                            </div>
                            <button class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2" data-id="${meal.id}">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
                            </button>
                        </div>
                    </div>
      `;
      })
      .join("");
  } else {
    foodLogContainer.style.display = "none";
    mainContainer.style.display = "block";
    clearFoodlog.style.display = "none";
  }
}

// حذف وجبة
foodLogContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".remove-foodlog-item");
  if (!btn) return;

  const mealID = Number(btn.dataset.id);

  console.log(mealID);

  let allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];

  allFoodLog = allFoodLog.filter((meal) => Number(meal.id) !== mealID);

  localStorage.setItem("allFoodLogs", JSON.stringify(allFoodLog));

  refreshFoodLogUI();
});

//  مسح جميع الوجبات اليوم الحالى فقط
clearFoodlog.addEventListener("click", () => {
  const today = getTodayFormattedDate();

  let allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];

  // حذف وجبات اليوم فقط
  allFoodLog = allFoodLog.filter((meal) => meal.addDate !== today);

  localStorage.setItem("allFoodLogs", JSON.stringify(allFoodLog));

  refreshFoodLogUI();
});

// نجيب Date object لليوم ناقص X
function getDateMinusDays(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
}

//نفس فورمات التخزين (علشان المقارنة)
function formatDateForStorage(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

//اسم ورقم اليوم
function getDayUIData(date) {
  return {
    dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
    dayNumber: date.getDate(),
  };
}

//الدالة الأساسية: Render Weekly Overview
function renderWeeklyOverview() {
  const WeeklyOverview = document.getElementById("WeeklyOverview");
  const allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];
  const todayFormatted = formatDateForStorage(new Date());

  let html = "";

  for (let i = 6; i >= 0; i--) {
    const date = getDateMinusDays(i);
    const formattedDate = formatDateForStorage(date);
    const { dayName, dayNumber } = getDayUIData(date);

    const dayMeals = allFoodLog.filter(
      (meal) => meal.addDate === formattedDate,
    );

    const totalCalories = dayMeals.reduce((sum, meal) => {
      const calories = Number(meal.nutrients?.calories) || 0;
      const servings = Number(meal.ServingsValue) || 1;
      return sum + calories * servings;
    }, 0);

    const isToday = formattedDate === todayFormatted;

    html += `
      <div class="text-center ${isToday ? "bg-indigo-100 rounded-xl" : ""}">
        <p class="text-xs text-gray-500 mb-1">${dayName}</p>
        <p class="text-sm font-medium text-gray-900">${dayNumber}</p>

        <div class="mt-2 ${
          totalCalories ? "text-emerald-600" : "text-gray-300"
        }">
          <p class="text-lg font-bold">${totalCalories}</p>
          <p class="text-xs">kcal</p>
        </div>

        <p class="text-xs text-gray-400 mt-1">
          ${dayMeals.length} items
        </p>
      </div>
    `;
  }

  WeeklyOverview.innerHTML = html;
}

export function refreshFoodLogUI() {
  renderFoodLogMeals();
  renderWeeklyOverview();
  renderWeeklyStats();
}

function calculateWeeklyStats(goalCalories = 2000) {
  const allFoodLog = JSON.parse(localStorage.getItem("allFoodLogs")) || [];

  let totalCaloriesWeek = 0;
  let totalItemsWeek = 0;
  let daysOnGoal = 0;

  for (let i = 0; i < 7; i++) {
    const date = getDateMinusDays(i);
    const formattedDate = formatDateForStorage(date);

    const dayMeals = allFoodLog.filter(
      (meal) => meal.addDate === formattedDate,
    );

    const dayCalories = dayMeals.reduce((sum, meal) => {
      const calories = Number(meal.nutrients?.calories) || 0;
      const servings = Number(meal.ServingsValue) || 1;
      return sum + calories * servings;
    }, 0);

    if (dayMeals.length > 0) {
      totalCaloriesWeek += dayCalories;
      totalItemsWeek += dayMeals.length;

      if (dayCalories <= goalCalories) {
        daysOnGoal++;
      }
    }
  }

  const weeklyAverage = Math.round(totalCaloriesWeek / 7);

  return {
    weeklyAverage,
    totalItemsWeek,
    daysOnGoal,
  };
}

function renderWeeklyStats() {
  const { weeklyAverage, totalItemsWeek, daysOnGoal } =
    calculateWeeklyStats(2000);

  WeeklyAverage.innerHTML = weeklyAverage;
  TotalItemsThisWeek.innerHTML = totalItemsWeek;
  DaysOnGoal.innerHTML = daysOnGoal;
}
