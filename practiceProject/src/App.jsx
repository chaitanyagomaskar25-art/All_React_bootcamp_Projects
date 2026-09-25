import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className="top">
          <div className="logo">
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0k7REX1QoJlHoPcHhIo3g0LKqRggvzk94WANRPEOVLw&s" alt="" />
          </div>
          <div className="academy">academy</div>
        </div>
        <h1>Track your students</h1>
        <p className='para'>Bring W3Schools into your classroom.</p>
        <div className="classes">
          <div className="topOfClasses">
            <h3>Your Class</h3>
            <p className='active'>12 Active</p>
          </div>
          <ul>
            <li><div className="circle">SM</div> <h3>Sarah M.</h3> <p>93%</p> <div className="progressbar"><div className="highlighed"></div></div></li>
            <li><div className="circle">Jk</div> <h3>James K.</h3> <p>93%</p> <div className="progressbar"><div className="highlighed"></div></div></li>
            <li><div className="circle">MC</div> <h3>Michel C.</h3> <p>93%</p> <div className="progressbar"><div className="highlighed"></div></div></li>
          </ul>
        </div>
        <button id="btn">Learn More</button>
      </div>
    </>
  )
}

export default App
