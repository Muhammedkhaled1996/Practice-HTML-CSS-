var allRecapies = [
  {
    name: "Chicken Alfredo Pasta",
    desc: "Creamy Italian pasta coated with rich Alfredo sauce and grilled chicken",
    rate: 4.8,
    reviews: 430,
    image: "https://www.justspices.co.uk/media/recipe/chicken-alfredo.jpg",
    prepTime: "15",
    cookTime: "25",
    serves: 3,
    deficaulty: "Medium",
    city: "Italy",
    ingredients: [
      "300g fettuccine pasta",
      "2 chicken breasts",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 cloves garlic minced",
      "2 tbsp butter",
      "Salt and pepper",
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "Season chicken and grill it until fully cooked, then slice.",
      "Melt butter in a pan, sauté garlic, then add heavy cream.",
      "Add parmesan and mix until sauce thickens.",
      "Combine pasta with sauce and top with chicken.",
    ],
    calories: "550 Kcal",
    protein: "35g",
    carbs: "45g",
    fat: "30g",
    fiber: "3g",
    sodium: "800mg",
    chifTips: [
      "Use freshly grated parmesan for best flavor",
      "Don't overcook the pasta",
      "Add a splash of pasta water to loosen the sauce",
    ],
  },

  {
    name: "Sushi Platter",
    desc: "Assorted Japanese sushi rolls filled with fresh seafood",
    rate: 4.9,
    reviews: 380,
    image:
      "https://s3-eu-west-1.amazonaws.com/images-olympus/products/8165690_details.jpg",
    prepTime: "30",
    cookTime: "0",
    serves: 2,
    deficaulty: "Hard",
    city: "Japan",
    ingredients: [
      "2 cups sushi rice",
      "Nori sheets",
      "Fresh salmon",
      "Fresh tuna",
      "Avocado slices",
      "Cucumber sticks",
      "Soy sauce & wasabi",
    ],
    instructions: [
      "Cook sushi rice and season with vinegar mixture.",
      "Place rice on nori and add fillings.",
      "Roll tightly using bamboo mat.",
      "Slice and serve with soy sauce and wasabi.",
    ],
    calories: "420 Kcal",
    protein: "32g",
    carbs: "55g",
    fat: "10g",
    fiber: "4g",
    sodium: "900mg",
    chifTips: [
      "Wet your hands to prevent rice from sticking",
      "Use very sharp knife for clean cuts",
      "Keep the fish chilled until serving",
    ],
  },

  {
    name: "Butter Chicken",
    desc: "Rich and creamy Indian curry cooked with spiced tomato sauce",
    rate: 4.7,
    reviews: 520,
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-4.jpg",
    prepTime: "20",
    cookTime: "35",
    serves: 4,
    deficaulty: "Medium",
    city: "India",
    ingredients: [
      "500g chicken breast",
      "1 cup tomato puree",
      "1 cup cream",
      "2 tbsp butter",
      "Garlic & ginger paste",
      "Garam masala",
      "Turmeric",
    ],
    instructions: [
      "Marinate chicken in spices and yogurt.",
      "Cook chicken until slightly charred.",
      "Prepare sauce with butter, garlic, tomato puree, and cream.",
      "Simmer chicken in sauce for 15 minutes.",
    ],
    calories: "620 Kcal",
    protein: "40g",
    carbs: "20g",
    fat: "45g",
    fiber: "2g",
    sodium: "700mg",
    chifTips: [
      "Use yogurt for tender chicken",
      "Simmer slowly for deeper flavor",
      "Serve with naan or basmati rice",
    ],
  },

  {
    name: "French Onion Soup",
    desc: "Classic French soup made from caramelized onions and beef broth",
    rate: 4.5,
    reviews: 320,
    image:
      "https://www.thespruceeats.com/thmb/BYc5SJFHrCWFCRpTO5Z2IvMtrZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-french-onion-soup-3062131-hero-01-2a93bd3c60084db5a8a8e1039c0e0a2f.jpg",
    prepTime: "10",
    cookTime: "40",
    serves: 4,
    deficaulty: "Medium",
    city: "France",
    ingredients: [
      "4 large onions sliced",
      "4 cups beef broth",
      "2 tbsp butter",
      "Baguette slices",
      "Gruyere cheese",
    ],
    instructions: [
      "Caramelize onions in butter.",
      "Add broth and simmer for 20 minutes.",
      "Pour into bowls and top with baguette and cheese.",
      "Broil until cheese melts.",
    ],
    calories: "300 Kcal",
    protein: "12g",
    carbs: "35g",
    fat: "12g",
    fiber: "4g",
    sodium: "500mg",
    chifTips: [
      "Caramelize onions slowly for rich flavor",
      "Use Gruyere for authentic taste",
      "Serve hot immediately",
    ],
  },

  {
    name: "Greek Salad",
    desc: "Fresh Mediterranean salad with olives and feta cheese",
    rate: 4.3,
    reviews: 180,
    image:
      "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_salad_16407_16x9.jpg",
    prepTime: "10",
    cookTime: "0",
    serves: 2,
    deficaulty: "Easy",
    city: "Greece",
    ingredients: [
      "Cucumber slices",
      "Tomatoes",
      "Red onion",
      "Olives",
      "Feta cheese",
      "Olive oil & oregano",
    ],
    instructions: [
      "Chop vegetables.",
      "Mix everything together.",
      "Top with feta and olive oil dressing.",
    ],
    calories: "200 Kcal",
    protein: "6g",
    carbs: "12g",
    fat: "14g",
    fiber: "3g",
    sodium: "400mg",
    chifTips: [
      "Use high-quality olive oil",
      "Don’t overmix to keep feta intact",
    ],
  },

  {
    name: "Shawarma Wrap",
    desc: "Middle Eastern wrap packed with marinated chicken and garlic sauce",
    rate: 4.8,
    reviews: 600,
    image:
      "https://lifeloveandgoodfood.com/wp-content/uploads/2020/04/Chicken-Shawarma_09_1200x1200.jpg",
    prepTime: "15",
    cookTime: "25",
    serves: 3,
    deficaulty: "Easy",
    city: "Lebanon",
    ingredients: [
      "Chicken thighs",
      "Yogurt",
      "Shawarma spices",
      "Tortilla wraps",
      "Garlic sauce",
      "Lettuce & pickles",
    ],
    instructions: [
      "Marinate chicken in shawarma spices and yogurt.",
      "Grill and slice the chicken.",
      "Assemble wrap with sauce, chicken, and veggies.",
    ],
    calories: "450 Kcal",
    protein: "28g",
    carbs: "40g",
    fat: "20g",
    fiber: "3g",
    sodium: "900mg",
    chifTips: [
      "Use chicken thighs for juicier shawarma",
      "Char edges slightly for authentic flavor",
    ],
  },

  {
    name: "Paella",
    desc: "Traditional Spanish rice dish cooked with seafood and saffron",
    rate: 4.6,
    reviews: 410,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paella-837f12c.jpg?quality=90&resize=440,400",
    prepTime: "20",
    cookTime: "45",
    serves: 5,
    deficaulty: "Hard",
    city: "Spain",
    ingredients: [
      "2 cups paella rice",
      "Shrimp",
      "Mussels",
      "Chicken pieces",
      "Saffron",
      "Bell peppers",
      "Chicken broth",
    ],
    instructions: [
      "Sauté chicken and vegetables.",
      "Add rice and saffron.",
      "Pour broth and cook without stirring.",
      "Add seafood on top and steam until done.",
    ],
    calories: "650 Kcal",
    protein: "45g",
    carbs: "70g",
    fat: "20g",
    fiber: "5g",
    sodium: "850mg",
    chifTips: [
      "Don’t stir the rice after adding broth",
      "Use saffron threads not powder",
    ],
  },

  {
    name: "Falafel Plate",
    desc: "Crispy Middle Eastern falafel served with tahini and salad",
    rate: 4.4,
    reviews: 270,
    image:
      "https://www.whollytasteful.com/wp-content/uploads/2023/03/falafel-platter-featured.jpg",
    prepTime: "15",
    cookTime: "20",
    serves: 3,
    deficaulty: "Medium",
    city: "Egypt",
    ingredients: [
      "Chickpeas",
      "Garlic",
      "Parsley",
      "Cumin",
      "Onion",
      "Flour",
      "Tahini sauce",
    ],
    instructions: [
      "Blend chickpeas and herbs.",
      "Shape into balls.",
      "Fry until golden.",
      "Serve with tahini and salad.",
    ],
    calories: "380 Kcal",
    protein: "14g",
    carbs: "40g",
    fat: "18g",
    fiber: "8g",
    sodium: "500mg",
    chifTips: ["Refrigerate mix before frying", "Serve hot & crispy"],
  },

  {
    name: "Cheeseburger",
    desc: "Juicy American burger topped with melted cheddar",
    rate: 4.7,
    reviews: 720,
    image:
      "https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg",
    prepTime: "10",
    cookTime: "12",
    serves: 2,
    deficaulty: "Easy",
    city: "USA",
    ingredients: [
      "Ground beef patty",
      "Cheddar cheese",
      "Burger buns",
      "Lettuce",
      "Onion",
      "Ketchup & mustard",
    ],
    instructions: [
      "Season beef and grill patties.",
      "Place cheddar on top while hot.",
      "Assemble burger with toppings.",
    ],
    calories: "520 Kcal",
    protein: "30g",
    carbs: "35g",
    fat: "28g",
    fiber: "2g",
    sodium: "950mg",
    chifTips: ["Don’t press the patty while cooking", "Use brioche buns"],
  },

  {
    name: "Margherita Pizza",
    desc: "Classic Italian pizza topped with tomato, mozzarella, and basil",
    rate: 4.9,
    reviews: 880,
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-Margherita_EXPS_FT21_40895_F_0729_1.jpg",
    prepTime: "15",
    cookTime: "15",
    serves: 3,
    deficaulty: "Easy",
    city: "Italy",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Basil leaves",
      "Olive oil",
    ],
    instructions: [
      "Spread sauce on dough.",
      "Add mozzarella slices.",
      "Bake until crust is golden.",
      "Top with fresh basil.",
    ],
    calories: "480 Kcal",
    protein: "20g",
    carbs: "55g",
    fat: "18g",
    fiber: "3g",
    sodium: "750mg",
    chifTips: [
      "Bake on high heat for crispy crust",
      "Use fresh mozzarella not shredded",
    ],
  },
];

var changeRecipeBtn = document.getElementById("changeRecipe");
var imageSection = document.getElementById("imageSec");
var badgeSec = document.getElementById("badgeSec");
var nameSec = document.getElementById("name");
var descSec = document.getElementById("desc");
var warningMsg = document.getElementById("warning");
var IngredientsSec = document.getElementById("IngredientsSec");
var instractionsSec = document.getElementById("instractionsSec");
var calories = document.getElementById("Calories");
var protein = document.getElementById("Protein");
var carbs = document.getElementById("Carbohydrates");
var fat = document.getElementById("Fat");
var fiber = document.getElementById("Fiber");
var sodium = document.getElementById("Sodium");
var chefTips = document.getElementById("chefTips");

function randomRecipe() {
  var randomIndex = Math.floor(Math.random() * allRecapies.length);
  return allRecapies[randomIndex];
}

function innerWeb() {
  var returnedRecipe = randomRecipe();
  imageSection.innerHTML = `
                <img
                  src="${returnedRecipe.image}"
                  class="img-fluid rounded-start h-100 object-fit-cover"
                  alt="${returnedRecipe.name} image"
                />
                <div
                  class="d-flex justify-content-center align-items-center px-3 py-2 bg-light rounded-pill position-absolute ratePosition"
                >
                  <i class="fa-solid fa-star text-warning me-2"></i>
                  <small class="fw-bold me-2">${returnedRecipe.rate}</small>
                  <span class="text-body-tertiary">(${returnedRecipe.reviews} reviews)</span>
                </div>
                <div
                  class="d-flex justify-content-around align-items-center px-2 py-3 bg-light rounded-4 position-absolute lowerPosition"
                >
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <i class="fa-solid fa-clock fs-4 mb-1 mainColorText"></i>
                    <p class="mb-1 text-body-tertiary">Prep Time</p>
                    <small class="fw-bold fs-6">${returnedRecipe.prepTime} min</small>
                  </div>
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <i
                      class="fa-solid fa-fire-burner fs-4 mb-1 sendColorText"
                    ></i>
                    <p class="mb-1 text-body-tertiary">Cook Time</p>
                    <small class="fw-bold fs-6">${returnedRecipe.cookTime} min</small>
                  </div>
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <i class="fa-solid fa-users fs-4 mb-1 text-primary"></i>
                    <p class="mb-1 text-body-tertiary">Servings</p>
                    <small class="fw-bold fs-6">${returnedRecipe.serves}</small>
                  </div>
                </div>
  `;
  badgeSec.innerHTML = `
    <small class="badgeItem1 me-2">${returnedRecipe.deficaulty}</small>
    <small class="badgeItem2">${returnedRecipe.city}</small>
    `;
  nameSec.innerText = returnedRecipe.name;
  descSec.innerText = returnedRecipe.desc;
  if (+returnedRecipe.prepTime + +returnedRecipe.cookTime > 45) {
    warningMsg.style.display = "block";
  } else {
    warningMsg.style.display = "none";
  }

  IngredientsSec.innerHTML = "";
  for (var i = 0; i < returnedRecipe.ingredients.length; i++) {
    IngredientsSec.innerHTML += `
    <li class="d-flex align-items-center mb-3">
       <div class="rounded-circle text-light me-2 numIcon d-flex align-items-center justify-content-center">
       ${i + 1}
        </div>
     <div class="text-body-secondary">
     ${returnedRecipe.ingredients[i]}
     </div>
    </li>
    `;

    instractionsSec.innerHTML = "";
    for (var a = 0; a < returnedRecipe.instructions.length; a++) {
      instractionsSec.innerHTML += `
        <li class="d-flex align-items-center mb-3">
          <div
           class="rounded-2 d-flex align-items-center justify-content-center text-light me-2 numIcon2"
          >
          ${[a + 1]}
           </div>
          <div class="text-body-secondary">
        ${returnedRecipe.instructions[a]}
        </div>
         </li>
        `;
    }

    calories.innerText = returnedRecipe.calories;
    protein.innerText = returnedRecipe.protein;
    carbs.innerText = returnedRecipe.carbs;
    fat.innerText = returnedRecipe.fat;
    fiber.innerText = returnedRecipe.fiber;
    sodium.innerText = returnedRecipe.sodium;

    chefTips.innerHTML = "";
    for (var b = 0; b < returnedRecipe.chifTips.length; b++) {
      chefTips.innerHTML += `
      <div
      class="d-flex align-items-center bg-warning bg-opacity-10 rounded-3 p-3 border-start border-4 border-warning mb-3">
      <i class="rounded-circle smallicon p-2 fa-solid fa-check text-light bg-warning me-3 d-flex align-items-center justify-content-center"></i>
        <p class="m-0">${returnedRecipe.chifTips[b]}</p>
      </div>
      `;
    }
  }
}

innerWeb();

changeRecipeBtn.onclick = function () {
  innerWeb();
};
