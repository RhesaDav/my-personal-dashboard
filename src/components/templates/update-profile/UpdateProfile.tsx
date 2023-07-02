'use client'
import React, { useState } from "react";

export interface UpdateProfileDataProps {
  name: string;
  occupation: string;
  about: string;
  experience: Experience[];
  skills: string[];
}

interface Experience {
  company: string;
  position: string;
  duration: string;
}

export interface UpdateProfileProps {
  handleSubmit: (profileData: UpdateProfileDataProps) => void;
}

export function UpdateProfile({ handleSubmit }: UpdateProfileProps) {
  const [name, setName] = useState("John Doe");
  const [occupation, setOccupation] = useState("Software Developer");
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae leo id lacus accumsan scelerisque. Curabitur nec orci elementum, gravida velit id, malesuada ipsum. Aliquam eu lacus metus."
  );
  const [experience, setExperience] = useState([
    {
      company: "Company A",
      position: "Software Developer",
      duration: "2020 - Present",
    },
    {
      company: "Company B",
      position: "Front-end Developer",
      duration: "2018 - 2020",
    },
  ]);
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    duration: "",
  });
  const [newSkill, setNewSkill] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform submission logic here
    const profileData: UpdateProfileDataProps = {
      name,
      occupation,
      about,
      experience,
      skills,
    };

    handleSubmit(profileData);
  };

  const handleAddExperience = () => {
    setExperience((prevExperience) => [...prevExperience, newExperience]);
    setNewExperience({ company: "", position: "", duration: "" });
  };

  const handleAddSkill = () => {
    setSkills((prevSkill) => [...prevSkill, newSkill]);
    setNewSkill("");
  };
  return (
    <div className="py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Update Profile</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  About
                </label>
                <textarea
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  rows={4}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <ul className="text-gray-700 mb-2">
                  {experience.map((exp, index) => (
                    <li key={index} className="mb-1">
                      <div className="font-semibold">{exp.company}</div>
                      <div className="text-sm">
                        {exp.position} ({exp.duration})
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="border border-gray-400 rounded py-2 px-3 flex-grow"
                    placeholder="Company"
                    value={newExperience.company}
                    onChange={(e) =>
                      setNewExperience((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    className="border border-gray-400 rounded py-2 px-3 flex-grow"
                    placeholder="Position"
                    value={newExperience.position}
                    onChange={(e) =>
                      setNewExperience((prev) => ({
                        ...prev,
                        position: e.target.value,
                      }))
                    }
                  />
                  <input
                    type="text"
                    className="border border-gray-400 rounded py-2 px-3 flex-grow"
                    placeholder="Duration"
                    value={newExperience.duration}
                    onChange={(e) =>
                      setNewExperience((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAddExperience}
                  >
                    Add Experience
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <ul className="text-gray-700 mb-2">
                  {skills.map((sk, index) => (
                    <li key={index}>{sk}</li>
                  ))}
                </ul>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="border border-gray-400 rounded py-2 px-3 flex-grow"
                    placeholder="Skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAddSkill}
                  >
                    Add Skill
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
