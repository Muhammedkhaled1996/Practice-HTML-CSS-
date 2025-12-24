// Scroll buttom
var scrollBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = 1;
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.opacity = 0;
    scrollBtn.style.visibility = "hidden";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Stlye active link in hover and onscroll
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach(function (navlink) {
  navlink.addEventListener("mouseenter", function (e) {
    navLinks.forEach(function (navlink) {
      navlink.classList.remove("active");
    });
    navlink.classList.add("active");
  });
});

// dark and light mode
var themeToggle = document.querySelector(".theme-toggle-circle");
var html = document.documentElement;

var savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

function getTheme() {
  if (
    html.classList.contains("dark") &&
    localStorage.getItem("theme") == "dark"
  ) {
    html.classList.replace("light", "dark");
  } else {
    html.classList.replace("dark", "light");
  }
}

getTheme();

// show and hide side setting menu
var settingsToggle = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettings = document.getElementById("close-settings");

settingsToggle.addEventListener("click", function (e) {
  settingsSidebar.style.right = "320px";
  settingsToggle.style.right = "319px";
});

closeSettings.addEventListener("click", function (e) {
  settingsSidebar.style.right = "0";
  settingsToggle.style.right = "0";
});

// Nav and Tabs Section
var navAndTabsSec = document.getElementById("portfolio-filters").children;
var portfolioGrid = Array.from(
  document.getElementById("portfolio-grid").children
);

for (let i = 0; i < navAndTabsSec.length; i++) {
  navAndTabsSec[i].addEventListener("click", function (e) {
    var catergoryValue = e.currentTarget.dataset.filter;
    console.log(catergoryValue);

    if (e.currentTarget.dataset.filter === "all") {
      for (let k = 0; k < portfolioGrid.length; k++) {
        portfolioGrid[k].style.display = "block";
      }
    } else {
      for (let k = 0; k < portfolioGrid.length; k++) {
        portfolioGrid[k].style.display = "none";
      }
      portfolioGrid
        .filter((card) => card.dataset.category === catergoryValue)
        .forEach((card) => {
          card.style.display = "block";
        });
    }

    for (let j = 0; j < navAndTabsSec.length; j++) {
      navAndTabsSec[j].className =
        "portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700";
    }
    navAndTabsSec[i].className =
      "portfolio-filter px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 active bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50";
  });
}

// Form validation
var submitBtn = document.querySelector("form button");
var fullNameInput = document.getElementById("full-name");
var contactEmailInput = document.getElementById("email");
var projectDetailsInput = document.getElementById("project-details");
var phoneInput = document.getElementById("phone");
var projectTypeInput = document.querySelector("[data-name='project-type']");
var projectTypeInputInnerText = document.querySelector(
  "[data-name='project-type'] span"
);

var projectTypeLabels = document.querySelector(".ProjectMenu");
var budgetValueInput = document.querySelector("[data-name='budget']");
var budgetValueInputInnerText = document.querySelector(
  "[data-name='budget'] span"
);

var budgetValueLables = document.querySelector(".budgetMenu");
var nameErrorParag = document.getElementById("nameError");
var emailErrorParag = document.getElementById("emailError");
var emailNotValid = document.getElementById("emailNotValid");
var detailsErrorParag = document.getElementById("detailsError");
var detailsErrorLenght = document.getElementById("detailsErrorLenght");

var projectsLables = projectTypeLabels.children;
var budgetLables = budgetValueLables.children;

var btnFontFamilyalexandria = document.querySelector(
  "[data-font='alexandria']"
);
var btnFontFamilytajawal = document.querySelector("[data-font='tajawal']");
var btnFontFamilycairo = document.querySelector("[data-font='cairo']");

console.log(btnFontFamilyalexandria);

// اختيار  المشروع المطلوب
for (let i = 0; i < projectsLables.length; i++) {
  projectsLables[i].addEventListener("click", function (e) {
    projectTypeInputInnerText.innerText = e.target.innerText;
  });
}

// اختيار التكلفة المتاحة
for (let i = 0; i < budgetLables.length; i++) {
  budgetLables[i].addEventListener("click", function (e) {
    budgetValueInputInnerText.innerText = e.target.innerText;
  });
}

// اظهار القائمة الخاصة بنوع المشروع
projectTypeInput.addEventListener("click", function () {
  projectTypeLabels.classList.toggle("hidden");
  budgetValueLables.classList.add("hidden");
});

// عشان لما ادوس فى اى مكان يخفى القوائم
document.addEventListener("click", function (e) {
  if (!budgetValueInput.contains(e.target)) {
    budgetValueLables.classList.add("hidden");
  }

  if (!projectTypeInput.contains(e.target)) {
    projectTypeLabels.classList.add("hidden");
  }
});

// اظهار القائمة الخاصة بالتكلفة المتاحة
budgetValueInput.addEventListener("click", function () {
  budgetValueLables.classList.toggle("hidden");
  projectTypeLabels.classList.add("hidden");
});

console.log(detailsErrorParag.innerText.split(" ").length);

// زرار عمل ارسال للبيانات من الفورم والتحقق من صحة الادخال
submitBtn.addEventListener("click", function () {
  if (fullNameInput.value === "") {
    nameErrorParag.style.display = "block";
  } else {
    nameErrorParag.style.display = "none";
  }
  if (contactEmailInput.value === "") {
    emailErrorParag.style.display = "block";
  } else {
    emailErrorParag.style.display = "none";
  }
  if (projectDetailsInput.value === "") {
    detailsErrorParag.style.display = "block";
    return;
  } else {
    detailsErrorParag.style.display = "none";
  }
  if (projectDetailsInput.value.split("").length < 100) {
    detailsErrorLenght.style.display = "block";
    return;
  } else {
    detailsErrorLenght.style.display = "none";
  }
  if (!checkEmail()) {
    return;
  }
  successAddAlert();
  clearForm();
});

// رسالة الخطا فى عدم تسجيل الاسم
fullNameInput.addEventListener("input", function () {
  if (fullNameInput.value === "") {
    nameErrorParag.style.display = "block";
  } else {
    nameErrorParag.style.display = "none";
  }
});

// رسالة الخطا فى عدم تسجيل او عدد الحروف فى تفاصيل المشروع
projectDetailsInput.addEventListener("input", function (e) {
  if (
    projectDetailsInput.value === "" &&
    projectDetailsInput.value.split("").length === 0
  ) {
    detailsErrorParag.style.display = "block";
    detailsErrorLenght.style.display = "none";
    return;
  } else {
    detailsErrorParag.style.display = "none";
    detailsErrorLenght.style.display = "none";
  }
  if (projectDetailsInput.value.split("").length < 100) {
    detailsErrorLenght.style.display = "block";
  } else {
    detailsErrorLenght.style.display = "none";
  }
});

// التحقق من رقم الايميل
function validateEmail(email) {
  var regex = /^[\w.%+-]+@[\w.-]+\.[A-z]{2,}$/;
  return regex.test(email);
}

function checkEmail() {
  var email = contactEmailInput.value.trim();
  if (!validateEmail(email) && contactEmailInput.value !== "") {
    emailNotValid.style.display = "block";
    return false;
  } else {
    emailNotValid.style.display = "none";
    return true;
  }
}

// رسالة الخطا فى تسجيل الايميل
contactEmailInput.addEventListener("input", function () {
  if (contactEmailInput.value === "") {
    emailErrorParag.style.display = "block";
  } else {
    emailErrorParag.style.display = "none";
  }
  checkEmail();
});

// التحقق من رقم الهاتف
function validateEgyptPhone(phone) {
  const regex = /^(\+2|002)?01[0125]\d{8}$/;
  return regex.test(phone);
}

function checkPhone() {
  let phone = phoneInput.value.trim();
  if (!validateEgyptPhone(phone)) {
    phoneInput.classList.add("is-invalid");
    return false;
  } else {
    phoneInput.classList.remove("is-invalid");
    return true;
  }
}

// رسالة تاكيد نجاح الادخال
function successAddAlert() {
  Swal.fire({
    icon: "success",
    title: "ِAdded!",
    text: "Contact has been Added successfully.",
    showConfirmButton: false,
    timer: 1500,
  });
}

// Clear Form
function clearForm() {
  fullNameInput.value = null;
  contactEmailInput.value = null;
  projectDetailsInput.value = null;
  phoneInput.value = null;
  projectTypeInputInnerText.innerText = "اختر نوع المشروع";
  budgetValueInputInnerText.innerText = "اختر الميزانية";
}

// تحويل شكل الكلام بالموقع
var fontFamily;
var docElem;
setFontFamily();
function setFontFamily() {
  if (localStorage.getItem("fontFamily") === "alexandria") {
    setFontAlex();
  } else if (localStorage.getItem("fontFamily") === "cairo") {
    setFontCairo();
  } else {
    setFontTajawal();
  }
}

function setFontAlex() {
  docElem = Array.from(document.querySelectorAll("*"));
  for (let i = 0; i < docElem.length; i++) {
    if (
      localStorage.getItem("fontFamily") === "alexandria" &&
      (docElem[i].classList.contains("font-tajawal") ||
        docElem[i].classList.contains("font-cairo"))
    ) {
      docElem[i].classList.remove("font-tajawal");
      docElem[i].classList.remove("font-cairo");
      docElem[i].classList.add("font-alexandria");
    }
  }
  btnFontFamilyalexandria.className =
    "font-option w-full p-4 rounded-xl border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden active border-primary bg-slate-50 dark:bg-slate-800";
  btnFontFamilycairo.className =
    "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
  btnFontFamilytajawal.className =
    "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
}
function setFontCairo() {
  docElem = Array.from(document.querySelectorAll("*"));
  for (let i = 0; i < docElem.length; i++) {
    if (
      localStorage.getItem("fontFamily") === "cairo" &&
      (docElem[i].classList.contains("font-tajawal") ||
        docElem[i].classList.contains("font-alexandria"))
    ) {
      docElem[i].classList.remove("font-tajawal");
      docElem[i].classList.add("font-cairo");
      docElem[i].classList.remove("font-alexandria");
    }
    btnFontFamilycairo.className =
      "font-option w-full p-4 rounded-xl border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden active border-primary bg-slate-50 dark:bg-slate-800";
    btnFontFamilyalexandria.className =
      "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
    btnFontFamilytajawal.className =
      "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
  }
}
function setFontTajawal() {
  docElem = Array.from(document.querySelectorAll("*"));
  for (let i = 0; i < docElem.length; i++) {
    if (
      localStorage.getItem("fontFamily") === "tajawal" &&
      (docElem[i].classList.contains("font-alexandria") ||
        docElem[i].classList.contains("font-cairo"))
    ) {
      docElem[i].classList.add("font-tajawal");
      docElem[i].classList.remove("font-cairo");
      docElem[i].classList.remove("font-alexandria");
    }
  }
  btnFontFamilytajawal.className =
    "font-option w-full p-4 rounded-xl border hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden active border-primary bg-slate-50 dark:bg-slate-800";
  btnFontFamilyalexandria.className =
    "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
  btnFontFamilycairo.className =
    "font-option w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-right group relative overflow-hidden";
}

btnFontFamilyalexandria.addEventListener("click", function () {
  // console.log(docElem);
  fontFamily = localStorage.setItem("fontFamily", "alexandria");
  setFontAlex();
});
btnFontFamilycairo.addEventListener("click", function () {
  // console.log(docElem);
  fontFamily = localStorage.setItem("fontFamily", "cairo");
  setFontCairo();
});
btnFontFamilytajawal.addEventListener("click", function () {
  // console.log(docElem);
  fontFamily = localStorage.setItem("fontFamily", "tajawal");
  setFontTajawal();
});

// تعديل الوان الموقع
var gridColorTheme = document.querySelectorAll("#theme-colors-grid button");

for (let i = 0; i < gridColorTheme.length; i++) {
  gridColorTheme[i].addEventListener("click", function (e) {
    var themeName = e.currentTarget.title;

    if (themeName === "Purple Blue") {
      setColors("#6366f1", "#8b5cf6", "#a855f7", themeName);
    } else if (themeName === "Pink Orange") {
      setColors("#ec4899", "#f97316", "#fb923c", themeName);
    } else if (themeName === "Green Emerald") {
      setColors("#10b981", "#059669", "#34d399", themeName);
    } else if (themeName === "Blue Cyan") {
      setColors("#3b82f6", "#06b6d4", "#22d3ee", themeName);
    } else if (themeName === "Red Rose") {
      setColors("#ef4444", "#f43f5e", "#fb7185", themeName);
    } else if (themeName === "Amber Orange") {
      setColors("#f59e0b", "#ea580c", "#fbbf24", themeName);
    }
  });
}

function setColors(primaryColor, secondaryColor, accentColor, themeName) {
  document.documentElement.style.setProperty("--color-primary", primaryColor);
  document.documentElement.style.setProperty(
    "--color-secondary",
    secondaryColor
  );
  document.documentElement.style.setProperty("--color-accent", accentColor);

  // حفظ الثيم
  localStorage.setItem("Colors", themeName);
}
var savedTheme = localStorage.getItem("Colors");
getColor();
function getColor() {
  if (savedTheme) {
    if (savedTheme === "Purple Blue") {
      setColors("#6366f1", "#8b5cf6", "#a855f7", savedTheme);
    } else if (savedTheme === "Pink Orange") {
      setColors("#ec4899", "#f97316", "#fb923c", savedTheme);
    } else if (savedTheme === "Green Emerald") {
      setColors("#10b981", "#059669", "#34d399", savedTheme);
    } else if (savedTheme === "Blue Cyan") {
      setColors("#3b82f6", "#06b6d4", "#22d3ee", savedTheme);
    } else if (savedTheme === "Red Rose") {
      setColors("#ef4444", "#f43f5e", "#fb7185", savedTheme);
    } else if (savedTheme === "Amber Orange") {
      setColors("#f59e0b", "#ea580c", "#fbbf24", savedTheme);
    }
  }
}

// اعادة ضبط كل الخصائص
var resetSettings = document.getElementById("reset-settings");
resetSettings.addEventListener("click", function () {
  localStorage.setItem("Colors", "Purple Blue");
  localStorage.setItem("fontFamily", "tajawal");
  getColor();
  setFontFamily();
});


// الكارسول 
var carousel = document.getElementById("testimonials-carousel");
var cards = document.querySelectorAll(".testimonial-card");
var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");
var indicators = document.querySelectorAll(".carousel-indicator");

var currentIndex = 0;
var totalCards = cards.length;
var cardWidth = cards[0].offsetWidth;

function moveCarousel() {
  carousel.style.transform = `translateX(${currentIndex * cardWidth}px)`;
  updateIndicators();
}

// تحديث الدواير 
function updateIndicators() {
  indicators.forEach(function (dot) {
    dot.classList.remove("bg-accent");
    dot.setAttribute("aria-selected", "false");
  });

  var activeIndex = currentIndex % indicators.length;
  indicators[activeIndex].classList.add("bg-accent");
  indicators[activeIndex].setAttribute("aria-selected", "true");
}

//  زرار اليمين
nextBtn.addEventListener("click", function () {
  currentIndex++;

  if (currentIndex >= totalCards) {
    currentIndex = 0;
  }

  moveCarousel();
});

//  زرار الشمال  
prevBtn.addEventListener("click", function () {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = totalCards - 1;
  }

  moveCarousel();
});

//  الدواير اللي تحت 
indicators.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    currentIndex = index;
    moveCarousel();
  });
});

//    حجم الشاشة 
window.addEventListener("resize", function () {
  cardWidth = cards[0].offsetWidth;
  moveCarousel();
});