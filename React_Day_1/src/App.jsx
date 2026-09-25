// // import React, { useState } from "react";
// // import {
// //   Form,
// //   useLoaderData,
// //   redirect,
// // } from "react-router";

// // /* ---------------- LOADER ---------------- */

// // export async function booksLoader() {
// //   const res = await fetch("http://localhost:3000/books");
// //   return res.json();
// // }

// // /* ---------------- ACTION ---------------- */

// // export async function booksAction({ request }) {
// //   const formData = await request.formData();

// //   const intent = formData.get("intent");
// //   const id = formData.get("id");

// //   if (intent === "add") {
// //     await fetch("http://localhost:3000/books", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         title: formData.get("title"),
// //         author: formData.get("author"),
// //         price: formData.get("price"),
// //       }),
// //     });
// //   }

// //   if (intent === "update") {
// //     await fetch(`http://localhost:3000/books/${id}`, {
// //       method: "PATCH",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         title: formData.get("title"),
// //         author: formData.get("author"),
// //         price: formData.get("price"),
// //       }),
// //     });
// //   }

// //   if (intent === "delete") {
// //     await fetch(`http://localhost:3000/books/${id}`, {
// //       method: "DELETE",
// //     });
// //   }

// //   return redirect("/");
// // }

// // /* ---------------- COMPONENT ---------------- */

// // const Books = () => {
// //   const books = useLoaderData();

// //   const [editBook, setEditBook] = useState(null);

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h1>Book CRUD App</h1>

// //       {/* ADD / UPDATE FORM */}

// //       <Form method="post">
// //         <input
// //           type="hidden"
// //           name="id"
// //           defaultValue={editBook?.id || ""}
// //         />

// //         <input
// //           type="text"
// //           name="title"
// //           placeholder="Title"
// //           defaultValue={editBook?.title || ""}
// //           required
// //         />

// //         <input
// //           type="text"
// //           name="author"
// //           placeholder="Author"
// //           defaultValue={editBook?.author || ""}
// //           required
// //         />

// //         <input
// //           type="number"
// //           name="price"
// //           placeholder="Price"
// //           defaultValue={editBook?.price || ""}
// //           required
// //         />

// //         {editBook ? (
// //           <button
// //             type="submit"
// //             name="intent"
// //             value="update"
// //           >
// //             Update Book
// //           </button>
// //         ) : (
// //           <button
// //             type="submit"
// //             name="intent"
// //             value="add"
// //           >
// //             Add Book
// //           </button>
// //         )}
// //       </Form>

// //       <hr />

// //       {/* BOOK LIST */}

// //       {books.map((book) => (
// //         <div
// //           key={book.id}
// //           style={{
// //             border: "1px solid gray",
// //             padding: "10px",
// //             marginBottom: "10px",
// //           }}
// //         >
// //           <h3>{book.title}</h3>

// //           <p>Author: {book.author}</p>

// //           <p>Price: ₹{book.price}</p>

// //           {/* EDIT */}

// //           <button
// //             onClick={() => setEditBook(book)}
// //           >
// //             Edit
// //           </button>

// //           {/* DELETE */}

// //           <Form
// //             method="post"
// //             style={{
// //               display: "inline-block",
// //               marginLeft: "10px",
// //             }}
// //           >
// //             <input
// //               type="hidden"
// //               name="id"
// //               value={book.id}
// //             />

// //             <button
// //               type="submit"
// //               name="intent"
// //               value="delete"
// //             >
// //               Delete
// //             </button>
// //           </Form>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Books;

// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './store/store'
// import Counter from './Component/Counter'

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   )
// }

// export default App

// import React from "react";
// import "./App.css";
// import Product from "./Component/Product";
// import {
//   createBrowserRouter,
//   NavLink,
//   Outlet,
//   RouterProvider,
// } from "react-router";
// import { Provider, useSelector } from "react-redux";
// import store from "./store/store";
// import { addCustomRecipe } from "./store/features/ProductSlice";
// const Cart = React.lazy(() => import("./Component/Cart"));

// const Main = () => {
//   const cartNumber = useSelector((state) => state.cart.totalCartProducts);
//   return (
//     <div>
//       <nav>
//         <NavLink to="product">Product</NavLink> <br />
//         <br />
//         <NavLink to="cart">Cart</NavLink>
//         <p>Cart Items: {cartNumber} </p>
//       </nav>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const fetchProductLoder = async () => {
//   const res = await fetch("https://dummyjson.com/recipes");
//   return res;
// };

// const addRecipeAction = async ({ request }) => {
//   try {
//     const formData = await request.formData();

//     const name = formData.get("title");
//     const image = formData.get("image");

//     const newRecipe = {
//       id: Date.now(),
//       name: name,
//       image: image
//     };

//     store.dispatch(addCustomRecipe(newRecipe));

//     return null;
//   } catch (error) {
//     console.error("Form action failed:", error);
//     return null;
//   }

// };

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     HydrateFallback: () => <div>Loading app resources...</div>,
//     errorElement: <h1>Not Found</h1>,
//     children: [
//       {
//         path: "product",
//         element: <Product />,
//         loader: fetchProductLoder,
//         action: addRecipeAction,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//     ],
//   },
// ]);

// const App = () => {
//   return (
//     <Provider store={store}>
//       <RouterProvider router={route} />
//     </Provider>
//   );
// };

// export default App;


import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const App = () => {
  const fetchData = async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data;
  }

  const {data, isPending, isFetching, isError, error} = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
    refetchOnWindowFocus: false
    // refetchInterval: 3000
  })

  if(isError){
    return <h1>{error.message}</h1>
  }

  if(isPending){
    return <h1>Loading....</h1>
  }
  return (
    <div>
      {data.map(user=>(
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default App