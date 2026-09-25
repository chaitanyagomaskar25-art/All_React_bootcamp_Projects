import React from 'react'

const Header = () => {
  return (
    <div className="row header">
    <div className="header-banner">
      {/* The banner background image is shown here from the style.css class="header-banner" where its location is specified so that it works across multiple pages without having to be updated on each page every time a change is made. (a good size is 1600 x 400 - cropable patterns and images work best to allow for different sized displays) */}
      <div className="logo-button">
        <a
          href="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/demo-logo.png"
          download=""
          style={{ color: "lightgray", textDecoration: "none" }}
        >
          <img
            style={{ verticalAlign: "top" }}
            src="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/demo-logo.png"
            alt="logo image"
            height="60px"
          />
        </a>
      </div>
      <nav className="header-menu">
        <ul className="tab-container">
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "gray",
                fontWeight: 700,
                paddingLeft: 0,
                marginLeft: "-24px"
              }}
              href="index.html"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "gray" }}
              href="page-about/index.html"
            >
              About
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "gray" }}
              href="page-downloads/index.html"
            >
              Downloads
            </a>
          </li>
          {/* Code for expanding search box below (google is used as a default - add homepage link to search your own site) */}
          <li className="search-wrapper">
            <form action="https://www.google.com/search" className="search">
              <input
                className="search"
                type="search"
                name="q"
                placeholder="Search Google"
                required=""
              />
              <button type="submit">
                <i className="search-icon-gray" />
              </button>
              {/* or you could use: <img src="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/search-icon-gray.png" height="18px"/> instead of css base64 <i> */}
            </form>
          </li>
        </ul>
      </nav>
      <div>
        {/* Add your banner image here */}
        <img
          style={{ marginTop: "-5px" }}
          src="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/banner-image.png"
          width="100%"
        />
      </div>
      {/* You can also add a div here for some heading text
			<div style="margin-top:38px;">
				<h1 style="color: black; font-family: georgia, garamond, serif; font-size: 40px; text-align: left; margin-left: 50px; margin-right: 50px;">
				Heading (h1) - THIS IS A SIMPLE HTML/CSS WEBSITE TEMPLATE WITH A BANNER FOR HOSTING ON GITHUB
				</h1>
			</div> */}
    </div>
  </div>
  )
}

export default Header
