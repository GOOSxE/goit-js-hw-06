const loginFormUrl = document.querySelector(".login-form");

const userEmailUrl = document.querySelector('[type="email"]');
const userPasswordUrl = document.querySelector('[type="password"]');
// *

loginFormUrl.addEventListener("submit", (event) => {
  event.preventDefault()
  const elements = {
    email: userEmailUrl.value,
    pass: userPasswordUrl.value,
  }
  if (userEmailUrl.value === "" || userPasswordUrl.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  console.log(elements);
  loginFormUrl.reset();
});
