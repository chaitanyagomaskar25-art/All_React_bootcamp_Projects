import React from "react";
import { useLoaderData, useSubmit } from "react-router";

const App = () => {
  const submit = useSubmit();
  const { data: movies } = useLoaderData();

  const handleClick = (movieId) => {
    submit({ id: Date.now(), movieId }, { method: "post" });
  };

  return (
    <div>
      {movies.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
          <p>{m.description}</p>
          <button onClick={() => handleClick(m.id)}>Favorite</button>
        </div>
      ))}
    </div>
  );
};

export default App;
