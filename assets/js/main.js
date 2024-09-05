// Common functionality and data
const projects = [
    {
        id: 'project1',
        title: 'Machine Learning Classification Project',
        date: 'May 1, 2023',
        image: 'assets/images/project1.jpeg',
        description: 'A machine learning project focusing on classification algorithms.',
        content: `...`, // Full content here
        github: 'https://github.com/yourusername/classification-project'
    },
    {
        id: 'project2',
        title: 'Data Visualization Dashboard',
        date: 'June 15, 2023',
        image: 'assets/images/project2.jpg',
        description: 'An interactive dashboard for visualizing complex datasets.',
        content: `...`, // Full content here
        github: 'https://github.com/yourusername/data-viz-dashboard'
    },
    {
        id: 'project3',
        title: 'Natural Language Processing Tool',
        date: 'July 30, 2023',
        image: 'assets/images/project3.jpg',
        description: 'A tool for analyzing and processing natural language text.',
        content: `...`, // Full content here
        github: 'https://github.com/yourusername/nlp-tool'
    }
    // Add more projects as needed
];

const blogPosts = [
    {
        id: 'post1',
        title: 'Introduction to Machine Learning',
        date: 'June 15, 2023',
        image: 'assets/images/machine-learning.jpeg',
        excerpt: 'Machine Learning (ML) is a subset of Artificial Intelligence...',
        url: 'blog/post1.html',
        content: `...` // Full content here
    }
    // Add more blog posts here
];

// Utility function to safely get an element by ID
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found`);
    }
    return element;
}

// Function to populate featured projects on the home page
function populateFeaturedProjects() {
    const projectsList = getElement('featured-projects');
    if (projectsList) {
        projects.slice(0, 2).forEach(project => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="projects/${project.id}.html">${project.title}</a> - ${project.description}`;
            projectsList.appendChild(li);
        });
    }
}

// Function to populate the latest blog post on the home page
function populateLatestPost() {
    const latestPostDiv = getElement('latest-post');
    if (latestPostDiv && blogPosts.length > 0) {
        const latestPost = blogPosts[0];
        latestPostDiv.innerHTML = `
            <h3><a href="${latestPost.url}">${latestPost.title}</a></h3>
            <p>Published on: ${latestPost.date}</p>
            <img src="${latestPost.image}" alt="${latestPost.title}">
            <p>${latestPost.excerpt}</p>
            <a href="${latestPost.url}" class="read-more">Read more</a>
        `;
    }
}

// Function to populate recent blog posts on the home page
function populateRecentBlogPosts() {
    const recentPostsSection = getElement('recent-blog-posts');
    if (recentPostsSection) {
        const recentPosts = blogPosts.slice(0, 6); // Get up to 6 most recent posts
        recentPosts.forEach(post => {
            const blogCard = document.createElement('a');
            blogCard.className = 'blog-card';
            blogCard.href = `blog/${post.id}.html`;
            blogCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-info">
                    <h3>${post.title}</h3>
                    <div class="post-meta">
                        <p class="post-date">${post.date}</p>
                        <p class="post-author">By Aakash</p>
                    </div>
                </div>
            `;
            recentPostsSection.appendChild(blogCard);
        });
    }
}

// Function to populate all projects on the projects page
function populateAllProjects() {
    loadProjects('project-grid');
}

// Function to load projects into a container
function loadProjects(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Function to populate project details
function populateProjectDetails() {
    const projectDetails = getElement('project-details');
    if (projectDetails) {
        const projectId = window.location.pathname.split('/').pop().replace('.html', '');
        const project = projects.find(p => p.id === projectId);

        if (project) {
            document.title = `${project.title} - AakashEngineer`;
            projectDetails.innerHTML = `
                <h2>${project.title}</h2>
                <p class="project-date">Completed on: ${project.date}</p>
                <img src="../${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    ${project.content}
                </div>
                <a href="${project.github}" class="project-link" target="_blank">View on GitHub</a>
            `;
        } else {
            projectDetails.innerHTML = '<p>Project not found.</p>';
        }
    }
}

// Function to populate all blog posts on the blog page
function populateAllBlogPosts() {
    const blogGrid = getElement('blog-grid');
    if (blogGrid) {
        blogPosts.forEach(post => {
            const blogCard = document.createElement('a');
            blogCard.className = 'blog-card';
            blogCard.href = `${post.id}.html`;
            blogCard.innerHTML = `
                <img src="../${post.image}" alt="${post.title}">
                <div class="blog-info">
                    <h3>${post.title}</h3>
                    <div class="post-meta">
                        <p class="post-date">${post.date}</p>
                        <p class="post-author">By Aakash</p>
                    </div>
                </div>
            `;
            blogGrid.appendChild(blogCard);
        });
    }
}

// Helper function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Function to populate a single blog post
function populateBlogPost() {
    const postContent = getElement('post-content');
    if (postContent) {
        const postId = window.location.pathname.split('/').pop().replace('.html', '');
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
            document.title = `${post.title} - AakashEngineer`;
            getElement('post-title').textContent = post.title;
            getElement('post-date').textContent = `Published on: ${post.date}`;
            const postImage = getElement('post-image');
            postImage.src = `../${post.image}`;
            postImage.alt = post.title;
            postContent.innerHTML = post.content;
        } else {
            postContent.innerHTML = '<p>Blog post not found.</p>';
        }
    }
}

// Function to initialize the page based on its type
function initPage() {
    const path = window.location.pathname;
    console.log("Current path:", path);

    if (path.endsWith('index.html') || path.endsWith('/') || path === '') {
        if (path.includes('/projects/')) {
            console.log("Initializing projects index page");
            populateAllProjects();
        } else if (path.includes('/blog/')) {
            console.log("Initializing blog index page");
            populateAllBlogPosts();
        } else {
            console.log("Initializing home page");
            populateFeaturedProjects();
            populateRecentBlogPosts();
        }
    } else if (path.includes('/projects/')) {
        console.log("Initializing project details page");
        populateProjectDetails();
    } else if (path.includes('/blog/')) {
        console.log("Initializing blog post page");
        populateBlogPost();
    } else if (path.includes('about.html')) {
        console.log("Initializing about page");
        populateAllProjects();
    }
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);
