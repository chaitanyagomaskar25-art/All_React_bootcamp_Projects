import React from 'react'
import { user } from './Data.js'

const JobBoard = () => {
   const {name, role, bio, isAvailable } = user

  let hiring = false;
  if(isAvailable === true){
    hiring = <p className="true" >Hiring Me</p>
  } else{
    hiring = <p className="false">Not Looking</p>

  }
  return (
   <div className="section1">
            <h1> {name} </h1>
            <h3> { role } </h3>
            <p> { bio } </p>
            {hiring}
        </div>
  )
}

export default JobBoard
