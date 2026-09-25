import React from 'react'
import { Link, useSearchParams } from 'react-router'
import { recipes } from './Data';

const Details = () => {
const [searchParam, setSearchParam] = useSearchParams();
const id = searchParam.get('recipe_id');
const recipe = recipes.find(r=> r.id == id)
if (!recipe) {
  return <h2>Recipe not found</h2>;
}

  return (
    <div>
        <Link to='/' >Back to Home</Link>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt="" />
    </div>
  )
}

export default Details
