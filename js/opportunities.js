let data = JSON.parse(localStorage.getItem("userLogged"));
if (data == null) {
  //   alert(`User is not Logged in`);
  location.href = "../assets/login.html";
}
const jobData = [
  {
    heading_tittle: "My BillBook (FloBiz) - Software Engineer - Android",
    job_location: "Job available in Bangalore, Work From Home",
    founded: "Founded in 2019",
    no_of_employers: "200 - 500 employees",
    company_description:
      "FloBiz is a neo business platform that offers mobile solutions to digitize MSMEs. Its product MyBillbook is a mobile app that allows users to create invoices, manage their outstanding, and monitor their stock.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/13366/4bd104a4aa/0%20-%202019-08-09T153322.553/139f09ad909033cee4294add041c26e4.png",
    location: "Bangalore, Work From Home",
    employers: "200 - 500",
  },
  {
    heading_tittle: "Walmart Labs - Java Developer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 1962",
    no_of_employers: "More than 1000 employees",
    company_description:
      "Walmart is the world's largest company by revenue - approx $480 billion according to the Fortune Global 500 list in 2016 Walmart Labs is the technology arm of Walmart with a major development center in Bangalore.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/2523/c0e20269fc/walmart/8e524c46a683c984d49b6dcb1e4c8b6f.jpg",
    location: "Bangalore",
    employers: "1000",
  },
  {
    heading_tittle: "Paypal - Software Engineer 1",
    job_location: "Job available in Chennai",
    founded: "Founded in 1998",
    no_of_employers: "More than 1000 employees",
    company_description:
      "Paypal is a global payments company that supports online money transfers and serves as an electronic alternative to traditional paper methods like cheques & cash, through various product offerings.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/1561/162afa4604/paypal/db0c8a690000801a04e532eb6f0636e3.jpg",
    location: "Chennai",
    employers: "1000",
  },
  {
    heading_tittle: "iManage - Associate Software Engineer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2015",
    no_of_employers: "500 - 1000 employees",
    company_description:
      "iManage combines artificial intelligence with content and email management to provide work product management solutions to law firms, corporate legal, accounting firms, financial services, and real estate firms.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/27819/fe6ef6dc74/0_3/ff9c67dc704326dfb8373a7b8e8d63d3.png",
    location: "Bangalore",
    employers: "500 - 1000",
  },
  {
    heading_tittle: "INDmoney - Senior Software Engineer",
    job_location: "Job available in Bangalore, Gurgaon",
    founded: "Founded in 2018",
    no_of_employers: "50 - 200 employees",
    company_description:
      "INDmoney is a full-stack wealth-management platform targeted at Affluent and HNI families. Founded by Ashish Kashyap, who previously founded ibibo Group and was also Google India's first Country Head.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/14859/86e5b715a0/0%20%2833%29/ad79f35bd7d1a74cad113e2e64e3a0a8.png",
    location: "Bangalore, Gurgaon",
    employers: "50 - 200",
  },
  {
    heading_tittle: "FrontRow - Backend Developer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2020",
    no_of_employers: "0 - 10 employees",
    company_description:
      "FrontRow is a celebrity-led learning platform for creative arts, sports & fitness and hobbies. Their platform enables even casual learners to learn from the best. Founders are batchmates from IITD.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/18192/eb323f9a95/frontrowt/4fd75c571b523f401979f367648347dd.png",
    location: "Bangalore",
    employers: "0 - 10",
  },
  {
    heading_tittle: "Wingman - Product Engineer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2018",
    no_of_employers: "10 - 50 employees",
    company_description:
      "Wingman provides a virtual assistant to manage sales calls and improve sales performance. It offers real-time coaching tools for sales representatives, it listens to sales calls, and suggest replies in real-time.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/28758/8824ca2a2e/1569052272234/b93615739cc20d78806fe10c25bb0ce5.png",
    location: "Bangalore",
    employers: "10 - 50",
  },
  {
    heading_tittle: "Semut.io - Software Development Engineer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2020",
    no_of_employers: "10 - 50 employees",
    company_description:
      "Semut is a stealth mode start-up that is building next-generation technologies and platforms that will result in the creation of new globally scalable applications and services.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/29425/bfa51eaac2/Semutx4/46bca891946395c75817977bb9a5a452.jpg",
    location: "Bangalore",
    employers: "10 - 50",
  },
  {
    heading_tittle: "Parkwheels - Backend Engineer Django / Kafka / Redis",
    job_location: "Job available in Gurgaon",
    founded: "Founded in 2015",
    no_of_employers: "10 - 50 employees",
    company_description:
      "Aims to solve traffic problem in metro cities. Products include automated systems for determining optimal parking locations in a parking area and to minimize the check in and checkout time a driver spends in a parking lot.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/3403/b51ff43e65/PW_Logo/790def89eb2790b0600cfdc1caf42f24.png",
    location: "Gurgaon",
    employers: "10 - 50",
  },
  {
    heading_tittle: "Seawise Capital - Software Engineer",
    job_location: "Job available in Delhi",
    founded: "Founded in 2018",
    no_of_employers: "0 - 10 employees",
    company_description:
      "Seawise Capital is a trade finance company that simplifies the process of securing financing for SME exporters by providing an intuitive and efficient digital platform.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/30919/f356114f57/1559836014970/7a17e0cca33a3f9c5bdac55ba6bb28fe.png",
    location: "Delhi",
    employers: "0 - 10",
  },
  {
    heading_tittle: "Edwisely - Front - End Engineer",
    job_location: "Job available in Hyderabad",
    founded: "Founded in 2017",
    no_of_employers: "10 - 50 employees",
    company_description:
      "Edwisely is an AI-based personalized learning platform for higher education institutions and students, empowering them with customized learning, knowledge graph, career development, and assessment tools.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/31574/8e789af278/1588141305189/3b62e8464c9b60ff43618c356123a5ce.png",
    location: "Hyderabad",
    employers: "10 - 50",
  },
  {
    heading_tittle: "ILANTUS Technologies - Java Developer",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2000",
    no_of_employers: "200 - 500 employees",
    company_description:
      "ILANTUS Technologies is an IT & Services company that specializes in the Identity & Access Management domain. Its solutions include Password Management, Single Sign On, User Lifecycle Management, etc.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/11797/74e67e467c/0%20%2869%29/71f18d8374b3ac5c0cb9a737c3eda47b.png",
    location: "Bangalore",
    employers: "200 - 500",
  },
  {
    heading_tittle: "Betterhalf.ai - SDE",
    job_location: "Job available in Bangalore",
    founded: "Founded in 2016",
    no_of_employers: "10 - 50 employees",
    company_description:
      "Betterhalf.ai is a Computer Networking company that offers an AI based partner prediction engine based on the past data of married couples. It specializes in Relationship & Social Compatibility, Marriage, etc.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/3789/ca47cf1e8e/new%20logo%20bhf/5b39782a1714fa6d9ed4614067520d56.png",
    location: "Bangalore",
    employers: "10 - 50",
  },
  {
    heading_tittle: "Spinny - Backend Developer",
    job_location: "Job available in Work From Home",
    founded: "Founded in 2015",
    no_of_employers: "500 - 1000 employees",
    company_description:
      "Spinny is an online & tech-based, new age used-car buying platform. It follows a full-stack business model for used cars by assessing cars on a 200-point checklist and provides 1-year warranty to buyers.",
    img_url:
      "https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/profile/base/employer/9259/b2560eb9bd/logo/3c007006fead809afdf05ca1a25076f0.png",
    location: "Work From Home",
    employers: "500 - 1000",
  },
];

var changeCount = document.getElementById("changeCount");

function show() {
  var count = 0;
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  jobData.forEach(function (job) {
    var mainSubDiv = document.createElement("div");
    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");
    var subDiv3 = document.createElement("div");
    var jobTitle = document.createElement("h3");

    var img = document.createElement("img");
    img.src = job.img_url;
    subDiv1.append(img);
    subDiv1.classList.add("companyIcon");

    var jobTitle = document.createElement("h3");
    jobTitle.innerText = job.heading_tittle;

    var jobLocationDetails = document.createElement("p");
    jobLocationDetails.innerText = job.job_location;

    var founded = document.createElement("p");
    founded.innerText = job.founded;

    var numberOfEmploy = document.createElement("p");
    numberOfEmploy.innerText = job.no_of_employers;

    var companyDescription = document.createElement("p");
    companyDescription.innerText = job.company_description;

    subDiv2.append(
      jobTitle,
      jobLocationDetails,
      founded,
      numberOfEmploy,
      companyDescription
    );
    subDiv2.classList.add("description");

    var viewButton = document.createElement("button");
    viewButton.innerHTML = "Apply";
    viewButton.addEventListener("click", function () {
      viewButton.innerHTML = "Applied";
    });

    var interest = document.createElement("button");
    interest.innerHTML = "Not interested";
    interest.classList.add("interestButton");

    subDiv3.append(viewButton, interest);
    subDiv3.classList.add("jobDetailButton");

    mainSubDiv.append(subDiv1, subDiv2, subDiv3);
    mainSubDiv.classList.add("jobPost");

    mainDiv.appendChild(mainSubDiv);
    count++;
  });
  changeCount.innerText = `Showing 1 - ${count} out of ${count} jobs for you`;
}

localStorage.setItem("alljobData", JSON.stringify(jobData));
getJobsData = JSON.parse(localStorage.getItem("alljobData"));
//console.log(getJobsData);

var showAlljobs = function () {
  show();
  let statusNotInterested = document.getElementById("statusNotInterested");
  statusNotInterested.checked = false;
  let statusInterested = document.getElementById("statusInterested");
  statusInterested.checked = false;
};

show();

var showNotInterested = function () {
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  let statusAll = document.getElementById("statusAll");
  statusAll.checked = false;
  let statusInterested = document.getElementById("statusInterested");
  statusInterested.checked = false;
  changeCount.innerText = `Hmm, no job seems to match that criteria`;
};

var showInterested = function () {
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  let statusAll = document.getElementById("statusAll");
  statusAll.checked = false;
  let statusNotInterested = document.getElementById("statusNotInterested");
  statusNotInterested.checked = false;
  changeCount.innerText = `Hmm, no job seems to match that criteria`;
};

// Jobs In Bangalore

if (localStorage.getItem("jobsInBanglore") == null) {
  localStorage.setItem("jobsInBanglore", JSON.stringify([]));
  BangloreJobs();
}

function BangloreJobs() {
  getJobsData.forEach(function (job) {
    if (job.location == "Bangalore") {
      let addjobInBanglore = JSON.parse(localStorage.getItem("jobsInBanglore"));
      addjobInBanglore.innerText = "";
      addjobInBanglore.push(job);
      localStorage.setItem("jobsInBanglore", JSON.stringify(addjobInBanglore));
    }
  });
}

var showBanglorejobs = function () {
  var count = 0;
  let addjobInBanglore = JSON.parse(localStorage.getItem("jobsInBanglore"));
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  addjobInBanglore.forEach(function (job) {
    var mainSubDiv = document.createElement("div");
    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");
    var subDiv3 = document.createElement("div");
    var jobTitle = document.createElement("h3");

    var img = document.createElement("img");
    img.src = job.img_url;
    subDiv1.append(img);
    subDiv1.classList.add("companyIcon");

    var jobTitle = document.createElement("h3");
    jobTitle.innerText = job.heading_tittle;

    var jobLocationDetails = document.createElement("p");
    jobLocationDetails.innerText = job.job_location;

    var founded = document.createElement("p");
    founded.innerText = job.founded;

    var numberOfEmploy = document.createElement("p");
    numberOfEmploy.innerText = job.no_of_employers;

    var companyDescription = document.createElement("p");
    companyDescription.innerText = job.company_description;

    subDiv2.append(
      jobTitle,
      jobLocationDetails,
      founded,
      numberOfEmploy,
      companyDescription
    );
    subDiv2.classList.add("description");

    var viewButton = document.createElement("button");
    viewButton.innerHTML = "Apply";
    viewButton.addEventListener("click", function () {
      viewButton.innerHTML = "Applied";
    });

    var interest = document.createElement("button");
    interest.innerHTML = "Not interested";
    interest.classList.add("interestButton");

    subDiv3.append(viewButton, interest);
    subDiv3.classList.add("jobDetailButton");

    mainSubDiv.append(subDiv1, subDiv2, subDiv3);
    mainSubDiv.classList.add("jobPost");

    mainDiv.appendChild(mainSubDiv);

    let LocationAll = document.getElementById("LocationAll");
    LocationAll.checked = false;
    let LocationWFH = document.getElementById("LocationWFH");
    LocationWFH.checked = false;
    count++;
  });
  changeCount.innerText = `Showing 1 - ${count} out of ${count} jobs for you`;
};

// Work From Home

if (localStorage.getItem("workFromHome") == null) {
  localStorage.setItem("workFromHome", JSON.stringify([]));
  workFromHomeJobs();
}

function workFromHomeJobs() {
  getJobsData.forEach(function (job) {
    if (
      job.job_location == "Job available in Work From Home" ||
      job.job_location == "Job available in Bangalore, Work From Home"
    ) {
      let addjobInWorkFromHome = JSON.parse(
        localStorage.getItem("workFromHome")
      );
      addjobInWorkFromHome.innerText = "";
      addjobInWorkFromHome.push(job);
      localStorage.setItem(
        "workFromHome",
        JSON.stringify(addjobInWorkFromHome)
      );
    }
  });
}

var showWorkfromHomejobs = function () {
  var count = 0;
  let addjobInWorkFromHome = JSON.parse(localStorage.getItem("workFromHome"));
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  addjobInWorkFromHome.forEach(function (job) {
    var mainSubDiv = document.createElement("div");
    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");
    var subDiv3 = document.createElement("div");
    var jobTitle = document.createElement("h3");

    var img = document.createElement("img");
    img.src = job.img_url;
    subDiv1.append(img);
    subDiv1.classList.add("companyIcon");

    var jobTitle = document.createElement("h3");
    jobTitle.innerText = job.heading_tittle;

    var jobLocationDetails = document.createElement("p");
    jobLocationDetails.innerText = job.job_location;

    var founded = document.createElement("p");
    founded.innerText = job.founded;

    var numberOfEmploy = document.createElement("p");
    numberOfEmploy.innerText = job.no_of_employers;

    var companyDescription = document.createElement("p");
    companyDescription.innerText = job.company_description;

    subDiv2.append(
      jobTitle,
      jobLocationDetails,
      founded,
      numberOfEmploy,
      companyDescription
    );
    subDiv2.classList.add("description");

    var viewButton = document.createElement("button");
    viewButton.innerHTML = "Apply";
    viewButton.addEventListener("click", function () {
      viewButton.innerHTML = "Applied";
    });

    var interest = document.createElement("button");
    interest.innerHTML = "Not interested";
    interest.classList.add("interestButton");

    subDiv3.append(viewButton, interest);
    subDiv3.classList.add("jobDetailButton");

    mainSubDiv.append(subDiv1, subDiv2, subDiv3);
    mainSubDiv.classList.add("jobPost");

    mainDiv.appendChild(mainSubDiv);

    let LocationAll = document.getElementById("LocationAll");
    LocationAll.checked = false;
    let LocationBangalore = document.getElementById("LocationBangalore");
    LocationBangalore.checked = false;

    count++;
  });
  changeCount.innerText = `Showing 1 - ${count} out of ${count} jobs for you`;
};

// Small Company

if (localStorage.getItem("smallCompany") == null) {
  localStorage.setItem("smallCompany", JSON.stringify([]));
  smallCompanyJobs();
}

function smallCompanyJobs() {
  getJobsData.forEach(function (job) {
    if (
      job.employers == "10 - 50" ||
      job.employers == "50 - 200" ||
      job.employers == "0 - 10"
    ) {
      let addjobInsmallcompany = JSON.parse(
        localStorage.getItem("smallCompany")
      );
      addjobInsmallcompany.innerText = "";
      addjobInsmallcompany.push(job);
      localStorage.setItem(
        "smallCompany",
        JSON.stringify(addjobInsmallcompany)
      );
    }
  });
}

var showSmallCompanySizejobs = function () {
  let addjobInsmallcompany = JSON.parse(localStorage.getItem("smallCompany"));
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  var count = 0;
  addjobInsmallcompany.forEach(function (job) {
    var mainSubDiv = document.createElement("div");
    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");
    var subDiv3 = document.createElement("div");
    var jobTitle = document.createElement("h3");

    var img = document.createElement("img");
    img.src = job.img_url;
    subDiv1.append(img);
    subDiv1.classList.add("companyIcon");

    var jobTitle = document.createElement("h3");
    jobTitle.innerText = job.heading_tittle;

    var jobLocationDetails = document.createElement("p");
    jobLocationDetails.innerText = job.job_location;

    var founded = document.createElement("p");
    founded.innerText = job.founded;

    var numberOfEmploy = document.createElement("p");
    numberOfEmploy.innerText = job.no_of_employers;

    var companyDescription = document.createElement("p");
    companyDescription.innerText = job.company_description;

    subDiv2.append(
      jobTitle,
      jobLocationDetails,
      founded,
      numberOfEmploy,
      companyDescription
    );
    subDiv2.classList.add("description");

    var viewButton = document.createElement("button");
    viewButton.innerHTML = "Apply";
    viewButton.addEventListener("click", function () {
      viewButton.innerHTML = "Applied";
    });

    var interest = document.createElement("button");
    interest.innerHTML = "Not interested";
    interest.classList.add("interestButton");

    subDiv3.append(viewButton, interest);
    subDiv3.classList.add("jobDetailButton");

    mainSubDiv.append(subDiv1, subDiv2, subDiv3);
    mainSubDiv.classList.add("jobPost");

    mainDiv.appendChild(mainSubDiv);
    let companySizeAll = document.getElementById("companyAll");
    companySizeAll.checked = false;
    let companySizeLarge = document.getElementById("companylarge");
    companySizeLarge.checked = false;
    count++;
  });
  changeCount.innerText = `Showing 1 - ${count} out of ${count} jobs for you`;
};

// Large Company

if (localStorage.getItem("largeCompany") == null) {
  localStorage.setItem("largeCompany", JSON.stringify([]));
  largeCompanyJobs();
}

function largeCompanyJobs() {
  getJobsData.forEach(function (job) {
    if (
      job.employers == "500 - 1000" ||
      job.employers == "500 - 1000" ||
      job.employers == "200 - 500" ||
      job.employers == "1000"
    ) {
      let addjobInlargecompany = JSON.parse(
        localStorage.getItem("largeCompany")
      );
      addjobInlargecompany.innerText = "";
      addjobInlargecompany.push(job);
      localStorage.setItem(
        "largeCompany",
        JSON.stringify(addjobInlargecompany)
      );
    }
  });
}

var showLargeCompanySizejobs = function () {
  let addjobInlargecompany = JSON.parse(localStorage.getItem("largeCompany"));
  var mainDiv = document.getElementById("availableJobs");
  mainDiv.innerHTML = "";
  var count = 0;
  addjobInlargecompany.forEach(function (job) {
    var mainSubDiv = document.createElement("div");
    var subDiv1 = document.createElement("div");
    var subDiv2 = document.createElement("div");
    var subDiv3 = document.createElement("div");
    var jobTitle = document.createElement("h3");

    var img = document.createElement("img");
    img.src = job.img_url;
    subDiv1.append(img);
    subDiv1.classList.add("companyIcon");

    var jobTitle = document.createElement("h3");
    jobTitle.innerText = job.heading_tittle;

    var jobLocationDetails = document.createElement("p");
    jobLocationDetails.innerText = job.job_location;

    var founded = document.createElement("p");
    founded.innerText = job.founded;

    var numberOfEmploy = document.createElement("p");
    numberOfEmploy.innerText = job.no_of_employers;

    var companyDescription = document.createElement("p");
    companyDescription.innerText = job.company_description;

    subDiv2.append(
      jobTitle,
      jobLocationDetails,
      founded,
      numberOfEmploy,
      companyDescription
    );
    subDiv2.classList.add("description");

    var viewButton = document.createElement("button");
    viewButton.innerHTML = "Apply";
    viewButton.addEventListener("click", function () {
      viewButton.innerHTML = "Applied";
    });
    var interest = document.createElement("button");
    interest.innerHTML = "Not interested";
    interest.classList.add("interestButton");

    subDiv3.append(viewButton, interest);
    subDiv3.classList.add("jobDetailButton");

    mainSubDiv.append(subDiv1, subDiv2, subDiv3);
    mainSubDiv.classList.add("jobPost");

    mainDiv.appendChild(mainSubDiv);
    let companySizeAll = document.getElementById("companyAll");
    companySizeAll.checked = false;
    let companySizeSmall = document.getElementById("companySmall");
    companySizeSmall.checked = false;
    count++;
  });
  changeCount.innerText = `Showing 1 - ${count} out of ${count} jobs for you`;
};
