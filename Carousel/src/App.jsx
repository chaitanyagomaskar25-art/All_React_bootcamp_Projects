import React, { useEffect, useRef, useState } from "react";
import "./App.css";
const images = [
  {
    img: "https://i.pinimg.com/736x/26/b5/7d/26b57d83ffe88423242202a7116f0817.jpg",
    alt: "",
    title: "Nature",
  },
  {
    img: "https://i1-e.pinimg.com/736x/80/02/14/8002148ef8c28685d3ee065ec282115d.jpg",
    alt: "",
    title: "Trees",
  },
  {
    img: "https://i1-e.pinimg.com/736x/37/2f/12/372f126764c23c7195af322813d007fa.jpg",
    alt: "",
    title: "Jungle",
  },
  {
    img: "https://i1-e.pinimg.com/736x/a3/b5/ac/a3b5acb9da5b7340c4c087bbe5806954.jpg",
    alt: "",
    title: "Flower",
  },
  {
    img: "https://i.pinimg.com/736x/84/7e/6c/847e6cbd3f5de3bbaec34ddb5149e340.jpg",
    alt: "",
    title: "Sea",
  },
  {
    img: "https://i.pinimg.com/736x/af/a2/9c/afa29c8fd1256ae4d38aca358d079645.jpg",
    alt: "",
    title: "Forest",
  },
  {
    img: "https://i.pinimg.com/736x/78/63/7e/78637ec9ce12ea5cefd89d3c2f400087.jpg",
    alt: "",
    title: "Water",
  },
  {
    img: "https://i.pinimg.com/736x/fc/c1/d9/fcc1d9bee56ba6659e1b04514e8ede3e.jpg",
    alt: "",
    title: "Air",
  },
];
const App = () => {
  const divs = images.length;

  const imageRef = useRef([]);
  const [currentImage, setCurrentImage] = useState(0);
  const handleRight = () => {
    setCurrentImage((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  };
  const handleLeft = () => {
    setCurrentImage((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    imageRef.current[currentImage].scrollIntoView({ behavior: "smooth" });
  }, [currentImage]);
  return (
    <div className="main">
      <button onClick={handleLeft}>Left</button>

      <div className="container">
        {images.map((img, idx) => (
          <div
            className="card"
            key={idx}
            ref={(el) => {
              imageRef.current[idx] = el;
            }}
          >
            <img className="img" src={img.img} alt={img.alt} />
            <div className="relative">
              <h3>{img.title}</h3> <br />
              <div className="spanParent">
                {Array(images.length)
                  .fill("")
                  .map((_, index) => (
                    <div
                      key={index}
                      className="spans"
                      style={{
                        backgroundColor:
                          currentImage === index ? "white" : "black",
                      }}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleRight}>Right</button>
    </div>
  );
};

export default App;
