/* var awesomeThoughts = "My name is Ken and I am AWESOME!";

var funThoughts =
   awesomeThoughts.replace("AWESOME", "FUN");

var formattedName =
    HTMLheaderName.replace("%data%", "Kenneth Cruz");

var formattedRole =
    HTMLheaderRole.replace("%data%", "Front-End Web Developer");

$("#main").append(funThoughts);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

/*
$("#main").append(bio.name + "<br />");
$("#main").append(bio.role + "<br />");
$("#main").append(work["position"] + "<br />");
$("#main").append(education.name);
*/


var bio = {
	"name": "Kenneth Cruz",
	"role": "Web Developer",
	"contacts": {
		"mobile": "1-416-725-4991",
		"email": "cruzken@gmail.com",
		"github": "https://github.com/cruzken",
		"twitter": "@cenkruz",
		"location": "Toronto, ON, Canada"
	},
	"welcomeMessage": "Hello! Welcome to my resume!",
	"skills": ["HTML5", "CSS3", "Bootstrap", "JS", "Microsoft Office", "Windows", "Linux"],
	"biopic": "images/fry.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "TJX Canada",
		"title": "Customer Service Agent",
		"location": "Toronto, ON, Canada",
		"dates": "Oct 2013 - Present",
		"description": "Providing Customer Service focused Loss Prevention methods"
	},
	{
		"employer": "TJX Canada",
		"title": "Sales Associate",
		"location": "Mississauga, ON, Canada",
		"dates": "Apr 2011 - Oct 2013",
		"description": "Providing Customer Service in Sales floor"	
	},
	{
		"employer": "Canadian Springs",
		"title": "Dispatch Clerk",
		"location": "Mississauga, ON, Canada",
		"dates": "2009 - 2010",
		"description": "Operator of truck delivery schedules"	
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Build a Portfolio Site",
		"dates": "April 2015",
		"description": "Developed a responsive website that will display images, descriptions and links to each of the portfolio projects that will be completed throughout the course of the Front-End Web Developer Nanodegree.",
		"images": [
			"images/197x148.gif"
		]
	},
	{
		"title": "Online Resume",
		"dates": "May 2015",
		"description": "Built an interactive website using JavaScript and jQuery displaying my resume.",
		"images": [
			"images/197x148.gif"
			]
	}	
	]
}

var education = {
	"schools": [
	{
		"name": "George Brown College",
		"location": "Toronto, ON, Canada",
		"degree": "Certificate",
		"majors": ["General Arts"],
		"dates": "2008 - 2009",
		"url": "http://www.georgebrown.ca/"
	},
	{
		"name": "York University",
		"location": "Toronto, ON, Canada",
		"degree": "N/A",
		"majors": ["Chemistry"],
		"dates": "2011 - 2015",
		"url": "http://www.yorku.ca/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "April 2015 - Present",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
	}
	]

}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);


$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
/*
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
8*/		

}

function displayWork() {
	for (job in work.jobs) {

	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
//		$(".education-entry:last").append(formattedName);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(schoolName + schoolDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}



//		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
//		$(".education-entry:last").append(formattedLocation);
	}
}

education.display();
 

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0][0].toUpperCase() + name[0].slice(1);
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

