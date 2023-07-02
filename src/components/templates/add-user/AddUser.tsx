'use client'
import React, { FormEvent, useState } from 'react'

export interface AddUserDataProps {
  name: string;
  email: string;
  skills: string;
}

interface AddUserProps {
  handleSubmit: ({name,email,skills}:AddUserDataProps) => void;
}

export function AddUser({handleSubmit}: AddUserProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmitUser = (e:FormEvent) => {
    e.preventDefault()
    handleSubmit({
      email,
      name,
      skills
    })
  }

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Add User</h2>
            <form onSubmit={handleSubmitUser}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  placeholder="Enter user's name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  placeholder="Enter user's email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Skills
                </label>
                <textarea
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  rows={4}
                  placeholder="Enter user's skills"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}