// create array of users
let all_users = JSON.parse(localStorage.getItem("All_Valid_Users"));
if (all_users == null) {
  all_users = [];
}

let id = JSON.parse(localStorage.getItem("unique_id"));
if (id === null) {
  id = 1000;
}

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
function UserInfo(id, name, email, password, agree) {
  this.id = id;
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

  let user = new UserInfo(id, user_name, user_email, user_password, user_agree);
  localStorage.setItem("unique_id", ++id);

  all_users.push(user);
  localStorage.setItem("All_Valid_Users", JSON.stringify(all_users));

  alert("User SignUp Successfully");
  location.href = "../assets/all_details.html";
}

function add_details(e) {
  e.preventDefault();

  console.log(--id);

  let work = document.querySelector('input[name="working"]:checked').value;
  console.log("work:", work);
  let exp_year = document.getElementById("exp").value;
  console.log("exp_year:", exp_year);
  let role = document.getElementById("job_role");
  let job_rule = role.options[role.selectedIndex].text;
  console.log("job_rule:", job_rule);
  let city = document.getElementById("city");
  let city_name = city.options[city.selectedIndex].text;
  console.log("city_name:", city_name);
  let open_work = document.getElementById("open_work").value;
  console.log("open_work:", open_work);
  let min_sal = document.getElementById("min_sal").value;
  console.log("min_sal:", min_sal);
  let join_dur = document.getElementById("duration");
  let joining_duration = join_dur.options[join_dur.selectedIndex].text;
  console.log("joining_duration:", joining_duration);
  let int_comp_name = document.getElementById("int_comp_name").value;
  console.log("int_comp_name:", int_comp_name);
  let degree = document.getElementById("degree");
  let degree_name = degree.options[degree.selectedIndex].text;
  console.log("degree_name:", degree_name);
  let speci = document.getElementById("course_spe");
  let course_specia = speci.options[speci.selectedIndex].text;
  console.log("course_specia:", course_specia);
  let year = document.getElementById("passing_year");
  let passing_year = year.options[year.selectedIndex].text;
  console.log("passing_year:", passing_year);
  let uni_namme = document.getElementById("uni_name").value;
  console.log("uni_namme:", uni_namme);
  let resu = document.getElementById("resume").value;
  console.log("resu:", resu);
}
