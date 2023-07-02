import React, { Fragment } from 'react'
import Image from 'next/image'

export interface UserDataProps {
  id: string | number;
  name: string;
  email: string;
  status: string;
  createdAt: string;
  avatar: string;
}

interface UserProps {
  users: UserDataProps[];
  isLoading?: boolean;
}

export function User({users,isLoading}: UserProps) {
  return (
    <Fragment>
      <div className=" min-h-screen py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">User List</h2>
              {isLoading ? <div>Loading ...</div> : !Array.isArray(users) ? [] : users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between bg-base-300 rounded-lg px-4 py-2 mb-2"
                >
                  <div className="flex items-center">
                    <Image
                      className="w-12 h-12 rounded-full mr-4"
                      src={!user.avatar ? '/avatar/avatar2.png' : user.avatar}
                      alt="Avatar"
                      height={100}
                      width={100}
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">{user.status}</p>
                    <p className="text-gray-600">{user.createdAt}</p>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}