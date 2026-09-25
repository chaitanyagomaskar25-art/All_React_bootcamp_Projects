import React from 'react'
import { jobs } from './Data.js'


const JobCard = () => {
  return (
    <div className='JOBS'>
        <h1>Current Learning</h1>
      { jobs.map((job)=>{
        return(
            <div key={job.id} className='jobCard'>
                <h3> {job.title} { job.isNew && <span>HOT</span>}  </h3>
                
                <div> { job.company } | { job.location } </div>
                <p> { job.salary } </p>
            </div>
        )
      }) }
    </div>
  )
}

export default JobCard
