'use client'
import React, { useState } from "react";

interface Technology {
  id: number;
  name: string;
}

interface TechnologyCheckboxProps {
  technology: Technology;
  isChecked: boolean;
  onChange: (technology: Technology, isChecked: boolean) => void;
}

const TechnologyCheckbox: React.FC<TechnologyCheckboxProps> = ({
  technology,
  isChecked,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="form-checkbox border rounded text-indigo-600"
        checked={isChecked}
        onChange={(e) => onChange(technology, e.target.checked)}
      />
      <span>{technology.name}</span>
    </label>
  );
};

export interface AddProjectProps {
  technologies: string[];
  handleSubmit: ({
    description,
    selectedTechnologies,
    title,
  }: AddProjectDataProps) => void;
}

export interface AddProjectDataProps {
  title: string;
  description: string;
  selectedTechnologies: string[];
}

export function AddProject({
  technologies,
  handleSubmit,
}: AddProjectProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );
  const [newTechnology, setNewTechnology] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelectTechnology = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedTechnologies(selectedOptions);
  };

  const handleAddTechnology = () => {
    if (newTechnology.trim() === "") {
      return;
    }
    setSelectedTechnologies([...selectedTechnologies, newTechnology]);
    setNewTechnology("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      selectedTechnologies.length === 0
    ) {
      setErrorMessage("Please fill in all fields");
    } else {
      // Perform submission logic here
      console.log("Project submitted:", {
        title,
        description,
        selectedTechnologies,
      });
      handleSubmit({
        title,
        description,
        selectedTechnologies,
      });
      // Reset form fields
      setTitle("");
      setDescription("");
      setSelectedTechnologies([]);
      setNewTechnology("");
      setErrorMessage("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Add Project</h2>
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Technologies
                </label>
                <div className="flex items-center">
                  <select
                    className="border border-gray-400 rounded w-full py-2 px-3 mr-2"
                    multiple
                    value={selectedTechnologies}
                    onChange={handleSelectTechnology}
                  >
                    <option disabled>Choose technologies</option>
                    {technologies.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type="text"
                    className="border border-gray-400 rounded py-2 px-3"
                    placeholder="Add technology"
                    value={newTechnology}
                    onChange={(e) => setNewTechnology(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
                    onClick={handleAddTechnology}
                  >
                    Add
                  </button>
                </div>
                {selectedTechnologies.length > 0 && (
                  <div className="mt-2">
                    <span className="text-gray-600">
                      Selected technologies:
                    </span>{" "}
                    {selectedTechnologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-300 text-gray-600 py-1 px-2 rounded-full text-sm inline-block ml-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
