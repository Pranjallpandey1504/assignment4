// JavaScript to populate resume
const resumeData = {
    name: "Pranjal Pandey",
    age: "20-year-old",
    email: "2203031080144@paruluniversity.ac.in",
    contact: "9428832619",
    education: [
        { degree: "B.Tech in IT", institution: "Parul University", year: "2022-Present" },
        { degree: "12th Grade", institution: "Kendriya Vidyalaya No. 3", year: "2022", percentage: "80%" },
        { degree: "10th Grade", institution: "Kendriya Vidyalaya No. 3", year: "2020", percentage: "90.4%" }
    ],
    skills: ["Web Development ", "UI/UX Design", "Python, C, Java"],
    experience: ["Intern at parul university", "Event Organizer at CDC Funfest and tech expo "]
};

function createResume() {
    const resumeElement = document.getElementById('resume');
    
    // Header Section
    resumeElement.innerHTML = `
        <header>
            <h1>${resumeData.name}</h1>
            <p>Email: ${resumeData.email} | Contact: ${resumeData.contact}</p>
        </header>
    `;

    // Education Section
    let educationHTML = "<section><h2>Education</h2><ul>";
    resumeData.education.forEach(item => {
        educationHTML += `<li><strong>${item.degree}</strong> - ${item.institution} (${item.year})${item.percentage ? ", " + item.percentage : ""}</li>`;
    });
    educationHTML += "</ul></section>";
    resumeElement.innerHTML += educationHTML;

    // Skills Section
    let skillsHTML = "<section><h2>Skills</h2><ul>";
    resumeData.skills.forEach(skill => {
        skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += "</ul></section>";
    resumeElement.innerHTML += skillsHTML;

    // Experience Section
    let experienceHTML = "<section><h2>Experience</h2><ul>";
    resumeData.experience.forEach(item => {
        experienceHTML += `<li>${item}</li>`;
    });
    experienceHTML += "</ul></section>";
    resumeElement.innerHTML += experienceHTML;
}

// Call the function to populate the resume
createResume();
