document.addEventListener("DOMContentLoaded", function () {
    // Dynamic Project Gallery
    const projects = [
        { title: "JavaScript Lab", description: "A Destiny 2-themed JavaScript lab project with modular imports." },
        { title: "Portfolio Website", description: "My personal portfolio website showcasing my projects." },
        { title: "Web Design Mockups", description: "A collection of web design prototypes and UI concepts." }
    ];

    const projectSection = document.getElementById("projects");
    const projectList = document.createElement("div");
    projectList.classList.add("project-gallery");

    projects.forEach((project, index) => {
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");
        projectItem.innerHTML = `<h3>${project.title}</h3><p class="hidden">${project.description}</p>`;
        
        projectItem.addEventListener("click", () => {
            const description = projectItem.querySelector("p");
            description.classList.toggle("hidden");
        });

        projectList.appendChild(projectItem);
    });

    projectSection.appendChild(projectList);

    // Form Validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            let errorMessage = "";

            if (name === "") {
                errorMessage += "Please enter your name.\n";
            }
            if (email === "" || !email.includes("@")) {
                errorMessage += "Please enter a valid email address.\n";
            }
            if (message === "") {
                errorMessage += "Please enter your message.\n";
            }

            if (errorMessage) {
                alert(errorMessage);
            } else {
                alert("Form submitted successfully!");
                contactForm.reset();
            }
        });
    }
});