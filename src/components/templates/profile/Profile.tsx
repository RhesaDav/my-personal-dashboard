"use client";
import Image from "next/image";
import React from "react";

export interface ProfileProps {
  name: string;
  specialist: string;
  description: string;
  skills: string[];
  experience: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
  }[];
  email: string;
  phone: string;
  website: string;
}

export function Profile({
  name,
  specialist,
  description,
  skills,
  email,
  experience,
  phone,
  website,
}: ProfileProps) {
  return (
    <div className="py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <Image
                src="/next.svg"
                alt="avatar"
                height={100}
                width={100}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600">{specialist}</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className="px-6 py-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="text-gray-700">
              {skills.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="px-6 py-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <ul className="text-gray-700">
              {experience.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="mb-1 font-semibold">{item.companyName}</div>
                    <div className="text-sm">
                      {item.position} ({item.startDate} - {item.endDate})
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-6 py-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-700">
              <li className="flex items-center mb-2">
                <svg
                  className="w-4 h-4 mr-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8zm0 0V10" />
                </svg>
                {email}
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-4 h-4 mr-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 9L12 2 2 9h9v13h2V9h9z" />
                </svg>
                {phone}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                {website}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}