// import React from "react";
// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
//   useLoaderData,
// } from "react-router";

// const App = () => {
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       errorElement: <GlobalError />,

//       children: [
//         {
//           path: "home/:id",
//           element: <Home />,
//           loader: async (abc) => {
//             // console.log(request);
//             // console.log(params);
//             console.log(abc);

//             const res = await fetch(
//               "https://jsonplaceholder.typicode.com/users",
//             );

//             return res;
//           },
//           children: [
//             { path: "about", element: <About /> },
//             { path: "profile", element: <Profile /> },
//           ],
//         },
//         {
//           path: "contact",
//           element: <Contact />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={route} />;
// };

// export default App;

// const RootLayout = () => {
//   return (
//     <div>
//       Fron page
//       <Outlet />
//     </div>
//   );
// };

// const GlobalError = () => {
//   return (
//     <div>
//       <h1>Error</h1>
//       <p>Something went wrong or this page does not exist.</p>
//     </div>
//   );
// };

// const Home = () => {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     <div>
//       <h1>Home</h1>
//       <ul>
//         {data.map(d=>(
//           <li key={d.id}>{d.name}</li>
//         ))}
//       </ul>
//       <Outlet />
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//     </div>
//   );
// };

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact</h1>
//     </div>
//   );
// };

// const Profile = () => {
//   return (
//     <div>
//       <h1>Profile</h1>
//     </div>
//   );
// };

import React from "react";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css"
import { Routes, Route } from "react-router";
import RoadmapPage from "./pages/RoadmapPage";
const App = () => {
  return (
    <div>
      <DetailsPage />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="feedback/:id" element={<DetailsPage />}/>
          <Route path="feedback/:id/edit" element={<DetailsPage />}/>
          <Route path="roadmap" element={<RoadmapPage />}/>
          <Route path="add" element={<HomePage />}/>
          <Route path="*" element={<HomePage />}/>
        </Routes> 
      </main>
    </div>
  );
};

export default App;
