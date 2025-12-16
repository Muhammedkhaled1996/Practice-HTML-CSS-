var fullNameInput = document.getElementById("fName");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("Email");
var addressInput = document.getElementById("Address");
var groupSelect = document.getElementById("Group");
var notesTextarea = document.getElementById("Notes");
var favoriteCheckbox = document.getElementById("Favorite");
var emergencyCheckbox = document.getElementById("Emergency");
var saveContactBtn = document.getElementById("saveContactBtn");
var imageInput = document.getElementById("profilePic");
var imagePreview = document.getElementById("imagePreview");
var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
var myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
var validPhone = document.getElementById("validPhone");
var favContacts;
var emergncyContacts;
var contact;

displayContacts();
displayFavContacts();
displayEmergancyContacts();
totalContacts();
totalFavContacts();
totalEmergncyContacts();

// Save contacts to local storage
function saveLocalStorage() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Add bottom Contact
function addContactbtn() {
  saveContactBtn.classList.replace("d-none", "d-flex");
  updateContactBtn.classList.replace("d-flex", "d-none");
  clearForm();
}

// Add Contact
function addContact() {
  if (fullNameInput.value.trim() === "") {
    alertNoFullName();
    return;
  } else if (phoneInput.value.trim() === "") {
    alertNoPhone();
    return;
  } else if (!checkPhone()) {
    alertDontMatchPhone();
    return;
  } else if (findDuplicatePhone() !== undefined) {
    alertDuplicatePhone();
    return;
  } else if (checkEmail() === false) {
    alertDontMatchEmail();
    return;
  } else {
    if (imageInput.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(imageInput.files[0]);
      reader.onload = function () {
        var newContact = {
          id: Date.now(),
          name: fullNameInput.value,
          phone: phoneInput.value,
          email: emailInput.value,
          address: addressInput.value,
          notes: notesTextarea.value,
          group: groupSelect.value,
          image: reader.result,
          isFavorite: favoriteCheckbox.checked,
          isEmergency: emergencyCheckbox.checked,
        };
        contacts.push(newContact);
        saveLocalStorage();
        displayContacts();
        displayFavContacts();
        displayEmergancyContacts();
        totalContacts();
        totalFavContacts();
        totalEmergncyContacts();
        clearForm();
        myModal.hide();
        successAddAlert();
      };
    } else {
      var newContact = {
        id: Date.now(),
        name: fullNameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        address: addressInput.value,
        notes: notesTextarea.value,
        group: groupSelect.value,
        image: "./images/default.png",
        isFavorite: favoriteCheckbox.checked,
        isEmergency: emergencyCheckbox.checked,
      };
      contacts.push(newContact);
      saveLocalStorage();
      displayContacts();
      displayFavContacts();
      displayEmergancyContacts();
      totalContacts();
      totalFavContacts();
      totalEmergncyContacts();
      clearForm();
      myModal.hide();
      successAddAlert();
    }
  }
}

// display contacts
function displayContacts(arr = contacts) {
  // generate contacts cards
  htmlMarkup = "";

  for (var i = 0; i < arr.length; i++) {
    htmlMarkup += `
        <div class="col-12 col-md-6">
              <div class="rounded-4 shadow-sm-hover">
                <div class="cardItem bg-light rounded-top-4 p-3">
                  <div class="d-flex mb-3">
                    <div class="position-relative me-3">
                      <img src="${
                        arr[i].image === "./images/default.png"
                          ? "./images/default.png"
                          : arr[i].image
                      }" alt="" class="letter2 
                      ${
                        arr[i].image === "./images/default.png"
                          ? "d-none"
                          : "d-block"
                      }">
                      <small class="letter ${
                        arr[i].image === "./images/default.png"
                          ? "d-flex"
                          : "d-none"
                      }">
                      ${getInitials(arr[i].name)}</small>
                      <i
                        class="fa-solid fa-star ${
                          arr[i].isFavorite ? "" : "d-none"
                        } cardIcon position-absolute"
                      ></i>
                      <i
                        class="fa-solid fa-heart-pulse ${
                          arr[i].isEmergency ? "" : "d-none"
                        } cardIcon position-absolute"
                      ></i>
                    </div>
                    <div class="d-flex flex-column">
                      <small class="fw-bold mb-1">${arr[i].name}</small>
                      <div class="d-flex align-items-center">
                        <i class="fa-solid fa-phone me-2 rounded"></i>
                        <small class="text-secondary">${arr[i].phone}</small>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 d-flex align-items-center">
                    <i
                      class="fa-solid fa-envelope rounded d-flex justify-content-center align-items-center me-3"
                    ></i>
                    <small class="text-secondary">${arr[i].email}</small>
                  </div>
                  <div class="mb-3 d-flex align-items-center">
                    <i
                      class="fa-solid fa-location-dot rounded d-flex justify-content-center align-items-center me-3"
                    ></i>
                    <small class="text-secondary">${arr[i].address}</small>
                  </div>
                  <div class="d-flex align-items-center">
                    <small class="badge me-3 px-3 py-2 ${
                      arr[i].group == "Family"
                        ? "bgCategoryFamily"
                        : arr[i].group == "Friends"
                        ? "bgCategoryFriends"
                        : arr[i].group == "Work"
                        ? "bgCategoryWork"
                        : arr[i].group == "School"
                        ? "bgCategorySchool"
                        : "bgCategoryOther"
                    }"
                      >${arr[i].group}</small
                    >
                    <small
                      class="badge d-block px-3 py-2 bg-danger bg-opacity-10 text-danger ${
                        arr[i].isEmergency ? "" : "d-none"
                      }"
                    >
                      <i class="fa-solid fa-heart-pulse h-auto w-auto me-2"></i
                      >Emergency</small
                    >
                  </div>
                </div>
                <div
                  class="bg-body-secondary bg-opacity-25 d-flex align-items-center justify-content-between rounded-bottom-4 p-3"
                >
                  <div
                    class="leftIcons d-flex align-items-center justify-content-center"
                  >
                    <a href="tel:${arr[i].phone}" class="text-decoration-none">
                      <i class="fa-solid fa-phone me-2"></i>
                    </a>
                    <a href="mailto:${
                      arr[i].email
                    }" class="text-decoration-none">
                      <i class="fa-solid fa-envelope me-2"></i>
                    </a>
                  </div>
                  <div class="rightIcons d-flex">
                    <i class="${
                      arr[i].isFavorite
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    } me-2" onclick="ToggleFav(${arr[i].id})"></i>
                    <i class=" ${
                      arr[i].isEmergency
                        ? "fa-solid fa-heart-pulse"
                        : "fa-regular fa-heart"
                    } me-2" onclick="ToggleEmergncy(${arr[i].id})"></i>
                    <i class="fa-solid fa-pen me-2" 
                    onclick="updateContact(${arr[i].id})"></i>
                    <i class="fa-solid fa-trash me-2" 
                    onclick="deleteAlert(${arr[i].id})"></i>
                  </div>
                </div>
              </div>
            </div>
        `;
  }
  document.getElementById("contactsContainer").innerHTML = htmlMarkup;
  hideNullContactsMessege();
}

//   hide no contacts message
function hideNullContactsMessege() {
  if (contacts.length > 0) {
    document
      .getElementById("nullContacts")
      .classList.replace("d-block", "d-none");
  } else {
    document
      .getElementById("nullContacts")
      .classList.replace("d-none", "d-block");
  }
}

// live photo preview
function previewImage() {
  if (imageInput.files[0]) {
    var reader = new FileReader();
    reader.readAsDataURL(imageInput.files[0]);
    reader.onload = function () {
      imagePreview.src = reader.result;
      imagePreview.classList.replace("d-none", "d-block");
      imagePreview.classList.add("personPic");
      document.getElementById("DefaultImage").classList.add("d-none");
    };
  }
}

// function ToggleFavorate
function ToggleFav(id) {
  var favContact = contacts.find(function (contact) {
    return contact.id === id;
  });
  favContact.isFavorite = !favContact.isFavorite;
  saveLocalStorage();
  displayContacts();
  displayFavContacts();
  totalFavContacts();
}

// funcation ToggleEmergncy
function ToggleEmergncy(id) {
  var emergncyContact = contacts.find(function (contact) {
    return contact.id === id;
  });
  emergncyContact.isEmergency = !emergncyContact.isEmergency;
  saveLocalStorage();
  displayContacts();
  displayEmergancyContacts();
  totalEmergncyContacts();
}

// delete Function
function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    return contact.id != id;
  });
  saveLocalStorage();
  displayContacts();
  displayFavContacts();
  displayEmergancyContacts();
  totalContacts();
  totalFavContacts();
  totalEmergncyContacts();
}

// display Favorate Contacts
function displayFavContacts() {
  favContacts = contacts.filter(function (favContacts) {
    return favContacts.isFavorite == true;
  });
  htmlMarkup = "";
  for (var i = 0; i < favContacts.length; i++) {
    htmlMarkup += `
      <div
                  class="p-3 d-flex justify-content-between align-items-center bg-body-secondary bg-opacity-25 rounded-4 hoverFav mb-2"
                >
                  <div class="d-flex align-items-center">
                  <img src="${
                    favContacts[i].image === "./images/default.png"
                      ? "./images/default.png"
                      : favContacts[i].image
                  }" alt="" class="me-3 badgeIconLeftimg 
                  ${
                    favContacts[i].image === "./images/default.png"
                      ? "d-none"
                      : "d-block"
                  }">
                    <div class="me-3 fw-bold badgeIconLeft 
                    ${
                      favContacts[i].image === "./images/default.png"
                        ? "d-flex"
                        : "d-none"
                    }">
                    ${getInitials(favContacts[i].name)}</div>
                    <div class="d-flex flex-column">
                      <small class="fw-semibold">${favContacts[i].name}</small>
                      <small class="text-secondary smallText">${
                        favContacts[i].phone
                      }</small>
                    </div>
                  </div>
                  <a href="tel:${
                    favContacts[i].phone
                  }" class="text-decoration-none">
                    <i class="fa-solid fa-phone rounded-2"></i>
                  </a>
                </div>
      `;
  }
  if (htmlMarkup.length > 0) {
    document.getElementById("emptyFav").classList.replace("d-flex", "d-none");
    document
      .getElementById("favContactSec")
      .classList.replace("d-none", "d-block");
    document.getElementById("favContactSec").innerHTML = htmlMarkup;
    totalFavContacts();
  } else {
    document.getElementById("emptyFav").classList.replace("d-none", "d-flex");
    document
      .getElementById("favContactSec")
      .classList.replace("d-block", "d-none");
    document.getElementById("favContactSec").innerHTML = htmlMarkup;
    totalFavContacts();
  }
}

// display Emergancy Contacts
function displayEmergancyContacts() {
  emergncyContacts = contacts.filter(function (emergncyContacts) {
    return emergncyContacts.isEmergency == true;
  });
  htmlMarkup = "";
  for (var i = 0; i < emergncyContacts.length; i++) {
    htmlMarkup += `
        <div
          class="p-3 d-flex justify-content-between align-items-center bg-body-secondary bg-opacity-25 rounded-4 hoverEmg mb-2"
        >
          <div class="d-flex align-items-center">
          <img src="
          ${
            emergncyContacts[i].image === "./images/default.png"
              ? "./images/default.png"
              : emergncyContacts[i].image
          }" alt="" class="me-3 badgeIconLeftimg 
          ${
            emergncyContacts[i].image === "./images/default.png"
              ? "d-none"
              : "d-block"
          }">
            <div class="me-3 fw-bold badgeIconLeft 
            ${
              emergncyContacts[i].image === "./images/default.png"
                ? "d-flex"
                : "d-none"
            }">
            ${getInitials(emergncyContacts[i].name)}</div>
            <div class="d-flex flex-column">
              <small class="fw-semibold">
              ${emergncyContacts[i].name}</small>
              <small class="text-secondary smallText">
              ${emergncyContacts[i].phone}</small>
            </div>
          </div>
          <a href="tel:
          ${emergncyContacts[i].phone}" class="text-decoration-none">
            <i class="fa-solid fa-phone emergency-phone rounded-2"></i>
          </a>
        </div>
      `;
  }
  if (htmlMarkup.length > 0) {
    document
      .getElementById("emptyemergncy")
      .classList.replace("d-flex", "d-none");
    document
      .getElementById("emergncyContactSec")
      .classList.replace("d-none", "d-block");
    document.getElementById("emergncyContactSec").innerHTML = htmlMarkup;
    totalEmergncyContacts();
  } else {
    document
      .getElementById("emptyemergncy")
      .classList.replace("d-none", "d-flex");
    document
      .getElementById("emergncyContactSec")
      .classList.replace("d-block", "d-none");
    document.getElementById("emergncyContactSec").innerHTML = htmlMarkup;
    totalEmergncyContacts();
  }
}

// إظهار اول حرفين من الاسم فى حالة عدم  وجود صورة
function getInitials(name) {
  var parts = name.trim().split(" ");

  // مقطع واحد
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  // مقطعين أو أكتر
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

// Total Contacts
function totalContacts() {
  document.getElementById("totalContacts").innerHTML = contacts.length;
  document.getElementById("manageContacts").innerHTML = contacts.length;
}

// Total Favorate Contacts
function totalFavContacts() {
  document.getElementById("totalFavContacts").innerHTML = favContacts.length;
}

// Total Emergancy Contacts
function totalEmergncyContacts() {
  document.getElementById("totalEmergncyContacts").innerHTML =
    emergncyContacts.length;
}

// Clear Form
function clearForm() {
  fullNameInput.value = null;
  phoneInput.value = null;
  emailInput.value = null;
  addressInput.value = null;
  notesTextarea.value = null;
  groupSelect.value = "other";
  favoriteCheckbox.checked = false;
  emergencyCheckbox.checked = false;
  imageInput.value = null;
  imagePreview.setAttribute("class", "d-none");
  DefaultImage.classList.replace("d-none", "d-block");
  imageInput.value = null;
}

// Search Function
function search(term) {
  var searchContactList = contacts.filter(function (filteredContacts) {
    return (
      filteredContacts.name.toLowerCase().includes(term.toLowerCase()) ||
      filteredContacts.email.toLowerCase().includes(term.toLowerCase()) ||
      filteredContacts.phone.toLowerCase().includes(term.toLowerCase())
    );
  });
  displayContacts(searchContactList);
}

// Update buttom
function updateContact(id) {
  contact = contacts.find(function (contactToUpdate) {
    return contactToUpdate.id == id;
  });

  fullNameInput.value = contact.name;
  phoneInput.value = contact.phone;
  emailInput.value = contact.email;
  addressInput.value = contact.address;
  groupSelect.value = contact.group;
  notesTextarea.value = contact.notes;
  favoriteCheckbox.checked = contact.isFavorite;
  emergencyCheckbox.checked = contact.isEmergency;
  myModal.show();
  saveContactBtn.classList.replace("d-flex", "d-none");
  updateContactBtn.classList.replace("d-none", "d-flex");
}

// Update Action
function updateAction() {
  if (fullNameInput.value.trim() === "") {
    alertNoFullName();
    return;
  } else if (phoneInput.value.trim() === "") {
    alertNoPhone();
    return;
  } else if (!checkPhone()) {
    alertDontMatchPhone();
    return;
  } else if (findDuplicatePhone(contact.id) !== undefined) {
    alertDuplicatePhone();
    return;
  } else if (!checkEmail()) {
    alertDontMatchEmail();
    return;
  } else {
    if (imageInput.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(imageInput.files[0]);
      reader.onload = function () {
        contact.name = fullNameInput.value;
        contact.phone = phoneInput.value;
        contact.email = emailInput.value;
        contact.address = addressInput.value;
        contact.group = groupSelect.value;
        contact.notes = notesTextarea.value;
        contact.isFavorite = favoriteCheckbox.checked;
        contact.isEmergency = emergencyCheckbox.checked;
        contact.image = reader.result;
        saveLocalStorage();
        displayContacts();
        displayFavContacts();
        displayEmergancyContacts();
        clearForm();
        myModal.hide();
        successUpdateAlert();
      };
    } else {
      contact.name = fullNameInput.value;
      contact.phone = phoneInput.value;
      contact.email = emailInput.value;
      contact.address = addressInput.value;
      contact.group = groupSelect.value;
      contact.notes = notesTextarea.value;
      contact.isFavorite = favoriteCheckbox.checked;
      contact.isEmergency = emergencyCheckbox.checked;
      saveLocalStorage();
      displayFavContacts();
      displayEmergancyContacts();
      displayContacts();
      clearForm();
      myModal.hide();
      successUpdateAlert();
    }
  }
}

// رسالة تحذيرية من المسح
function deleteAlert(id) {
  contact = contacts.find(function (contactToUpdate) {
    return contactToUpdate.id == id;
  });

  Swal.fire({
    title: "Delete Contact?",
    text: `Are you sure you want to delete ${contact.name}? This action cannot be undone.`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "rgba(70, 70, 70, 1)",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      deleteContact(id);
    }
  });
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

// رسالة تاكيد نجاح التحديث
function successUpdateAlert() {
  Swal.fire({
    icon: "success",
    title: "Updated!",
    text: "Contact has been updated successfully.",
    showConfirmButton: false,
    timer: 1500,
  });
}

// رسالة تحذيرية من عدم تسجل الاسم
function alertNoFullName() {
  Swal.fire({
    icon: "error",
    title: "Missing Name",
    text: "Please enter a name for the contact!",
    willOpen: () => {
      setTimeout(() => {
        fullNameInput.focus();
      }, 0);
    },
    didClose: () => {
      setTimeout(() => {
        fullNameInput.focus();
      }, 0);
    },
  });
}
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

// رسالة تحذيرية من التسجيل الخطا للتليفون
function alertDontMatchPhone() {
  Swal.fire({
    icon: "error",
    title: "Invalid Phone",
    text: "Please enter a valid Egyptian phone number (e.g., 01012345678 or +201012345678)",
    willOpen: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
    didClose: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
  });
}

// رسالة تحذيرية من عدم تسجيل رقم التليفون
function alertNoPhone() {
  Swal.fire({
    icon: "error",
    title: "Missing Phone",
    text: "Please enter a phone number!",
    willOpen: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
    didClose: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
  });
}

// التحقق ان التليفون غير مكرر
function findDuplicatePhone(currentId = null) {
  var phone = phoneInput.value.trim();

  return contacts.find(function (contact) {
    if (currentId !== null && contact.id === currentId) {
      return false;
    }
    return contact.phone === phone;
  });
}

// رسالة تحذيرية من عدم ان رقم التليفون مكرر
function alertDuplicatePhone() {
  var duplicatePhone = findDuplicatePhone();
  Swal.fire({
    icon: "error",
    title: "Duplicate Phone Number",
    text: `A contact with this phone number already exists: ${duplicatePhone.name}`,
    willOpen: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
    didClose: () => {
      setTimeout(() => {
        phoneInput.focus();
      }, 0);
    },
  });
}

// التحقق من رقم الايميل
function validateEmail(email) {
  var regex = /^[\w.%+-]+@[\w.-]+\.[A-z]{2,}$/;
  return regex.test(email);
}

function checkEmail() {
  var email = emailInput.value.trim();
  if (!validateEmail(email)) {
    emailInput.classList.add("is-invalid");
    return false;
  } else {
    emailInput.classList.remove("is-invalid");
    return true;
  }
}

// رسالة تحذيرية من التسجيل للايميل
function alertDontMatchEmail() {
  Swal.fire({
    icon: "error",
    title: "Invalid Email",
    text: "Please enter a valid email address",
    willOpen: () => {
      setTimeout(() => {
        emailInput.focus();
      }, 0);
    },
    didClose: () => {
      setTimeout(() => {
        emailInput.focus();
      }, 0);
    },
  });
}

// function validation() {
//   var regex = {
//     emptyName: !null,
//     phone: /^(\+2|002)?01[0125]\d{8}$/,
//     email: /^[\w.%+-]+@[\w.-]+\.[A-z]{2,}$/,
//   };

//   errors = {};
//   if (regex.emptyName.test(fullNameInput.value) == false) {
//     errors.emptyName = "Please Enter Value in Full Name";
//   }
//   if (regex.phone.test(phoneInput.value) == false) {
//     errors.phone = "In Valid Phone Number";
//   }
//   if (regex.email.test(emailInput.value) == false) {
//     errors.email = "In Valid Email Address";
//   }

//   return errors;
// }
