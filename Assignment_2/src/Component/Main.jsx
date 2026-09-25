import React from 'react'
import AllImages from './Main_Images/AllImages'

const Main = () => {
  return (
   <div className="row content">
    <br />
    <div className="float-right">
      <content-image>
        <a href="https://boxbot6.github.io/simple-website-template-with-banner-v3/images/test-image-1.jpg">
          <img
            src="https://boxbot6.github.io/simple-website-template-with-banner-v3/thumbnails/test-image-1-thumb.jpg"
            alt="Familiar Trees By G. S. Boulger"
            width={300}
          />
        </a>
      </content-image>
    </div>
    <div className="content-text">
      <p
        style={{
          fontFamily:
            'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
          fontSize: "x-large"
        }}
      >
        Place your Intro text here, place your text here, place your text here,
        place your text here, place your text here, place your text here, place
        your text here, place your text here, place your text here,{" "}
        <i>place your text here, </i>place your text here,{" "}
        <i>place your text here.</i>
      </p>
      <br />
      <h2>Images:</h2>
      <p>
        Click on each of the images below to open a high-res version. Visit the
        downloads page for a .zip file containing all of the hi-res images.
      </p>
      <br />
      <br />
    </div>
    <AllImages />
    {/* center closing */}
  </div>
  )
}

export default Main
