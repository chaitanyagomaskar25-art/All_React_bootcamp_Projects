import React, { Suspense } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router'
const Home = React.lazy(()=>import("./components/Home"))
const Movie = React.lazy(()=>import('./components/Movie'))
const Details = React.lazy(()=>import("./components/Details"))
const App = () => {
  return (
  <BrowserRouter>
  <Suspense fallback={<h1>Loading.....</h1>}>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="about" element={<Home />}/>
    <Route path="movies" element={<Movie />}/>
    <Route path="movies/details" element={<Details />}/>
  </Routes>
  </Suspense>
  </BrowserRouter>
  )
}

export default App
