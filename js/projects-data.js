/**
 * Projects Data
 * 
 * Add your projects here. Each project object should have:
 * - title: Project name
 * - description: Brief description of the project
 * - tags: Array of technology/topic tags
 * - links: Array of {label, url} objects for project links
 */

window.projectsData = [
    {
        title: 'Medicare Advantage Selector',
        description: 'AI-driven prototype helping seniors navigate Medicare vs Medicare Advantage plans. Leverages NLP for voice/chat interaction and proprietary algorithms to match plans based on health conditions, prescriptions, location, and lifestyle needs. Targets 1M+ seniors with personalized insurance recommendations.',
        tags: ['AI/NLP', 'Product Leadership', 'Healthcare', 'Voice Interface', 'Senior Tech'],
        links: [
            { label: 'Live Demo', url: 'https://exkaze.github.io/SK-medicare-selector/' },
            { label: 'GitHub Repo', url: 'https://github.com/exkaze/SK-medicare-selector' },
            { label: 'Product Spec', url: '#' }
        ]
    },
    {
        title: 'Digital Communications Opt-In System',
        description: 'Enterprise consent and preference management platform for SMS, Email, and Push Notifications. Enables recipients granular control over communication content types and frequency while ensuring regulatory compliance. Real-time compliance checking ensures all messages respect user preferences.',
        tags: ['Product Strategy', 'Compliance', 'User Preferences', 'Digital Communications', 'Enterprise'],
        links: [
            { label: 'Live Demo', url: 'https://exkaze.github.io/Comms-Opt-In/' },
            { label: 'GitHub Repo', url: 'https://github.com/exkaze/Comms-Opt-In' },
            { label: 'Product Spec', url: '#' }
        ]
    }
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