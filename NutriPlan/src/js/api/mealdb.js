import { createLoader, createNoData } from "../main.js";

let mealsDetails = [];
export let recipesGrid = document.getElementById("recipes-grid");
export let listView = document.getElementById("recipes-list");
let gridViewBtn = document.getElementById("grid-view-btn");
let listViewBtn = document.getElementById("list-view-btn");
let categoriesSection = document.getElementById("categories-grid");
let areaSection = document.getElementById("buttonArea");
let mealDetails = document.getElementById("meal-details");
export let homeSection = document.getElementById("home-section");
let originalRecipe = document.getElementById("originalRecipe");
let headingName = document.querySelector(".headingName");
let ProteinProgressBar = document.querySelector(".ProteinProgressBar");
let CarbsProgressBar = document.querySelector(".CarbsProgressBar");
let FatProgressBar = document.querySelector(".FatProgressBar");
let FiberProgressBar = document.querySelector(".FiberProgressBar");
let SugarProgressBar = document.querySelector(".SugarProgressBar");
let saturatedFatProgressBar = document.querySelector(
  ".saturatedFatProgressBar",
);
let thumbnail = document.querySelector(".thumbnail");
let category = document.querySelector(".category");
let area = document.querySelector(".area");
let name = document.querySelector(".name");
let heroServings = document.querySelector("#hero-servings span");
let heroCalories = document.querySelector("#hero-calories span");
let IngredientsCount = document.querySelector(".IngredientsCount");
let IngredientsItems = document.querySelector("#IngredientsItems");
let InstructionsItems = document.querySelector("#InstructionsItems");
let VideoView = document.querySelector("#VideoView");
let CaloriesPerServing = document.querySelector("#CaloriesPerServing");
let totalCalories = document.getElementById("totalCalories");
let Protein = document.querySelector("#Protein");
let Carbs = document.querySelector("#Carbs");
let Fat = document.querySelector("#Fat");
let Fiber = document.querySelector("#Fiber");
let Sugar = document.querySelector("#Sugar");
let saturatedFat = document.getElementById("saturatedFat");
let cholesterol = document.getElementById("cholesterol");
let sodium = document.getElementById("sodium");

//  Categories الايقونات وألوان الخلقية و الحواف
const categoryData = {
  Side: {
    icon: "fa-utensils",
    bg: "from-emerald-50 to-teal-50",
    iconBg: "from-emerald-400 to-green-500",
    border: "border-emerald-200 hover:border-emerald-400",
  },
  Beef: {
    icon: "fa-drumstick-bite",
    bg: "from-red-50 to-rose-50",
    iconBg: "from-red-400 to-rose-500",
    border: "border-red-200 hover:border-red-400",
  },
  Chicken: {
    icon: "fa-drumstick",
    bg: "from-yellow-50 to-orange-50",
    iconBg: "from-yellow-400 to-orange-500",
    border: "border-yellow-200 hover:border-yellow-400",
  },
  Dessert: {
    icon: "fa-ice-cream",
    bg: "from-pink-50 to-purple-50",
    iconBg: "from-pink-400 to-purple-500",
    border: "border-pink-200 hover:border-pink-400",
  },
  Seafood: {
    icon: "fa-fish",
    bg: "from-blue-50 to-cyan-50",
    iconBg: "from-blue-400 to-cyan-500",
    border: "border-blue-200 hover:border-blue-400",
  },
  Vegetarian: {
    icon: "fa-leaf",
    bg: "from-green-50 to-lime-50",
    iconBg: "from-green-400 to-lime-500",
    border: "border-green-200 hover:border-green-400",
  },
  Breakfast: {
    icon: "fa-mug-hot",
    bg: "from-orange-50 to-amber-50",
    iconBg: "from-orange-400 to-amber-500",
    border: "border-orange-200 hover:border-orange-400",
  },
  Miscellaneous: {
    icon: "fa-box-open",
    bg: "from-gray-50 to-gray-100",
    iconBg: "from-gray-400 to-gray-600",
    border: "border-gray-200 hover:border-gray-400",
  },
  Pasta: {
    icon: "fa-bowl-rice",
    bg: "from-amber-50 to-yellow-50",
    iconBg: "from-amber-400 to-yellow-500",
    border: "border-amber-200 hover:border-amber-400",
  },
  Pork: {
    icon: "fa-bacon",
    bg: "from-red-50 to-pink-50",
    iconBg: "from-red-400 to-pink-500",
    border: "border-red-200 hover:border-red-400",
  },
};

// جلب بيانات كل المناطق

const areaLoader = createLoader(areaSection);
const areanoData = createNoData(areaSection);

export async function getAreas() {
  areaLoader.show();
  areanoData.hide();
  try {
    const response = await fetch(
      "https://nutriplan-api.vercel.app/api/meals/areas",
    );
    const data = await response.json();
    console.log(data.results, "getAreas");

    if (!data || data.length === 0) {
      areanoData.show();
      return;
    }

    //   عرض المناطق في الأزرار
    areaSection.innerHTML =
      `<button
                class="px-4 py-2 bg-emerald-600 text-white rounded-full font-medium text-sm whitespace-nowrap hover:bg-emerald-700 transition-all"
              >
                All Recipes
              </button>` +
      data.results
        .map((meal) => {
          return `
          <button data-area="${meal.name}" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all">
                  ${meal.name}
                </button>
                `;
        })
        .join("");
  } catch (err) {
    console.error(err);
    areanoData.show();
  } finally {
    areaLoader.hide();
  }
}

// جلب بيانات كل التصنيفات
const categoriesLoader = createLoader(categoriesSection);
const categoriesnoData = createNoData(categoriesSection);

export async function getCategories() {
  categoriesLoader.show();
  categoriesnoData.hide();
  try {
    const response = await fetch(
      "https://nutriplan-api.vercel.app/api/meals/categories",
    );
    const data = await response.json();
    console.log(data.results, "getCategories");
    if (!data || data.length === 0) {
      categoriesnoData.show();
      return;
    }

    categoriesSection.innerHTML = data.results
      .map((meal) => {
        const dataCat = categoryData[meal.name] || categoryData["Side"];

        return `
       <div
                  class="category-card bg-gradient-to-br ${dataCat.bg} rounded-xl p-3 border ${dataCat.border} hover:shadow-md cursor-pointer transition-all group"
                  data-category="${meal.name}"
                >
                  <div class="flex items-center gap-2.5">
                    <div
                      class="text-white w-9 h-9 bg-gradient-to-br ${dataCat.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                    >
                      <i class="fa-solid ${dataCat.icon}"></i>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-gray-900">${meal.name}</h3>
                    </div>
                  </div>
                </div>
      `;
      })
      .join("");
  } catch (err) {
    console.error(err);
    categoriesnoData.show();
  } finally {
    categoriesLoader.hide();
  }
}

// جلب بيانات وجبة واحدة كاملة
const recipesLoader = createLoader(recipesGrid);
const recipesnoData = createNoData(recipesGrid);

export async function fetchMealById(id) {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    const res = await fetch(`https://nutriplan-api.vercel.app/api/meals/${id}`);
    const data = await res.json();
    if (!data || data.length === 0) {
      recipesnoData.show();
      return;
    }
    return data.result;
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للتصنيف
export async function fetchMealByCategory(category = "chicken") {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?category=${category}&page=1&limit=25`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      recipesnoData.show();
      return;
    }
    //
    console.log(data.results, "fetchMealByCategory");
    //
    const fullMeals = await Promise.all(
      data.results.map((meal) => fetchMealById(meal.id)),
    );

    mealsDetails = fullMeals.filter(Boolean) || [];
    return mealsDetails;
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للتصنيف
export async function fetchMealByName(name = "chicken") {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/search?q=${name}`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      recipesnoData.show();
      return;
    }
    //
    console.log(data.results, "fetchMealByCategory");
    //
    const fullMeals = await Promise.all(
      data.results.map((meal) => fetchMealById(meal.id)),
    );

    mealsDetails = fullMeals.filter(Boolean) || [];
    return mealsDetails;
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للمنطقة
export async function fetchMealsByArea(area) {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?area=${area}&page=1&limit=25`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      recipesnoData.show();
      return;
    }
    console.log(data.results, "fetchMealsByArea");

    const fullMeals = await Promise.all(
      data.results.map((meal) => fetchMealById(meal.id)),
    );

    mealsDetails = fullMeals || [];
    return mealsDetails;
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للمكونات
export async function fetchMealsByIngredient(ingredient) {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?ingredient=${ingredient}&page=1&limit=25`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      recipesnoData.show();
      return;
    }
    console.log(data.results, "fetchMealsByIngredient");

    const fullMeals = await Promise.all(
      data.results.map((meal) => fetchMealById(meal.id)),
    );

    mealsDetails = fullMeals || [];
    return mealsDetails;
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

// جلب وعرض كل الوجبات فى شكل شبكة
export async function getAllMealsGridView(meals) {
  if (meals.length > 0) {
    recipesGrid.innerHTML = "";
    recipesGrid.innerHTML = meals
      .map((meal) => {
        return `
                        <div
                                class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                                data-meal-id="${meal.id}"
                              >
                                <div class="relative h-48 overflow-hidden">
                                  <img
                                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    src="${meal.thumbnail}"
                                    alt="${meal.name}"
                                    loading="lazy"
                                  />
                                  <div class="absolute bottom-3 left-3 flex gap-2">
                                    <span
                                      class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                                    >
                                      ${meal.category}
                                    </span>
                                    <span
                                      class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
                                    >
                                      ${meal.area}
                                    </span>
                                  </div>
                                </div>
                                <div class="p-4">
                                  <h3
                                    class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                                  >
                                    ${meal.name}
                                  </h3>
                                  <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                                    ${meal.instructions}
                                  </p>
                                  <div class="flex items-center justify-between text-xs">
                                    <span class="font-semibold text-gray-900">
                                      <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                                      ${meal.category}
                                    </span>
                                    <span class="font-semibold text-gray-500">
                                      <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                                      ${meal.area}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              `;
      })
      .join("");
  } else {
    return;
  }
}

// جلب وعرض كل الوجبات فى شكل قائمة
export async function getAllMealsListView(meals) {
  if (meals.length > 0) {
    listView.innerHTML = "";
    listView.innerHTML = meals
      .map((meal) => {
        return `
                      <div
                              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-row h-40"
                              data-meal-id="${meal.id}"
                            >
                              <div class="relative overflow-hidden w-48 h-full">
                                <img
                                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  src="${meal.thumbnail}"
                                  alt="${meal.name}"
                                  loading="lazy"
                                />
                                <div class="absolute bottom-3 left-3 flex gap-2 hidden">
                                  <span
                                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg"
                                  >
                                    <i class="mr-1 text-emerald-600" data-fa-i2svg=""
                                      ><svg
                                        class="svg-inline--fa fa-tag"
                                        data-prefix="fas"
                                        data-icon="tag"
                                        role="img"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                                        ></path></svg></i
                                    >${meal.category}
                                  </span>
            
                                  <span
                                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg"
                                  >
                                    <i class="mr-1 text-blue-600" data-fa-i2svg=""
                                      ><svg
                                        class="svg-inline--fa fa-globe"
                                        data-prefix="fas"
                                        data-icon="globe"
                                        role="img"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"
                                        ></path></svg></i
                                    >${meal.area}
                                  </span>
                                </div>
                              </div>
                              <div class="p-4 widthOfList">
                                <h3
                                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                                >
                                  ${meal.name}
                                </h3>
                                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                                  ${meal.instruction}
                                </p>
                                <div class="flex items-center justify-between text-xs">
                                  <span class="font-semibold text-gray-900">
                                    <i class="mr-1 text-emerald-600" data-fa-i2svg=""
                                      ><svg
                                        class="svg-inline--fa fa-utensils"
                                        data-prefix="fas"
                                        data-icon="utensils"
                                        role="img"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"
                                        ></path></svg
                                    ></i>
                                    ${meal.category}
                                  </span>
                                  <span class="font-semibold text-gray-500">
                                    <i class="mr-1 text-blue-500" data-fa-i2svg=""
                                      ><svg
                                        class="svg-inline--fa fa-globe"
                                        data-prefix="fas"
                                        data-icon="globe"
                                        role="img"
                                        viewBox="0 0 512 512"
                                        aria-hidden="true"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"
                                        ></path></svg
                                    ></i>
                                    ${meal.area}
                                  </span>
                                </div>
                              </div>
                            </div>
                              `;
      })
      .join("");
  } else {
    return;
  }
}

// تغيير شكل الكروت الي Grid
gridViewBtn.addEventListener("click", () => {
  recipesGrid.style.display = "grid";
  listView.style.display = "none";

  gridViewBtn.classList.add("bg-white", "rounded-md", "shadow-sm");
  listViewBtn.classList.remove("bg-white", "rounded-md", "shadow-sm");
});

// تغيير شكل الكروت الى List
listViewBtn.addEventListener("click", () => {
  recipesGrid.style.display = "none";
  listView.style.display = "grid";

  gridViewBtn.classList.remove("bg-white", "rounded-md", "shadow-sm");
  listViewBtn.classList.add("bg-white", "rounded-md", "shadow-sm");
});

// زرار الرجوع
document.getElementById("back-to-meals-btn").addEventListener("click", () => {
  homeSection.style.display = "block";
  mealDetails.style.display = "none";
  headingName.innerHTML = "Meals & Recipes";
});

// استخراج ال video id عشان يشتغل فى iframe
function getYoutubeEmbedUrl(url) {
  const videoId = url.split("v=")[1];
  return `https://www.youtube.com/embed/${videoId}`;
}

// جلب تفاصيل الوجبة
export function getMealDetails(meal, mealNutraints) {
console.log("before getMealDetails", meal, mealNutraints);
  thumbnail.src = `${meal.thumbnail}`;
  category.innerHTML = `${meal.category}`;
  area.innerHTML = `${meal.area}`;
  name.innerHTML = `${meal.name}`;
  IngredientsCount.innerHTML = `${meal.ingredients.length}`;
  IngredientsItems.innerHTML = "";
  
  IngredientsItems.innerHTML = meal.ingredients
    .map((item) => {
      return `
                <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                >
                    <input
                    type="checkbox"
                    class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                    <span class="font-medium text-gray-900">
                        ${item.measure}
                    </span>
                    ${item.ingredient}
                    </span>
                </div>
    `;
    })
    .join("");
  InstructionsItems.innerHTML = meal.instructions
    .map((item, index) => {
      return `
                <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      ${index + 1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      ${item}
                    </p>
                </div>
                `;
    })
    .join("");
  VideoView.src = getYoutubeEmbedUrl(meal.youtube);
  originalRecipe.setAttribute("href", meal.source);
  heroServings.innerHTML = `${mealNutraints.data.servings}`;
  heroCalories.innerHTML = `${mealNutraints.data.perServing.calories}`;
  totalCalories.innerHTML = `${mealNutraints.data.totals.calories}Cal`;
  CaloriesPerServing.innerHTML = `${mealNutraints.data.perServing.calories}`;
  Protein.innerHTML = `${mealNutraints.data.perServing.protein}`;
  Carbs.innerHTML = `${mealNutraints.data.perServing.carbs}`;
  Fat.innerHTML = `${mealNutraints.data.perServing.fat}`;
  Fiber.innerHTML = `${mealNutraints.data.perServing.fiber}`;
  Sugar.innerHTML = `${mealNutraints.data.perServing.sugar}`;
  saturatedFat.innerHTML = `${mealNutraints.data.perServing.saturatedFat}`;
  cholesterol.innerHTML = `${mealNutraints.data.perServing.cholesterol}`;
  sodium.innerHTML = `${mealNutraints.data.perServing.sodium}`;

  const sumulative =
    mealNutraints.data.perServing.protein +
    mealNutraints.data.perServing.carbs +
    mealNutraints.data.perServing.fat +
    mealNutraints.data.perServing.fiber +
    mealNutraints.data.perServing.sugar +
    mealNutraints.data.perServing.saturatedFat;

  ProteinProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.protein / sumulative) * 100}%`,
  );
  CarbsProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.carbs / sumulative) * 100}%`,
  );
  FatProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.fat / sumulative) * 100}%`,
  );
  FiberProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.fiber / sumulative) * 100}%`,
  );
  SugarProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.sugar / sumulative) * 100}%`,
  );
  saturatedFatProgressBar.setAttribute(
    "style",
    `width: ${(mealNutraints.data.perServing.saturatedFat / sumulative) * 100}%`,
  );
}

// كود تنسيق البيانات المطلوب جلبها فى POST
export function mapMealToPostBody(meal) {
  return {
    recipeName: meal.name,
    ingredients: meal.ingredients
      .filter((item) => item.ingredient && item.measure) // أمان
      .map((item) => `${item.measure} ${item.ingredient}`),
  };
}

// Post تحليل مكونات الوجبة
export async function analyzeRecipe(mealDetails) {
  const response = await fetch(
    "https://nutriplan-api.vercel.app/api/nutrition/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "xky92Q4raeGVGXzv1ArfmCj474BKqIk4QAOaxlHI",
      },
      body: JSON.stringify(mealDetails),
    },
  );

  const data = await response.json();
  console.log(data.data, "البيانات الخاصة بتحليل المكونات");
  return data;
}
