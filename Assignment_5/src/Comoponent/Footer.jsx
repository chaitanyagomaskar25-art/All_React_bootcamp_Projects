import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-container">

    <div className="footer-left">
      <h2>DevJobs</h2>
      <p>Find jobs in Frontend, Backend, DevOps, AI/ML and more.</p>
      <p>Locations: Remote, Bangalore, Delhi, Mumbai, Pune, Hyderabad</p>
    </div>

    <div className="footer-section">
      <h4>Job Roles</h4>
      <ul>
        <li>Frontend</li>
        <li>Backend</li>
        <li>DevOps</li>
        <li>AI/ML</li>
        <li>Fullstack</li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Technologies</h4>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>React</li>
        <li>Django</li>
        <li>Docker</li>
      </ul>
    </div>

    <div className="footer-right">
      <h4>About</h4>
      <p>Browse latest jobs posted recently and find your perfect role.</p>
      <p>Full Time • Part Time • Contract • Internship</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 DevJobs Platform</p>
  </div>
</footer>
  )
}

export default Footer
