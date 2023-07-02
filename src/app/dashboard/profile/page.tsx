'use client'
import { Profile,ProfileProps } from '@/components/templates'
import React from 'react'

export default function page() {
  const profile:ProfileProps = {
    name: 'John Doe',
    specialist: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet.',
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: [{
      companyName: 'Company A',
      position: 'Software Engineer',
      startDate: '12-12-2012',
      endDate: '30-04-2020'
    }],
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    website: 'www.example.com',
  }
  return (
    <Profile {...profile}/>
  )
}