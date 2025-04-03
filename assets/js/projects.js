const projects = {
    "graphCompression": {
        title: "Approximate Graph Compression",
        description: "Graph Compression project details",
        skills: ["Java", "Graph Theory", "Compression Algorithms"],
    },
    "localisation": {
        title: "Localisation Strategies in Trees",
        description: "Localisation project details",
        skills: ["Python", "Graph Theory", "Localisation"],
    },
    "maximumMatching": {
        title: "Approximate Maximum Matching",
        description: "Maximum matching project details",
        skills: ["Java", "Graph Theory", "Maximum Matching"],
    },
    "covid": {
        title: "Cisco Meraki Covid Tracker",
        description: "Covid tracker project details",
        skills: ["Python", "Django", "Agile"],
    },
    "deepLearning": {
        title: "Deep Learning",
        description: "Deep Learning project details",
        skills: ["Python", "Jupyter", "sklearn"],
    },
    "machineLearning": {
        title: "Machine Learning",
        description: "Machine Learning project details",
        skills: ["Python", "Jupyter", "sklearn"],
    },
    "ai": {
        title: "Reinforcement Learning",
        description: "Reinforcement project details",
        skills: ["Python", "Jupyter", "sklearn"],
    },
    "constraintProgramming": {
        title: "Constraint Programming",
        description: "Constraint Programming project details",
        skills: ["Python", "ILP", "Constraint Programming"],
    }
};

function loadProject(projectId) {
    const project = projects[projectId];
    if (!project) { return; }

    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;

    const skills = document.getElementById("skills");
    skills.innerHTML = "";

    const ul = document.createElement("ul");
    project.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });
    skills.appendChild(ul);
}

