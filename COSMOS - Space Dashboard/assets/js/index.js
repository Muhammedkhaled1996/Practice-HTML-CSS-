// WRITE YOUR JS CODE HERE
var sidebarToggle = document.getElementById("sidebar-toggle");
var sidebar = document.getElementById("sidebar");
var sidebarOverlay = document.querySelector(".sidebar-overlay");
var sidebarBtn = sidebar.querySelectorAll("nav")[0].children;
var todayInSpaceSec = document.getElementById("today-in-space");
var launchesSec = document.getElementById("launches");
var planetsSec = document.getElementById("planets");

var apiKey = "oQMN5BfolkL3b1hp0emkM20UjGuehTJKEdZl4EVB";

// زرار اظهار القائمة الجانبية
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.add("sidebar-open");
  sidebarOverlay.classList.remove("hide");
});

// لاخفاء القائمة الجانبية عند الضغط على اى مكان فى الشاشة
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("sidebar-overlay")) {
    sidebar.classList.remove("sidebar-open");
    sidebarOverlay.classList.add("hide");
  }
});

// لعمل تنسيقات للزار الذى تم اختيارة فى القائمة الجانبية
for (let i = 0; i < sidebarBtn.length; i++) {
  sidebarBtn[i].addEventListener("click", function () {
    if (this.classList.contains("nav-link")) {
      for (let j = 0; j < sidebarBtn.length; j++) {
        sidebarBtn[j].classList.remove("text-blue-400", "bg-blue-500/10");
      }
      this.classList.add("text-blue-400", "bg-blue-500/10");
      this.classList.remove("text-slate-300", "hover:bg-slate-800");
    }
  });
}

// لاظهار السكاشكن طبقا للزار الذى تم الضغط علية
for (let i = 0; i < sidebarBtn.length; i++) {
  sidebarBtn[i].addEventListener("click", function () {
    if (this.dataset.section === "today-in-space") {
      todayInSpaceSec.classList.remove("hidden");
      launchesSec.classList.add("hidden");
      planetsSec.classList.add("hidden");
    } else if (this.dataset.section === "launches") {
      todayInSpaceSec.classList.add("hidden");
      launchesSec.classList.remove("hidden");
      planetsSec.classList.add("hidden");
    } else if (this.dataset.section === "planets") {
      todayInSpaceSec.classList.add("hidden");
      launchesSec.classList.add("hidden");
      planetsSec.classList.remove("hidden");
    }
  });
}

// عناصر الصفحة الاولى
var apodDate = document.getElementById("apod-date");
var apodImage = document.getElementById("apod-image");
var apodTitle = document.getElementById("apod-title");
var apodDateDetail = document.getElementById("apod-date-detail");
var apodExplanation = document.getElementById("apod-explanation");
var apodCopyright = document.getElementById("apod-copyright");
var apodDateInfo = document.getElementById("apod-date-info");
var apodDateInput = document.getElementById("apod-date-input");
var dateText = document.querySelector(".date-input-wrapper span");

// تغيير التنسيق اللى جايلى من قاعدة البيانات
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// كود اظهار التحميل
function showLoader() {
  apodDate.innerHTML = `Loading...`;
  apodImage.classList.add("hide");
  loaderImage.style.display = "flex";
  apodTitle.innerHTML = `Loading...`;
  apodDateDetail.innerHTML = `Loading...`;
  apodExplanation.innerHTML = `Loading description...`;
  apodCopyright.innerHTML = ``;
  apodDateInfo.innerHTML = `Loading...`;
}

// كود اخفاء التحميل
function hideLoader() {
  loaderImage.style.display = "none";
  apodImage.classList.remove("hide");
}

// تعديل التاريخ المكتوب عند الادخال
apodDateInput.addEventListener("change", function () {
  if (!this.value) return;
  dateText.textContent = formatDate(this.value);
});

// ضبط قيمة التاريخ الحالى فى input عند تحميل الصفحة
dateText.textContent = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// جلب البيانات الخاصة باليوم الحالى
var dataOfSpace;
async function dataPicOfDay() {
  showLoader();
  try {
    var date = apodDateInput.value;

    var url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    if (date !== "") {
      url += `&date=${date}`;
    }

    var res = await fetch(url);
    dataOfSpace = await res.json();
    apodDate.innerHTML = `Astronomy Picture of the Day - ${formatDate(
      dataOfSpace.date
    )}`;
    apodImage.src = ``;
    apodImage.src = `${dataOfSpace.url}`;
    apodTitle.innerHTML = `${dataOfSpace.title}`;
    apodDateDetail.innerHTML = `<i class="far fa-calendar mr-2"></i>${formatDate(
      dataOfSpace.date
    )}`;
    apodExplanation.innerHTML = `${dataOfSpace.explanation}`;
    apodCopyright.innerHTML = `&copy; Copyright:${dataOfSpace.copyright}`;
    apodDateInfo.innerHTML = `${formatDate(dataOfSpace.date)}`;
  } catch {
    todayInSpaceSec.innerHTML =
      "<p class='error'>حصل خطأ أثناء تحميل البيانات</p>";
  } finally {
    hideLoader();
  }
}

// زرار تعديل الصورة طبقا للتاريخ
document.getElementById("load-date-btn").addEventListener("click", function () {
  dataPicOfDay();
});

// زرار فتح الصورة بجودة عالية
document.getElementById("viewFullRes").addEventListener("click", function () {
  console.log("aaaa");
  window.open(dataOfSpace.url, "_blank");
});

// العناصر الخاصة بالصفحة الثانية
var mainImage = document.querySelector(".mainImage"); // صورة الاطلاق
var mainTitle = document.querySelector(".mainTitle"); // اسم الاطلاق
var SpaceX = document.querySelector(".SpaceX"); // اسم الشركة
var Starship = document.querySelector(".Starship"); // اسم الصاروخ
var daysBeforeLanch = document.querySelector(".daysBeforeLanch"); // الايام المتبقية للاطلاق
var mainDate = document.querySelector(".mainDate"); // تاريخ الاطلاق
var mainLaunchTime = document.querySelector(".mainLaunchTime"); // وقت الاطلاق
var mainLocation = document.querySelector(".mainLocation"); // موقع الاطلاق
var mainCountry = document.querySelector(".mainCountry"); // دولة الاطلاق
var mainDescription = document.querySelector(".mainDescription"); // وصف الاطلاق
var statusOfMain = document.querySelector(".statusOfMain"); // حالة الاطلاق
var loaderImageSec2 = document.getElementById("loaderImageSec2");
var dataOfLaunch;
var launchesCards = document.getElementById("launches-grid"); // حاوية باقى الاطلاقات
// جلب بيانات الاطلاقات القادمة
async function UpcomingLaunches() {
  showLoaderSec2();
  try {
    var res = await fetch(
      `https://lldev.thespacedevs.com/2.3.0/launches/upcoming/?limit=10`
    );
    dataOfLaunch = await res.json();

    mainImage.onerror = function () {
      this.src = "./assets/images/launch-placeholder.png";
    };
    console.log(dataOfLaunch);

    mainImage.src =
      dataOfLaunch.results[0].image?.image_url ||
      dataOfLaunch.results[0].image?.thumbnail_url;
    mainTitle.innerHTML = `${dataOfLaunch.results[0].name}`;
    SpaceX.innerHTML = `${dataOfLaunch.results[0].launch_service_provider.name}`;
    Starship.innerHTML = `${dataOfLaunch.results[0].rocket.configuration.full_name}`;
    mainDate.innerHTML = `${formatDate(
      dataOfLaunch.results[0].net.slice(0, 10)
    )}`;
    mainLaunchTime.innerHTML = `${dataOfLaunch.results[0].net.slice(
      11,
      16
    )} UTC`;
    mainLocation.innerHTML = `${dataOfLaunch.results[0].pad.location.name}`;
    mainCountry.innerHTML = `${dataOfLaunch.results[0].pad.country.name}`;
    mainDescription.innerHTML = `${dataOfLaunch.results[0].mission.description}`;
    statusOfMain.innerHTML = `${dataOfLaunch.results[0].status.abbrev}`;

    // باقى الاطلاقات
    launchesCards.innerHTML = "";
    for (var j = 1; j < dataOfLaunch.results.length; j++) {
      launchesCards.innerHTML += `
            <div class="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group cursor-pointer">
                <div class="relative h-48 overflow-hidden bg-slate-900/50">
                    <img
                      src="${
                        dataOfLaunch.results[j].image?.image_url ||
                        dataOfLaunch.results[j].image?.thumbnail_url ||
                        "./assets/images/launch-placeholder.png"
                      }"
                      alt="Falcon 9 Block 5 | Pandora / Twilight rideshare mission"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onerror="this.onerror=null; this.src='./assets/images/launch-placeholder.png';"
                    />
                    <div class="absolute top-3 right-3">
                        <span class="px-3 py-1 bg-yellow-500/90 text-white backdrop-blur-sm rounded-full text-xs font-semibold">
                            ${dataOfLaunch.results[j].status.abbrev}
                        </span>
                    </div>
                </div>
                <div class="p-5">
                    <div class="mb-3">
                        <h4 class="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                             ${dataOfLaunch.results[j].name}
                        </h4>
                        <p class="text-sm text-slate-400 flex items-center gap-2">
                            <i class="text-xs" data-fa-i2svg=""><svg class="svg-inline--fa fa-building" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path></svg></i>
                            ${
                              dataOfLaunch.results[j].launch_service_provider
                                .name
                            }
                        </p>
                    </div>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-sm">
                            <i class="text-slate-500 w-4" data-fa-i2svg=""><svg class="svg-inline--fa fa-calendar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"></path></svg></i>
                            <span class="text-slate-300">${formatDate(
                              dataOfLaunch.results[j].net.slice(0, 10)
                            )}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="text-slate-500 w-4" data-fa-i2svg=""><svg class="svg-inline--fa fa-clock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            <span class="text-slate-300">${dataOfLaunch.results[
                              j
                            ].net.slice(11, 16)} UTC</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="text-slate-500 w-4" data-fa-i2svg=""><svg class="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg></i>
                            <span class="text-slate-300">${
                              dataOfLaunch.results[j].rocket.configuration.name
                            }</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                            <i class="text-slate-500 w-4" data-fa-i2svg=""><svg class="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                            <span class="text-slate-300 line-clamp-1">${
                              dataOfLaunch.results[j].pad.location.name
                            }</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 pt-4 border-t border-slate-700">
                        <button class="flex-1 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors text-sm font-semibold">
                            Details
                        </button>
                        <button class="px-3 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg></i>
                        </button>
                    </div>
                </div>
            </div>`;
    }
  } catch {
    launches.innerHTML = "<p class='error'>حصل خطأ أثناء تحميل البيانات</p>";
  } finally {
    hideLoaderSec2();
  }
}

function showLoaderSec2() {
  launchesSec.style.display = `none`;
  loaderImageSec2.style.display = "flex";
}

// كود اخفاء التحميل
function hideLoaderSec2() {
  launchesSec.style.display = `flex`;
  loaderImageSec2.style.display = "none";
}

// العناصر الخاصة بالصفحة الثالثة
var planetsGrid = document.getElementById("planets-grid");
var planetDetailImage = document.getElementById("planet-detail-image");
var planetDetailName = document.getElementById("planet-detail-name");
var planetDetailDescription = document.getElementById(
  "planet-detail-description"
);
var planetDistance = document.getElementById("planet-distance");
var planetRadius = document.getElementById("planet-radius");
var planetMass = document.getElementById("planet-mass");
var planetDensity = document.getElementById("planet-density");
var planetOrbitalPeriod = document.getElementById("planet-orbital-period");
var planetRotation = document.getElementById("planet-rotation");
var planetMoons = document.getElementById("planet-moons");
var planetGravity = document.getElementById("planet-gravity");
var planetDiscoverer = document.getElementById("planet-discoverer");
var planetDiscoveryDate = document.getElementById("planet-discovery-date");
var planetBodyType = document.getElementById("planet-body-type");
var planetVolume = document.getElementById("planet-volume");
var planetPrihelio = document.getElementById("planet-perihelion");
var planetAphelion = document.getElementById("planet-aphelion");
var planetEccentricity = document.getElementById("planet-eccentricity");
var planetInclination = document.getElementById("planet-inclination");
var planetAxialTilt = document.getElementById("planet-axial-tilt");
var planetTemp = document.getElementById("planet-temp");
var planetEscape = document.getElementById("planet-escape");
var fact_1 = document.querySelector(".fact_1");
var fact_2 = document.querySelector(".fact_2");
var fact_3 = document.querySelector(".fact_3");
var fact_4 = document.querySelector(".fact_4");

// دالة لجعل اول حرف كبير
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// جلب بيانات محطات الطاقة الشمسية
async function dataSolarPlants(planetId = "Earth") {
  var res = await fetch(
    `https://solar-system-opendata-proxy.vercel.app/api/planets`
  );
  var data = await res.json();
  var planet = data.bodies.find(
    (body) => body.englishName === capitalizeFirstLetter(planetId)
  );

  planetDetailImage.src = `${planet.image}`;
  planetDetailName.innerHTML = `${planet.englishName}`;
  planetDetailDescription.innerHTML = `${planet.description}`;
  planetDistance.innerHTML = `${(planet.semimajorAxis / 1000000).toFixed(
    1
  )}M km`;
  planetRadius.innerHTML = `${planet.meanRadius.toFixed(0)} km`;
  planetMass.innerHTML = `${planet.mass.massValue.toFixed(2)} x 10<sup>${
    planet.mass.massExponent
  }</sup> kg`;
  planetDensity.innerHTML = `${planet.density.toFixed(2)} g/cm³`;
  planetOrbitalPeriod.innerHTML = `${planet.sideralOrbit.toFixed(2)} days`;
  planetRotation.innerHTML = `${planet.sideralRotation.toFixed(0)} hours`;
  planetMoons.innerHTML = `${planet.moons ? planet.moons.length : 0}`;
  planetGravity.innerHTML = `${planet.gravity.toFixed(1)} m/s²`;
  planetDiscoverer.innerHTML = `${
    planet.discoveredBy || "Known since antiquity"
  }`;
  planetDiscoveryDate.innerHTML = `${planet.discoveryDate || "Ancient times"}`;
  planetBodyType.innerHTML = `${planet.bodyType || "Unknown"}`;
  planetVolume.innerHTML = `${planet.vol.volValue.toFixed(4)} x 10<sup>${
    planet.vol.volExponent
  }</sup> km³`;
  fact_1.innerHTML = `Mass: ${planetMass.innerHTML}`;
  fact_2.innerHTML = `Surface gravity: ${planetGravity.innerHTML}`;
  fact_3.innerHTML = `Density: ${planetDensity.innerHTML}`;
  fact_4.innerHTML = `Axial tilt: ${planetAxialTilt.innerHTML}`;
  planetPrihelio.innerHTML = `${(planet.perihelion / 1000000).toFixed(2)}M km`;
  planetAphelion.innerHTML = `${(planet.aphelion / 1000000).toFixed(2)}M km`;
  planetEccentricity.innerHTML = `${planet.eccentricity}`;
  planetInclination.innerHTML = `${planet.inclination.toFixed(2)}°`;
  planetAxialTilt.innerHTML = `${planet.axialTilt.toFixed(2)}°`;
  planetTemp.innerHTML = `${planet.avgTemp.toFixed(0)} °C`;
  planetEscape.innerHTML = `${(planet.escape / 1000).toFixed(2)} Km/s`;
}

for (let i = 0; i < planetsGrid.children.length; i++) {
  planetsGrid.children[i].addEventListener("click", function (e) {
    this.dataset.planetId;
    var planetId = this.dataset.planetId;
    console.log(planetId);

    dataSolarPlants(planetId);
  });
}

// استدعاء الدوال لجلب البيانات
dataPicOfDay();
UpcomingLaunches();
dataSolarPlants();
