'use client'
import { AddProject, AddProjectDataProps } from '@/components/templates'
import React from 'react'

function page() {
  const technologies: AddProjectDataProps[] = [
    {
      title: 'React App Project',
      description: 'Enim est eiusmod do officia veniam irure ut incididunt labore in elit voluptate.',
      selectedTechnologies: ['Javascript','Typescript']
    }
  ]

  const handleSubmitProject = (data:AddProjectDataProps) => {
    console.log(data)
  }
  return (
    <AddProject technologies={['Python','Javascript','Typescript']} handleSubmit={handleSubmitProject}/>
  )
}

export default page