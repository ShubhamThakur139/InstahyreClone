// login user using credentialss
function login_user(e) {
  e.preventDefault();
  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;

  if (login_password.length < 8) {
    alert(`Password is too short`);
    return;
  }

  let users = JSON.parse(localStorage.getItem("All_Valid_Users"));
  let userExist = false;
  users.forEach((element) => {
    if (element.email === login_email && element.password === login_password) {
      userExist = true;
      login_email = "";
      login_password = "";
      alert(`Login Successfully`);
      location.href = "../assets/landing_page.html";
      return;
    }
  });

  if (userExist === false) {
    alert(`Invalid Credentials`);
  }
}