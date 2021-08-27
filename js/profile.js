let data = JSON.parse(localStorage.getItem("userLogged"));
let userdetails = JSON.parse(localStorage.getItem("user_detail"));
let user_info = JSON.parse(localStorage.getItem("All_Valid_Users"));

user_info.forEach((element) => {
  if (element.id === data[1].id) {
    // console.log(element);
    document.getElementById("user_name").innerText = element.name;
  }
});
userdetails.forEach((element) => {
  if (element.id === data[1].id) {
    console.log(element);
    document.getElementById("city").innerText = element.job_city;
    document.getElementById("loc").innerText = element.open_work;
    document.getElementById("sal").innerText = element.min_sal;
    document.getElementById("join_dur").innerText = element.joining_duration;
    document.getElementById("job_role").innerText = element.job_role;
    document.getElementById("uni_name").innerText = element.university_name;
    document.getElementById("deg_name").innerText = element.degree;
    document.getElementById("pass_year").innerText = element.passing_year;
    document.getElementById("intern").innerText =
      element.internship_company_name;
    document.getElementById("course_speci").innerText =
      element.course_specialization;
    document.getElementById("resu").innerText = element.resume;
  }
});
