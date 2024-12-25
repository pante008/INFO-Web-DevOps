import React, { useState } from 'react';
import './About.css';

function About() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Library Management System',
      description: 'Using Java, Swing, and SQL to build a Library Management System Tool for two users: admin and user.',
      labels: ['Java', 'Swing', 'SQL'],
      image: '/src/assets/Library.jpg',
      link: 'https://github.com/pante008/Library_Management_System_Application',
    },
    {
      title: 'Blog with posts and comments',
      description: 'Using React, Vite, and Supabase to build a Blog with posts and comments tool for active interactions and features.',
      labels: ['React', 'Vite', 'Supabase'],
      image: '/src/assets/Blog.jpg',
      link: 'https://github.com/pante008/FinalProject/tree/main/%40latest',
    },
  ];

  const handleTagClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) =>
          project.labels.includes(selectedCategory)
        );

  return (
    <div className="about-container">
      <div className="sidebar" role="complementary">
        <div className="profile-pic">
          <img src="/src/assets/profile.jpg" alt="Profile picture for Ekta Pant profile on about us page" />
        </div>
        <h4 className="profile-title">Graduate Student</h4>
        <p className="profile-name">Ekta Pant</p>
        <div className="contact-info">
          <p><img src="/src/assets/Location.png" className="contact-icon" alt="Location of Ekta Pant on about me page" /><span className="label"> Seattle, WA</span></p>
          <p><img src="/src/assets/Phone.png" className="contact-icon" alt="Phone number of Ekta Pant on about me page" /><span className="label"> +1 206-261-7189</span></p>
          <p><img src="/src/assets/email.png" className="contact-icon" alt="Email of Ekta Pant on about me page" /><span className="label"> pant.e@northeastern.edu</span></p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ekta-pant" className="social-button">LinkedIn</a>
          <a href="https://github.com/pante008" className="social-button">GitHub</a>
        </div>
        <div className="public-profiles">
          <h5>Public Profiles</h5>
          <ul>
            <li> Leetcode</li>
            <li> Kaggle</li>
            <li> Docker</li>
            <li> Tableau</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="summary-container" role="region" aria-labelledby="summary-heading">
          <h2 id="summary-heading">Summary</h2>
          <p>
          I'm a global thinker and globe trotter with a passion to learn how, currently diving deep into the world of technology. With a unique blend of business acumen and engineering expertise, I bring over 4 years of experience in fintech, IT, and data-driven decision-making to the table. From performing financial analysis to building machine learning models and crafting dynamic web apps, I’m equally comfortable analyzing financial reports and deploying code to the cloud.          
          </p>
          <ul>
            <li>A passion for problem-solving.</li>
            <li>A healthy understanding of technology.</li>
            <li>A cross-functional mindset.</li>
            <li>Hands-on technical proficiency in tools.</li>
            <li>Results-driven: Flawless financial reporting for a €18 million entity.</li>
          </ul>
        </div>

        <div className="projects-container" role="region" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <div className="project-tags">
            {['All', 'Gen AI', 'ML', 'SQL', 'Excel', 'Tableau', 'AWS', 'HTML, CSS and JavaScript', 'Java', 'React'].map((category) => (
              <button
                key={category}
                className={`project-tag ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleTagClick(category)}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-image-placeholder">
                  <img src={project.image} alt={project.title} width={220} height={200} />
                </div>
                <div className="project-info">
                  <h3 className="bold-text">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-labels">
                    {project.labels.map((label) => (
                      <span className="label" key={label}>{label}</span>
                    ))}
                  </div>
                  <a href={project.link} className="view-project-btn">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills" role="region" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <ul>
            <li><strong>Data Analysis:</strong> Cleaning, Manipulation, EDA</li>
            <li><strong>Statistical Analysis:</strong> Hypothesis Testing</li>
            <li><strong>Programming:</strong> Python, Java, R</li>
          </ul>
        </div>

        <div className="testimonials-container" role="region" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading">Testimonials</h2>
          <p className="testimonial">
            "Working with Ekta on year-end audit was a remarkable experience. She has exceptional dedication."
            - Tomas Gonzalez
          </p>
          <p className="testimonial">
            "I strongly endorse Ekta Pant for her exceptional problem-solving skills."
            - Michele Bierset
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
