import React from "react";
import { useLoaderData } from "react-router";

const Favorites = () => {
  const { data: favorites } = useLoaderData();
  return (
    <div>
      {favorites.map((m) => (
        <div key={m.id}>
          <h1>{m.title}</h1>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
