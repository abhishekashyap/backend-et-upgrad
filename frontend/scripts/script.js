const form = document.getElementById("user-details-form");

document.addEventListener("DOMContentLoaded", () => {
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

const API_BASE_URL = "https://backend-et-upgrad.herokuapp.com/";

async function addUserAPI(name, age, phoneNo, email, address) {
  return fetch(`${API_BASE_URL}/addUser`, {
    method: "POST",
    body: JSON.stringify({
      name,
      age,
      mobileNumber: phoneNo,
      emailId: email,
      address,
    }),
    headers: {
      "Content-Type": "application/JSON",
    },
  }).then((res) => res.json());
}

form.addEventListener("submit", function submitHandler(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const phoneNo = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  addUserAPI(name, age, phoneNo, email, address).then(() => {
    alert("Data saved successfully");
    form.reset();
  });
});
