import React from 'react'

const Header = () => {
  return (
    <>
      <header className="main-header">
        <nav className="navbar container">
          <div className="logo">
            Job<span>Dev</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#browse">Browse Jobs</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#resources">Resources</a></li>
            <li className="btn-login"><a href="#login">Log In</a></li>
            <li className="btn-cta"><a href="#signup">Sign Up Free</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="container">
          <div className="hero-badge">Trusted by 10,000+ Developers</div>
          <h1 className="hero-title">Connecting Code <br/>With <span>Opportunity.</span></h1>
          <p className="hero-subtitle">
            The specialized job board for modern software engineers. 
            Discover verified roles in <strong>Frontend</strong>, <strong>Backend</strong>, and <strong>DevOps</strong>.
          </p>
          <div className="hero-stats">
            <span><strong>800+</strong> New Jobs</span>
            <span><strong>150+</strong> Remote Roles</span>
            <span><strong>24h</strong> Avg. Response</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header