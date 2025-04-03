const projects = {
    "graphCompression": {
        title: "Graph Compression",
        description: "Graph Compression project details",
    },
    "localisation": {
        title: "Localisation",
        description: "Localisation project details",
    },
    "maximumMatching": {
        title: "Maximum Matching",
        description: "Maximum matching project details",
    },
    "covid": {
        title: "Covid Tracker",
        description: "Covid tracker project details",
    },
    "deepLearning": {
        title: "Deep Learning",
        description: "Deep Learning project details",
    },
    "machineLearning": {
        title: "Machine Learning",
        description: "Machine Learning project details",
    },
    "ai": {
        title: "Reinforcement Learning",
        description: "Reinforcement project details",
    },
    "constraintProgramming": {
        title: "Constraint Programming",
        description: "Constraint Programming project details",
    }
};

function loadProject(projectId) {
    const project = projects[projectId];
    if (!project) { return; }

    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
}

