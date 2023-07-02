'use client'
import React, { useState } from 'react'

export interface TechnologiesDataProps {
  id: string;
  name: string;
  description: string;
}

interface TechnologiesProps {
  technologies: TechnologiesDataProps[];
  handleAdd: ({description,name}:TechnologiesDataProps) => void;
  handleDelete: (id:string) => void;
}

export function Technologies({handleAdd,handleDelete,technologies}: TechnologiesProps) {
  // const [technologies, setTechnologies] = useState([
  //   { name: 'React', description: 'A JavaScript library for building user interfaces' },
  //   { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
  //   { name: 'Vue.js', description: 'A progressive JavaScript framework for building user interfaces' },
  // ]);
  const [newTechnology, setNewTechnology] = useState({id:'', name: '', description: '' });

  const handleTechnologyChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewTechnology({ ...newTechnology, [e.target.name]: e.target.value });
  };

  const handleTechnologyAdd = (e:React.FormEvent) => {
    e.preventDefault();

    if (newTechnology.name.trim() === '') return;
    handleAdd(newTechnology)
    // setTechnologies([...technologies, newTechnology]);
    setNewTechnology({id:'', name: '', description: '' });
  };

  const handleTechnologyDelete = (id:string) => {
    handleDelete(id)
    // setTechnologies(technologies.filter((t) => t.name !== technology.name));
  };
  return (
    <div className="py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Technologies List Page</h2>
            <form onSubmit={handleTechnologyAdd}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">New Technology</label>
                <div className="flex">
                  <input
                    type="text"
                    name="name"
                    placeholder="Technology Name"
                    value={newTechnology.name}
                    onChange={handleTechnologyChange}
                    className="flex-grow mr-2 py-2 px-4 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="description"
                    placeholder="Technology Description"
                    value={newTechnology.description}
                    onChange={handleTechnologyChange}
                    className="flex-grow mr-2 py-2 px-4 border border-gray-300 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Add Technology
                  </button>
                </div>
              </div>
            </form>
            <ul className="space-y-4">
              {technologies.map((technology) => (
                <li
                  key={technology.name}
                  className="bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{technology.name}</span>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleTechnologyDelete(technology.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <p className="text-gray-600">{technology.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}