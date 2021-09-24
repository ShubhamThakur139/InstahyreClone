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
  if (users === null) {
    alert(`User doesn't Exist`);
    document.getElementById("login_email").value = "";
    document.getElementById("login_password").value = "";
    return;
  }
  let userExist = false;
  users.forEach((element) => {
    if (element.email === login_email) {
      if (element.password === login_password) {
        userExist = true;
        login_email = "";
        login_password = "";
        localStorage.setItem(
          "userLogged",
          JSON.stringify([{ isLogged: true }, element])
        );

        alert(`Login Successfully`);
        location.href = "../assets/opportunities.html";
        document.getElementById("login_email").value = "";
        document.getElementById("login_password").value = "";
        return;
      } else {
        alert(`Invalid Password`);
        document.getElementById("login_password").value = "";
        userExist = true;
      }
    }
  });

  if (userExist === false) {
    alert(`User doesn't Exist`);
    document.getElementById("login_email").value = "";
    document.getElementById("login_password").value = "";
  }
}
