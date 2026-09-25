import React from "react";
import { Link, useSearchParams } from "react-router";
import { recipes } from "./Data";

const Fav = () => {
  const [searchParam] = useSearchParams();

  const id = searchParam.get("fav_recipe_id");

  const r = recipes.find(r=>r.id == id)

  if (!r) {
    return <h2>No favorite recipes found</h2>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>

        <div key={r.id}>
          <h2>{r.name}</h2>

          <img src={r.image} alt="" />
        </div>
    </div>
  );
};

export default Fav;