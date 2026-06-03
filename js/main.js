// Navigation and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSmoothScroll();
    loadProjects();
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Active link on scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navLinksContainer.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scroll setup
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Load projects from data
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid) return;
    
    // Check if projects data is available
    if (typeof window.projectsData !== 'undefined' && window.projectsData.length > 0) {
        projectsGrid.innerHTML = '';
        
        window.projectsData.forEach((project, index) => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
            
            // Add stagger animation
            setTimeout(() => {
                projectCard.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
            }, 0);
        });
    } else {
        // Show placeholder if no projects are loaded
        projectsGrid.innerHTML = `
            <div class="project-card placeholder" style="grid-column: 1 / -1;">
                <div class="project-placeholder">
                    <h3>Projects Coming Soon</h3>
                    <p>Detailed project information will be added soon. Check back for updates!</p>
                </div>
            </div>
        `;
    }
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    let tagsHtml = '';
    if (project.tags && project.tags.length > 0) {
        tagsHtml = `
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        `;
    }
    
    let linksHtml = '';
    if (project.links && project.links.length > 0) {
        linksHtml = `
            <div class="project-links">
                ${project.links.map(link => `
                    <a href="${link.url}" class="project-link" target="_blank" rel="noopener">
                        ${link.label}
                    </a>
                `).join('')}
            </div>
        `;
    }
    
    card.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        ${tagsHtml}
        ${linksHtml}
    `;
    
    return card;
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
});