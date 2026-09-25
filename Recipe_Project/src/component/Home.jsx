import React from "react";
import { recipes } from "./Data";
import { Link } from "react-router";

const Home = () => {
  return recipes.map((r) => (
    <div key={r.id}>
      <img src={r.image} alt="" />
      <h3>{r.name}</h3>
      <Link  to={`/fav?fav_recipe_id=${r.id}`}>Like</Link>
      <Link to={`/details?recipe_id=${r.id}`}>See more</Link>
    </div>
  ));
};

export default Home;
