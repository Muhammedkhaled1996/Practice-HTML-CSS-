import {
  getAreas,
  getCategories,
  fetchMealByCategory,
  fetchMealsByArea,
  fetchMealsByIngredient,
  getAllMealsGridView,
  getAllMealsListView,
  recipesGrid,
  listView,
  fetchMealById,
  getMealDetails,
  mapMealToPostBody,
  analyzeRecipe,
  homeSection,
  fetchMealByName,
} from "./api/mealdb.js";

import {
  fetchMealsProductName,
  getAllMealsScannerProducts,
  productSearchInput,
  fetchMealsBarcode,
  barcodeInput,
  getMealByBarcode,
  fetchSacnnerProductByCategory,
  fetchScannerProductsCategories,
  productsGrid,
} from "./api/scanner.js";

import * as LogicModel from "./api/LogModel.js";
import * as LogicModel_2 from "./api/LogModelProductPage.js";
import * as FoodLogLogic from "./api/foodlog.js";

let appLoadingOverlay = document.getElementById("app-loading-overlay");
let appLoadingOverlayMealDetails = document.getElementById(
  "app-loading-overlay-Meal-details",
);
let productsSection = document.getElementById("products-section");
let foodlogSection = document.getElementById("foodlog-section");
let sidebarLinks = Array.from(document.querySelectorAll("#sidebar li"));
let headerMenuBtn = document.getElementById("header-menu-btn");
let sidebarCloseBtn = document.getElementById("sidebar-close-btn");
let sidebarOverlay = document.getElementById("sidebar-overlay");
let sidebar = document.getElementById("sidebar");
let headingName = document.querySelector(".headingName");

let areaSection = document.getElementById("buttonArea").children;
let recipesCount = document.querySelector("#recipes-count span");
let categoriesGrid = document.getElementById("categories-grid").children;
let productCategories = document.getElementById("product-categories").children;
let filterScannerByLetter = document.getElementById(
  "filterScannerByLetter",
).children;
let searchinput = document.getElementById("search-input");
let searchProductBtn = document.getElementById("search-product-btn");
let lookupBarcodeBtn = document.getElementById("lookup-barcode-btn");
let mealDetailsPage = document.getElementById("meal-details");
let productsCount = document.getElementById("products-count");
let addRecipeFromBrowse = document.getElementById("addRecipeFromBrowse");
let addRecipeFromScanner = document.getElementById("addRecipeFromScanner");

export let productDetailModal = document.getElementById("product-detail-modal");
let closeProductModal = document.querySelectorAll(".close-product-modal");

addRecipeFromBrowse.onclick = () => {
  showSection("home");
  document
    .querySelector("#home a")
    .classList.add("bg-emerald-50", "text-emerald-700");
  document
    .querySelector("#foodlog a")
    .classList.remove("bg-emerald-50", "text-emerald-700");
};

addRecipeFromScanner.onclick = () => {
  showSection("products");
  document
    .querySelector("#products a")
    .classList.add("bg-emerald-50", "text-emerald-700");
  document
    .querySelector("#foodlog a")
    .classList.remove("bg-emerald-50", "text-emerald-700");
};

// لانشاء عنصر يظهر اثناء البحث
export function createLoader(parent) {
  const loader = document.createElement("div");
  loader.style.display = "none";
  loader.className = "flex items-center justify-center py-12";

  loader.innerHTML = `
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
  `;

  parent.appendChild(loader);

  return {
    show() {
      loader.style.display = "flex";
    },
    hide() {
      loader.style.display = "none";
    },
  };
}

// لانشاء عنصر يظهر لو مفيش نتيحة
export function createNoData(parent, message = "No data found") {
  const noData = document.createElement("div");
  noData.style.display = "none";
  noData.className =
    "flex flex-col items-center justify-center py-12 text-center";

  noData.innerHTML = `
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
      <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">${message}</p>
    <p class="text-gray-400 text-sm mt-2">
      Try searching for something else
    </p>
  `;

  return {
    show() {
      parent.innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">${noData.innerHTML}</div>`;
      noData.style.display = "flex";
    },
    hide() {
      noData.style.display = "none";
    },
  };
}

// التغير بين الاقسام طبقا للزرار اللى هضغط علية فى القائمة الجانبية
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const sectionId = e.currentTarget.id;

    sidebarLinks.forEach((otherLink) => {
      if (otherLink !== e.currentTarget) {
        otherLink
          .querySelector("a")
          .classList.remove("bg-emerald-50", "text-emerald-700");
      }
    });
    e.currentTarget
      .querySelector("a")
      .classList.add("bg-emerald-50", "text-emerald-700");

    if (sectionId === "home") {
      showSection("home");
    } else if (sectionId === "products") {
      showSection("products");
    } else if (sectionId === "foodlog") {
      showSection("foodlog");
    }
  });
});

// لأظهار القسم  المطلوب من القائمة الجانبية
function showSection(section) {
  if (section === "home") {
    homeSection.style.display = "block";
    productsSection.style.display = "none";
    foodlogSection.style.display = "none";
    mealDetailsPage.style.display = "none";
    headingName.innerHTML = "Meals & Recipes";
  } else if (section === "products") {
    homeSection.style.display = "none";
    productsSection.style.display = "block";
    foodlogSection.style.display = "none";
    mealDetailsPage.style.display = "none";
    headingName.innerHTML = "Product Scanner";
  } else if (section === "foodlog") {
    homeSection.style.display = "none";
    productsSection.style.display = "none";
    foodlogSection.style.display = "block";
    mealDetailsPage.style.display = "none";
    headingName.innerHTML = "Food Log";
  }
}

showSection("home");

// فتح القائمة الجانبية
headerMenuBtn.addEventListener("click", () => {
  sidebarOverlay.classList.toggle("active");
  sidebar.classList.toggle("open");
  document.body.style.overflow = "hidden";
});

// لغلق القائمة الجانبية
function closeSidebar() {
  sidebarCloseBtn.addEventListener("click", function () {
    sidebarOverlay.classList.remove("active");
    sidebar.classList.remove("open");
    document.body.style.overflow = "auto";
  });
}
closeSidebar();

// لغلق القائمة الجانبية عند الضغط على الخلفية
sidebarOverlay.addEventListener("click", () => {
  sidebarOverlay.classList.remove("active");
  sidebar.classList.remove("open");
  document.body.style.overflow = "auto";
});

async function fetchData() {
  appLoadingOverlay.classList.remove("loading");
  try {
    getAreas();
    getCategories();
    getAllMealsGridView(await fetchMealByCategory());
    getAllMealsListView(await fetchMealByCategory());
    LogicModel.openLogMealModal();
    LogicModel.cancelLogMealModal();
    LogicModel.confirmLogMealModal();
    LogicModel.increaseServingsCounter();
    LogicModel.decreaseServingsCounter();
    await fetchScannerProductsCategories();
    LogicModel_2.confirmLogMealModal();
  } catch {
    appLoadingOverlay.querySelector("p").innerHTML =
      "Failed in Loading Data Please Try Again Later...";
  } finally {
    appLoadingOverlay.classList.add("loading");
  }
}
// جلب كل البيانات مع شاشة الانتظار
await fetchData();
FoodLogLogic.refreshFoodLogUI();

// لتعديل لون الزرار الخاص بالمنطقة عند الضغط علية
for (let i = 0; i < areaSection.length; i++) {
  areaSection[i].addEventListener("click", (e) => {
    for (let j = 0; j < areaSection.length; j++) {
      areaSection[j].classList.remove(
        "bg-emerald-600",
        "text-white",
        "hover:bg-emerald-700",
      );

      areaSection[j].classList.add(
        "hover:bg-gray-200",
        "bg-gray-100",
        "text-gray-700",
      );
    }

    e.currentTarget.classList.remove(
      "hover:bg-gray-200",
      "bg-gray-100",
      "text-gray-700",
    );

    e.currentTarget.classList.add(
      "bg-emerald-600",
      "text-white",
      "hover:bg-emerald-700",
    );
  });
}

// كود الفلترة للوجبات طبقا للمنطقة
[...areaSection].forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const area = e.target.innerText.trim();

    console.log(area, "الفلترة طبقا للبلد");

    if (area !== "All Recipes") {
      const meals = await fetchMealsByArea(area);
      console.log(meals);
      recipesCount.innerHTML = meals.length;
      getAllMealsGridView(meals);
      getAllMealsListView(meals);
    } else {
      const meals = await fetchMealByCategory();
      console.log(meals);
      recipesCount.innerHTML = meals.length;
      getAllMealsGridView(meals);
      getAllMealsListView(meals);
    }
  });
});

// كود الفلترة للوجبات طبقا للتصنيف
[...categoriesGrid].forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const category = e.target.innerText.trim();

    const meals = await fetchMealByCategory(category);
    console.log(meals, "الوجبات طبقا للتصنيف");

    recipesCount.innerHTML = meals.length;

    getAllMealsGridView(meals);
    getAllMealsListView(meals);
  });
});

// البحث من خلال الاسم او التصنيف او البلد
const recipesLoader = createLoader(recipesGrid);
const recipesnoData = createNoData(recipesGrid);

async function searchMeals(type, value) {
  recipesLoader.show();
  recipesnoData.hide();
  try {
    let meals = [];

    switch (type) {
      case "name":
        meals = await fetchMealByName(value);
        break;
      case "category":
        meals = await fetchMealByCategory(value);
        break;

      case "area":
        meals = await fetchMealsByArea(value);
        break;

      case "ingredient":
        meals = await fetchMealsByIngredient(value);
        break;

      default:
        meals = await fetchMealByCategory("chicken");
    }

    if (!meals || meals.length === 0) {
      console.log("LLL");

      recipesnoData.show();
      return;
    }
    console.log(meals, "الوجبات طبقا للمكتوب بالبحث");

    recipesCount.innerHTML = meals?.length || 0;

    getAllMealsGridView(meals);
    getAllMealsListView(meals);
  } catch (err) {
    console.error(err);
    recipesnoData.show();
  } finally {
    recipesLoader.hide();
  }
}

searchinput.addEventListener("input", (e) => {
  const value = e.target.value.trim();
  if (value) searchMeals("name", value);
});

// اختيار وجبة محددة لمعرفة تفاصيلها
export let mealFullDetails;
export let mealFullDetailsFromScanner;
export let meal;
export let mealNutraints;

recipesGrid.addEventListener("click", async (e) => {
  appLoadingOverlayMealDetails.classList.remove("loading");
  homeSection.style.display = "none";
  headingName.innerHTML = "Recipe Details";
  mealDetailsPage.style.display = "block";
  try {
    const card = e.target.closest("[data-meal-id]");

    if (!card) return;
    const mealID = card.dataset.mealId;
    //  بيانات الوجبة
    meal = await fetchMealById(mealID);
    //  تنسيق بيانات الوجبة لجلب تفاصيلها
    const mealDetails = mapMealToPostBody(meal);
    //  تحليل القيم الغذائية
    mealNutraints = await analyzeRecipe(mealDetails);

    console.log(meal, "الوجبة الاصليييية");
    console.log(mealNutraints, "تفاصييل الوجبببببة");

    getMealDetails(meal, mealNutraints);
    //  تخزين كل حاجة في Object واحد
    mealFullDetails = {
      name: meal.name,
      brand: meal.category,
      image: meal.thumbnail,
      id: meal.id,
      nutrients: {
        protein: mealNutraints.data.perServing.protein,
        carbs: mealNutraints.data.perServing.carbs,
        fat: mealNutraints.data.perServing.fat,
        calories: mealNutraints.data.perServing.calories,
      },
      from: "Recipe",
      addTime: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      addDate: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
    };
    console.log(mealFullDetails, "التفاصيل اللى هتروح للlocalStorage");
  } catch (err) {
    console.error("ERROR IN RECIPE CLICK:", err);
    appLoadingOverlayMealDetails.querySelector("p").innerHTML =
      "Failed in Loading Data Please Try Again Later...";
  } finally {
    appLoadingOverlayMealDetails.classList.add("loading");
    mealDetailsPage.style.display = "block";
  }
});

listView.addEventListener("click", async (e) => {
  appLoadingOverlayMealDetails.classList.remove("loading");
  homeSection.style.display = "none";
  headingName.innerHTML = "Recipe Details";
  mealDetailsPage.style.display = "block";
  try {
    const card = e.target.closest("[data-meal-id]");
    if (!card) return;
    const mealID = card.dataset.mealId;
    //  بيانات الوجبة
    meal = await fetchMealById(mealID);
    //  تنسيق بيانات الوجبة لجلب تفاصيلها
    const mealDetails = mapMealToPostBody(meal);
    //  تحليل القيم الغذائية
    mealNutraints = await analyzeRecipe(mealDetails);
    //  تخزين كل حاجة في Object واحد

    getMealDetails(meal, mealNutraints);

    mealFullDetails = {
      name: meal.name,
      brand: meal.category,
      image: meal.thumbnail,
      id: meal.id,
      nutrients: {
        protein: mealNutraints.data.perServing.protein,
        carbs: mealNutraints.data.perServing.carbs,
        fat: mealNutraints.data.perServing.fat,
        calories: mealNutraints.data.perServing.calories,
      },
      from: "Recipe",
      addTime: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      addDate: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
    };

  } catch (err) {
    console.error("ERROR IN RECIPE CLICK:", err);
    appLoadingOverlayMealDetails.querySelector("p").innerHTML =
      "Failed in Loading Data Please Try Again Later...";
  } finally {
    appLoadingOverlayMealDetails.classList.add("loading");
    mealDetailsPage.style.display = "block";
  }
});

// البحث فى صفحة المنتجات الخارجية بالتصنف
let products;
async function searchByBrandName(term) {
  products = await fetchMealsProductName(term);

  const searchProductsList = products.filter((product) => {
    return (
      product.brand?.toLowerCase().includes(term.toLowerCase()) ||
      product.name?.toLowerCase().includes(term.toLowerCase())
    );
  });

  console.log(searchProductsList);
  getAllMealsScannerProducts(searchProductsList);
}

searchProductBtn.addEventListener("click", () => {
  let value = productSearchInput.value;
  if (value != null) {
    searchByBrandName(value);
  } else {
    return;
  }
});

// البحث فى صفحة المنتجات الخارجية بالباركود
let product;
async function searchByBarcode(value) {
  product = await fetchMealsBarcode(value);
  getMealByBarcode(product);
}

lookupBarcodeBtn.addEventListener("click", () => {
  let value = barcodeInput.value;
  if (value != null) {
    searchByBarcode(value.trim());
  } else {
    return;
  }
});

//  كود الفلترة للوجبات طبقا للتصنيف من الصفحة التانية
let mealsCategory;
[...productCategories].forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const category = e.target.innerText.trim();

    mealsCategory = await fetchSacnnerProductByCategory(category);
    console.log(mealsCategory, "الوجبات طبقا للتصنيف");

    productsCount.innerHTML = `Found ${mealsCategory.length} products in ${category}`;

    getAllMealsScannerProducts(mealsCategory);
  });
});

//  كود الفلترة للوجبات طبقا nutritionGrade من الصفحة التانية
[...filterScannerByLetter].forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const grade = e.target.innerText.trim().toLowerCase();

    const allItems = [
      ...(Array.isArray(mealsCategory) ? mealsCategory : []),
      ...(Array.isArray(products) ? products : [products]),
      product ? product : null,
    ].filter((item) => item);

    console.log(allItems, "allItems");

    const mealsByGrade =
      grade === "all"
        ? allItems
        : allItems.filter((meal) => meal.nutritionGrade === grade);

    console.log(mealsByGrade, "mealsByGrade");

    productsCount.innerHTML = `Found ${mealsByGrade.length} products in ${grade}`;
    getAllMealsScannerProducts(mealsByGrade);
  });
});

productsGrid.addEventListener("click", async (e) => {
  appLoadingOverlayMealDetails.classList.remove("loading");

  try {
    const card = e.target.closest("[data-barcode]");

    if (!card) return;
    const mealID = card.dataset.barcode;
    //  بيانات الوجبة
    const mealFromScanner = await fetchMealsBarcode(mealID);

    mealFullDetailsFromScanner = {
      name: mealFromScanner.name,
      image: mealFromScanner.image,
      brand: mealFromScanner.brand,
      id: mealFromScanner.barcode,
      nutrients: {
        calories: mealFromScanner.nutrients.calories,
        protein: mealFromScanner.nutrients.protein,
        carbs: mealFromScanner.nutrients.carbs,
        fat: mealFromScanner.nutrients.fat,
      },
      from: "Product",
      addTime: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      ServingsValue: 1,
      addDate: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      }),
    };

    console.log(mealFromScanner, "تفاصيل Scanner");
    console.log(mealFullDetailsFromScanner, "بعد التوحيد");

    LogicModel_2.modelProductScanner(await mealFromScanner);
  } catch {
    productDetailModal.innerHTML =
      "Failed in Loading Data Please Try Again Later...";
  } finally {
    appLoadingOverlayMealDetails.classList.add("loading");
    productDetailModal.style.display = "flex";
  }
});

closeProductModal.forEach((el) => {
  el.addEventListener("click", () => {
    productDetailModal.style.display = "none";
  });
});


// لعمل نفس فكرة ال routing url history
// const tabs = document.querySelectorAll(".tab");
// const buttons = document.querySelectorAll("a[data-route]");

// function showTab(route) {
//   tabs.forEach(tab => {
//     tab.classList.toggle("active", tab.id === route);
//   });
// }

// function navigate(route) {
//   history.pushState({ route }, "", `/${route}`);
//   showTab(route);
// }

// // click on tabs
// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const route = btn.dataset.route;
//     navigate(route);
//   });
// });

// // handle refresh + back/forward
// window.addEventListener("popstate", (e) => {
//   const route = e.state?.route || location.pathname.replace("/", "") || "home-section";
//   showTab(route);
// });

// // initial load
// const initialRoute = location.pathname.replace("/", "") || "home-section";
// showTab(initialRoute);
