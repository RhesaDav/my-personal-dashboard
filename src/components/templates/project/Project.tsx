import { Button } from "@/components/elements";
import React from "react";

interface ProjectProps {
    projects:ProjectDataProps[]
}

export interface ProjectDataProps {
    id: number;
    title: string;
    description: string;
    technologies: string[];
}

export function Project({projects}: ProjectProps) {
  return (
    <div className="py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Project List</h2>
              <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
                  Create Project
                </button>
              </div>
            </div>
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-base-300 rounded-lg px-4 py-2 mb-2"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="mt-2">
                  <span className="text-gray-600">Technologies:</span>{" "}
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-base-100 text-base-300 font-semibold py-1 px-2 rounded-full text-sm inline-block ml-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end mt-4 gap-5">
                  <Button variant="primary" >View</Button>
                  <Button variant="secondary" >Edit</Button>
                  {/* <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2">
                    View
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
                    Edit
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
