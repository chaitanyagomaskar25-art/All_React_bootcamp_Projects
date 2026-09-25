import React from 'react'
import ProjectsContent from '../components/ProjectsContent'
import FeaturedProjects from '../components/FeaturedProjects'
import AvaialableStatus from '../components/AvaialableStatus'

const Projects = () => {
  return (
    <div>
      <ProjectsContent />
      <FeaturedProjects />
      <AvaialableStatus />
    </div>
  )
}

export default Projects
