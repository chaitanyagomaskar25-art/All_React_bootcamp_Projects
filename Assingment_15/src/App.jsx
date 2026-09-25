// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import Home from './pages/Home'
// import About from './pages/About'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'
// import "./App.css"
// import Header from './components/Header'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <BrowserRouter>
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="project" element={<Projects />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   <Footer />
//     </BrowserRouter>
//   )
// }

// import React, { useCallback, useMemo, useState } from "react"

// export default App

// import React, { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [debounced, setDebounced] = useState("");
//   const searchRef = useRef(null);
//   const [user, setuser] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("https://dummyjson.com/users");
//       const data = await res.json();
//       setuser(data.users);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     searchRef.current = setTimeout(() => {
//       setDebounced(search);
//     }, 500);

//     return () => {
//       clearTimeout(searchRef.current);
//     };

//   }, [search]);

//   return (
//     <div>
//       <h1>Search App</h1>
//       <input
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//         type="text"
//         placeholder="Search"
//       />

//       {user
//         .filter((u) =>
//           u.firstName.toLowerCase().includes(debounced.toLowerCase()),
//         )
//         .map((u) => (
//           <div key={u.id}>
//             <h3>{u.firstName}</h3>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default App;

// import React, {
//   useCallback,
//   useMemo,
//   useState,
// } from "react";

// const Child = React.memo(({ handleClick }) => {
//   console.log("Child Rendered");

//   return (
//     <div>
//       <button onClick={handleClick}>
//         Child Button
//       </button>
//     </div>
//   );
// });

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [dark, setDark] = useState(false);

//   // memoized function
//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   // memoized value
//   const expensiveValue = useMemo(() => {
//     console.log("Calculating...");
//     return count * 1000;
//   }, [count]);

//   return (
//     <div
//       style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//       }}
//     >
//       <h1>Count: {count}</h1>

//       <h2>{expensiveValue}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <button onClick={() => setDark(!dark)}>
//         Toggle Theme
//       </button>

//       <Child handleClick={handleClick} />
//     </div>
//   );
// };

// export default App;

// const Child = React.memo(({handleClick})=>{
//   console.log("child...");
//    return (
//     <div>
//       <button onClick={handleClick}>
//         Child Button
//       </button>
//     </div>
//   );

// })
// const App = ()=>{
//   const [count, setCount] = useState(0)
//   const [dark, setDark] = useState(false);
//   const handleClick = useCallback(()=>{
//     console.log("Clicked");

//   }, [])
//   const expensiveValue = useMemo(()=>{
//     console.log("Calcultatin...");
//     return count*1000;

//   }, [count])
//   return(
//     <div
//       style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//       }}
//     >
//       <h1>Count: {count}</h1>

//       <h2>{expensiveValue}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <button onClick={() => setDark(!dark)}>
//         Toggle Theme
//       </button>
//       <button onClick={handleClick}>Clicked</button>
//       <Child handleClick={handleClick} />
//     </div>
//   )
// }

// export default App;

// import React, { Suspense } from 'react'
// import { BrowserRouter, Link, Route, Routes } from 'react-router'

// const Home = React.lazy(()=>import("./pages/Home"))
// const About = React.lazy(()=>import("./pages/About"))

// const App = () => {
//   return (
//    <BrowserRouter>
//    <Link to="/">Home</Link>
//    <Link to="/about">About</Link>
//    <Suspense fallback={<h1>Loading........</h1>}>
//     <Routes>
//     <Route path='/' element={<Home />}/>
//     <Route path='/about' element={<About />}/>
//    </Routes>
//    </Suspense>
//    </BrowserRouter>
//   )
// }

// export default App

// import React from "react";
// import { useForm } from "react-hook-form";

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         placeholder="Enter Name"
//         {...register("name", {
//           required: "Name is required",
//           minLength: {
//             value: 5,
//             message: "Minimum 5 characters",
//           },
//         })}
//       />

//       {errors.name && <p>{errors.name.message}</p>}

//       <br />

//       <input
//         type="email"
//         placeholder="Enter Email"
//         {...register("email", {
//           required: "Email is required",
//         })}
//       />

//       {errors.email && <p>{errors.email.message}</p>}

//       <br />

//       <input type="submit" />
//     </form>
//   );
// };

// export default App;

// import React from "react";
// import { useForm } from "react-hook-form";

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const submited = (data) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(submited)}>
//       <input
//         type="text"
//         placeholder="Name"
//         {...register("name", {
//           required: "This field is required",
//           minLength: {
//             value: 3,
//             message: "At least 3 character should be there",
//           },
//         })}
//       />
//       {errors.name && <p>{errors.name.message}</p>}
//       <input type="email" placeholder="Email...." {...register("email", {
//         required: "This is required",

//       })} />
//       <input type="submit" />
//     </form>
//   );
// };

// export default App;

// import React, { useRef } from 'react'

// const App = () => {
//   const inputRef = useRef(null);
//   const handleClick = ()=>{
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter, Routes, Route, Link } from 'react-router'
// import Contact from "./pages/Contact"
// import About from "./pages/About"
// import Home from "./pages/Home"
// const App = () => {
//   return (
//     <BrowserRouter>
//     <nav>
//       <Link to="/" >Home</Link> <br />
//       <Link to="/about">About</Link> <br />
//       <Link to="/contact">Contact</Link>
//     </nav>
//     <Routes>
//       <Route path='/' element={<Home />}/>
//       <Route path='/about' element={<About />}/>
//       <Route path='/contact' element={<Contact />}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// import React, { useReducer } from "react";
//  const intialState = 0
//   const reducer = (state,action) => {
//     switch (action.type) {
//       case "INCREASE":
//         return state += 1;
//       case "DECREASE":
//         return state -= 1;
//       case "RESET":
//         return 0;
//       default:
//         throw new Error("Invalid action");
//     }
//   };
// const App = () => {
 
//   const [state, dispatch] = useReducer(reducer, intialState);
//   return (
//     <div>
//       <h1>Count: {state}</h1>
//       <button onClick={() => dispatch({ type: "INCREASE", })}>Increase</button>
//       <button onClick={() => dispatch({ type: "DECREASE", })}>Decrease</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };

// export default App;


