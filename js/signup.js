// create array of users
let all_users = JSON.parse(localStorage.getItem("All_Valid_Users"));
if (all_users == null) {
  all_users = [];
}

let count = 0;

//check whether email is already exist or not
function isEmailExist(email) {
  let isTrue = false;
  let users = JSON.parse(localStorage.getItem("All_Valid_Users"));
  users.forEach((element) => {
    if (element.email === email) {
      isTrue = true;
      return isTrue;
    }
  });

  return isTrue;
}

//function construtor to create user info
function UserInfo(name, email, password, agree) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.agree = agree;
}

//adding user into local storage
function add_user(e) {
  e.preventDefault();
  let user_name = document.getElementById("signup_name").value;
  let user_email = document.getElementById("signup_email").value;
  let user_password = document.getElementById("signup_password").value;
  let user_agree = document.getElementById("agree").checked;

  if (user_password.length < 8) {
    alert(`Password is too short`);
    return;
  } else if (isEmailExist(user_email)) {
    alert(`Email Already Exist`);
    return;
  }

  let user = new UserInfo(user_name, user_email, user_password, user_agree);

  all_users.push(user);
  localStorage.setItem("All_Valid_Users", JSON.stringify(all_users));

  alert("User SignUp Successfully");
  location.href = "../assets/all_details.html";
}
