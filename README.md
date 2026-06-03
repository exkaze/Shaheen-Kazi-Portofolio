# Shaheen Kazi - Product Management Portfolio

A modern, professional single-page application (SPA) showcasing product management expertise and AI-driven project work.

## 🎯 Overview

This portfolio website is designed to impress hiring managers, recruiters, and recruiting AI agents with:
- **Modern Design**: Clean, professional aesthetic with personality
- **AI Integration Focus**: Highlights work with AI and agentic systems
- **Project Showcase**: Detailed project cards with links to demos and repositories
- **Responsive**: Fully responsive design for all devices
- **Fast & Accessible**: Optimized performance and semantic HTML

## 📁 Project Structure

```
.
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styling and responsive design
├── js/
│   ├── main.js            # Core functionality (navigation, animations)
│   └── projects-data.js   # Project data configuration
└── README.md              # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/exkaze/Shaheen-Kazi-Portofolio.git
   cd Shaheen-Kazi-Portofolio
   ```

2. **Open in browser**
   - Option 1: Double-click `index.html`
   - Option 2: Use a local server (recommended)
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js
     npx http-server
     ```
   - Then visit `http://localhost:8000`

### Deploy to GitHub Pages

1. **Ensure settings are configured**
   - Go to repo → Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/root" folder

2. **Push to main branch**
   - Your site will automatically deploy to `https://exkaze.github.io/Shaheen-Kazi-Portofolio/`

## 📝 Adding Projects

To add your projects to the portfolio:

### Option 1: Edit `js/projects-data.js` directly

```javascript
window.projectsData = [
    {
        title: 'AI-Powered Analytics Platform',
        description: 'Built an enterprise analytics platform leveraging AI agents to automate data insights generation and reduce manual analysis time by 80%.',
        tags: ['AI/ML', 'Product Strategy', 'Enterprise', 'React'],
        links: [
            { label: 'GitHub', url: 'https://github.com/exkaze/analytics-platform' },
            { label: 'Live Demo', url: 'https://analytics.example.com' }
        ]
    },
    {
        title: 'Agentic Workflow System',
        description: 'Designed and shipped an autonomous workflow system that enables non-technical users to create complex automation sequences using natural language.',
        tags: ['Agentic Systems', 'NLP', 'Product Leadership'],
        links: [
            { label: 'GitHub', url: 'https://github.com/exkaze/workflow-system' }
        ]
    }
    // Add more projects...
];
```

### Option 2: Use the helper function in browser console

```javascript
addProject({
    title: 'Your Project Title',
    description: 'Your project description',
    tags: ['Tag1', 'Tag2'],
    links: [
        { label: 'GitHub', url: 'https://github.com/...' }
    ]
});
```

## 🎨 Customization

### Update Personal Information

**In `index.html`:**
- Update `<title>` tag
- Update hero section text (subtitle, description)
- Update contact links (LinkedIn, Email, etc.)
- Update expertise list
- Update About section

### Customize Colors

**In `css/styles.css` (`:root` section):**

```css
:root {
    --primary-color: #0066ff;        /* Main brand color */
    --secondary-color: #00d4ff;      /* Accent color */
    --accent-color: #ff6b6b;         /* Highlight color */
    --dark-bg: #0f0f1e;              /* Background */
    --card-bg: #1a1a2e;              /* Card background */
    /* ... other variables ... */
}
```

### Modify Fonts

**In `css/styles.css`:**

```css
:root {
    --font-family: /* Your font stack here */;
    --font-mono: /* Your monospace font */;
}
```

## 📱 Sections

### 1. Navigation Bar
- Fixed sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting

### 2. Hero Section
- Large headline and tagline
- Call-to-action buttons
- Animated geometric shapes

### 3. Projects Section
- Grid layout (responsive)
- Project cards with hover effects
- Tags for technology/topics
- Links to GitHub, demos, or outputs

### 4. About Section
- Professional bio
- Expertise/skills badges
- Key differentiators

### 5. Contact Section
- Links to social profiles
- GitHub, LinkedIn, Email links
- Easy to customize

## 🔧 Features

- ✨ **Smooth Animations**: Fade-in effects and hover animations
- 🎯 **Active Navigation**: Highlights current section
- 📱 **Fully Responsive**: Mobile, tablet, and desktop
- 🎨 **Modern Gradient Design**: Contemporary color schemes
- ⚡ **Fast Loading**: Minimal dependencies, optimized CSS
- ♿ **Accessible**: Semantic HTML, ARIA labels
- 🌙 **Dark Theme**: Eye-friendly dark color scheme

## 📚 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern layouts with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JS
- **GitHub Pages**: Free static hosting

## 🚀 Next Steps

1. **Add your projects** to `js/projects-data.js`
2. **Update personal information** in `index.html`
3. **Customize colors** in `css/styles.css`
4. **Test responsiveness** on mobile and tablet
5. **Deploy to GitHub Pages**
6. **Share your portfolio!**

## 📧 Contact

For questions or improvements, reach out through the contact section on the website.

---

**Built with modern web technologies. Ready to showcase your product management expertise.**