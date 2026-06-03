/**
 * Projects Data
 * 
 * Add your projects here. Each project object should have:
 * - title: Project name
 * - description: Brief description of the project
 * - tags: Array of technology/topic tags
 * - links: Array of {label, url} objects for project links
 * 
 * Example:
 * {
 *     title: 'AI-Powered Analytics Platform',
 *     description: 'Built an enterprise analytics platform leveraging AI agents to automate data insights generation.',
 *     tags: ['AI/ML', 'Product Strategy', 'Enterprise'],
 *     links: [
 *         { label: 'GitHub', url: 'https://github.com/exkaze/project-name' },
 *         { label: 'Live Demo', url: 'https://demo.example.com' }
 *     ]
 * }
 */

window.projectsData = [
    // Add your projects below
    // {
    //     title: 'Project Title',
    //     description: 'Project description goes here. Explain what the project does and how AI was integrated.',
    //     tags: ['AI', 'Product Management', 'Technology'],
    //     links: [
    //         { label: 'GitHub', url: 'https://github.com/exkaze/project' },
    //         { label: 'Demo', url: 'https://example.com' }
    //     ]
    // }
];

// Helper function to add a project
function addProject(project) {
    window.projectsData.push(project);
    // Reload projects in the UI
    if (typeof loadProjects === 'function') {
        loadProjects();
    }
}

// Helper function to update a project
function updateProject(index, updatedProject) {
    if (index < window.projectsData.length) {
        window.projectsData[index] = updatedProject;
        if (typeof loadProjects === 'function') {
            loadProjects();
        }
    }
}