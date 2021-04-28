const API_BASE_URL = "https://backend-et-upgrad.herokuapp.com/";

const mainContainer = document.getElementById("main-container");

document.addEventListener("DOMContentLoaded", function initialContent() {
  fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((res) => {
      res.forEach((ele) => {
        createCard(ele.name, 18, ele.mobileNumber, ele.emailId, ele.address);
      });
    });

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

function createDivWithClass(className) {
  const ele = document.createElement("div");
  ele.className = className;
  return ele;
}

function createParaWithClass(className, text) {
  const ele = document.createElement("p");
  ele.className = className;
  ele.innerText = text;
  return ele;
}

function createCard(name, age, mobileNumber, emailId, address) {
  const card = createDivWithClass("card");
  const cardContent = createDivWithClass("card-content");
  const media = createDivWithClass("media");
  const mediaContent = createDivWithClass("media-content");
  const title = createParaWithClass("title is-4", name);
  const subtitle = createParaWithClass("subtitle is-6", emailId);

  const content = createDivWithClass("content");
  content.innerText = address;

  const mobileNo = document.createElement("a");
  mobileNo.innerText = mobileNumber;

  mediaContent.appendChild(title);
  mediaContent.appendChild(subtitle);

  media.appendChild(mediaContent);

  cardContent.appendChild(media);
  cardContent.appendChild(content);

  card.appendChild(cardContent);

  mainContainer.appendChild(card);
}
