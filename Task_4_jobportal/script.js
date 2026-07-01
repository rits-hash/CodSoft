// Sample Jobs

let jobs = [

{
title:"Frontend Developer",
company:"Google",
location:"Mumbai"
},

{
title:"Data Analyst",
company:"Infosys",
location:"Pune"
},

{
title:"Android Developer",
company:"TCS",
location:"Bangalore"
}

];

// Load Saved Jobs

window.onload = () => {

const savedJobs =
JSON.parse(
localStorage.getItem("jobs")
);

if(savedJobs){

jobs = savedJobs;

renderJobs();

}

};

// Render Jobs

function renderJobs(){

const container =
document.getElementById(
"jobContainer"
);

container.innerHTML = "";

jobs.forEach(job => {

container.innerHTML += `

<div class="job-card">

<h3>${job.title}</h3>

<p>${job.company}</p>

<span>${job.location}</span>

<button
onclick="applyJob('${job.title}')">

Apply

</button>

</div>

`;

});

}

// Search Jobs

function searchJobs(){

const input =
document
.getElementById("searchInput")
.value
.toLowerCase();

const cards =
document.querySelectorAll(
".job-card"
);

cards.forEach(card => {

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

if(
title.includes(input)
){

card.style.display =
"block";

}else{

card.style.display =
"none";

}

});

}

// Apply Job

function applyJob(title){

const applications =
JSON.parse(
localStorage.getItem(
"applications"
)
) || [];

applications.push(title);

localStorage.setItem(
"applications",
JSON.stringify(
applications
)
);

displayApplications();

alert(
"Successfully Applied for " +
title
);

}

// Show Applications

function displayApplications(){

const list =
document.getElementById(
"applications"
);

list.innerHTML = "";

const applications =
JSON.parse(
localStorage.getItem(
"applications"
)
) || [];

applications.forEach(job => {

const li =
document.createElement("li");

li.innerHTML = `

✅ Applied for
<b>${job}</b>

`;

list.appendChild(li);

});

}

// Add Job

function addJob(){

const title =
document.getElementById(
"title"
).value;

const company =
document.getElementById(
"company"
).value;

const location =
document.getElementById(
"location"
).value;

if(
title === "" ||
company === "" ||
location === ""
){

alert(
"Please fill all fields"
);

return;

}

const newJob = {

title,
company,
location

};

jobs.push(newJob);

localStorage.setItem(
"jobs",
JSON.stringify(jobs)
);

renderJobs();

document.getElementById(
"title"
).value = "";

document.getElementById(
"company"
).value = "";

document.getElementById(
"location"
).value = "";

alert(
"Job Posted Successfully"
);

}

// Initial Load

renderJobs();

displayApplications();


// Smooth Reveal Animation

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

});

document
.querySelectorAll(
".job-card,.contact-card"
)
.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(30px)";

card.style.transition=
"0.6s ease";

observer.observe(card);

});