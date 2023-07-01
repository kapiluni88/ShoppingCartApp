const signupForm = document.getElementById("signupForm");
const error = document.getElementById("errorMsg");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const conPass = document.getElementById("con-pass").value;

  if (!firstName || !lastName || !email || !password || !conPass) {
    error.innerText = "Error: All Fields are Mandatory.";
    error.style.color = "red";
    return;
  }

  if (password !== conPass) {
    error.innerText = "Error: Password and Confirm Password Should be the same.";
    error.style.color = "red";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExist = users.find((user) => user.email === email);

  if (userExist) {
    error.innerText = "Error: User already exists.";
    error.style.color = "red";
    return;
  }

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    conPass,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  error.innerText = "SignUp Successfull";
  error.style.color = "green";
  setTimeout(()=>{
    location.href="../login/index.html"
  },1000)
  signupForm.reset();
});
