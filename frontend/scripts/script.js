const form = document.getElementById("user-details-form");

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
