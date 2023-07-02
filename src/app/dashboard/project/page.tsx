'use client'
import { Project, type ProjectDataProps } from '@/components/templates';
import React from 'react'

type Props = {}

function page({}: Props) {
        const projects:ProjectDataProps[] = [
          {
            id: 1,
            title: "E-commerce Website",
            description: "Build an online store with payment integration",
            technologies: ["React", "Node.js", "MongoDB"],
          },
          {
            id: 2,
            title: "Task Management App",
            description: "Create a task management application",
            technologies: ["Vue.js", "Express", "PostgreSQL"],
          },
          {
            id: 3,
            title: "Weather Application",
            description: "Develop a weather forecast application",
            technologies: ["Angular", "Firebase"],
          },
        ];
  return <Project projects={projects}/>
}

export default page