import { createLoader, createNoData } from "../main.js";

let mealsDetails = [];
export let productSearchInput = document.getElementById("product-search-input");
export let barcodeInput = document.getElementById("barcode-input");
export let productsGrid = document.getElementById("products-grid");
let filterScannerByLetter = document.getElementById("filterScannerByLetter");
let productCategories = document.getElementById("product-categories");
let products = [];

function getRandomCategoryColor() {
  const colors = [
    {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      hover: "hover:bg-emerald-200",
    },
    {
      bg: "bg-blue-100",
      text: "text-blue-700",
      hover: "hover:bg-blue-200",
    },
    {
      bg: "bg-purple-100",
      text: "text-purple-700",
      hover: "hover:bg-purple-200",
    },
    {
      bg: "bg-orange-100",
      text: "text-orange-700",
      hover: "hover:bg-orange-200",
    },
  ];

  return colors[Math.floor(Math.random() * colors.length)];
}

// جلب و عرض الاصناف الخاصة بالصفحة الثانية
const categoryLoader = createLoader(productCategories);
const categorynoData = createNoData(productCategories);

export async function fetchScannerProductsCategories() {
  categoryLoader.show();
  categorynoData.hide();
  try {
    const response = await fetch(
      "https://nutriplan-api.vercel.app/api/products/categories",
    );
    const data = await response.json();
    if (!data || data.length === 0) {
      categorynoData.show();
      return;
    }

    productCategories.innerHTML = data.results
      .map((meal) => {
        const color = getRandomCategoryColor();
        return `
              <button
                class="product-category-btn px-4 py-2 ${color.bg} ${color.text} ${color.hover} rounded-lg text-sm font-medium whitespace-nowrap  transition-all"
              >
                ${meal.name}
              </button>
      `;
      })
      .join("");

    return data?.results || [];
  } catch (err) {
    console.error(err);
    categorynoData.show();
  } finally {
    categoryLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للاسم
const ProductNameLoader = createLoader(productsGrid);
const ProductNamenoData = createNoData(productsGrid);

export async function fetchMealsProductName(productName = "") {
  ProductNameLoader.show();
  ProductNamenoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/products/search?q=${productName}&page=1&limit=24`,
    );

    const data = await res.json();
    console.log(data, "بيانات طبقالاسم المنتج من الصفحة التانية ");

    if (!data || data.length === 0) {
      ProductNamenoData.show();
      return;
    }

    products = Array.isArray(data.results) ? data.results : [];

    return products;
  } catch (err) {
    console.error(err);
    ProductNamenoData.show();
  } finally {
    ProductNameLoader.hide();
  }
}

// جلب البيانات الخاصة بالوجبات طبقا للصنف
export async function fetchSacnnerProductByCategory(category) {
  ProductNameLoader.show();
  ProductNamenoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/products/category/${category}`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      ProductNamenoData.show();
      return;
    }
    //
    console.log(data.results, "fetchSacnnerProductByCategory");
    //

    mealsDetails = data.results;
    return mealsDetails;
  } catch (err) {
    console.error(err);
    ProductNamenoData.show();
  } finally {
    ProductNameLoader.hide();
  }
}

// جلب وعرض كل الوجبات فى شكل شبكة
export async function getAllMealsScannerProducts(products) {
  productsGrid.innerHTML = "";
  if (!products || products.length === 0) {
    scannerNoData.style.display = "flex";
    return;
  }

  productsGrid.innerHTML = products
    .map((product) => {
      return `
              <div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${product.barcode}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div  style="background-color: ${product.nutritionGrade == "a" ? "green" : product.nutritionGrade === "b" ? "#7CCF00" : product.nutritionGrade === "c" ? "#F0B100" : product.nutritionGrade === "d" ? "#FF6900" : product.nutritionGrade === "e" ? "#FA2C37" : "#FA2C37"};" 
                    class="absolute top-2 left-2  text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score  ${product.nutritionGrade === "unknown" ? "A" : product.nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  <div style="background-color: ${product.novaGroup == 1 ? "green" : product.novaGroup === 2 ? "#7CCF00" : product.novaGroup === 3 ? "#F0B100" : product.novaGroup === 4 ? "#FA2C37" : "#FA2C37"};" 
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA  ${product.novaGroup === undefined ? "1" : product.novaGroup} "
                  >
                     ${product.novaGroup === undefined ? "2" : product.novaGroup} 
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                    ${product.brand}
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                    ${product.name}
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i>250g</span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${product.nutrients.calories} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700">${product.nutrients.protein}g</p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${product.nutrients.carbs}g</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${product.nutrients.fat}g</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${product.nutrients.sugar}g</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>
                `;
    })
    .join("");
}

// جلب البيانات الخاصة بالوجبات بالباركود
export async function fetchMealsBarcode(barcode = "") {
  ProductNameLoader.show();
  ProductNamenoData.hide();
  try {
    const res = await fetch(
      `https://nutriplan-api.vercel.app/api/products/barcode/${barcode}`,
    );

    const data = await res.json();
    if (!data || data.length === 0) {
      ProductNamenoData.show();
      return;
    }

    return data.result;
  } catch (err) {
    console.error(err);
    ProductNamenoData.show();
  } finally {
    ProductNameLoader.hide();
  }
}

// جلب وعرض كل الوجبات فى شكل شبكة
export async function getMealByBarcode(product) {
  productsGrid.innerHTML = "";
  if (!product) {
    return;
  }

  productsGrid.innerHTML = `
              <div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${product.barcode}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${product.nutritionGrade === "unknown" ? "A" : product.nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  <div
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA  ${product.novaGroup === undefined ? "1" : product.novaGroup} "
                  >
                   ${product.novaGroup === undefined ? "1" : product.novaGroup} 
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                    ${product.brand}
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                    ${product.name}
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i>250g</span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${product.nutrients.calories} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700">${product.nutrients.protein}g</p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${product.nutrients.carbs}g</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${product.nutrients.fat}g</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${product.nutrients.sugar}g</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>
                `;
}
