'use client'
import React, { FormEvent, useState } from 'react';

export interface RoleProps {
    handleAdd: (roles:string) => void;
    handleDelete: (id:string) => void;
    roles: string[];
}

export function Role ({handleAdd,handleDelete,roles}:RoleProps) {
//   const [roles, setRoles] = useState(['Admin', 'User', 'Guest']);
  const [newRole, setNewRole] = useState('');

  const handleRoleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setNewRole(e.target.value);
  };

  const handleRoleAdd = (e:FormEvent) => {
    e.preventDefault();

    if (newRole.trim() === '') return;
    handleAdd(newRole)

    // setRoles([...roles, newRole]);
    setNewRole('');
  };

  const handleRoleDelete = (id:string) => {
    // setRoles(roles.filter((r) => r !== role));
    handleDelete(id)
  };

  return (
    <div className="py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Role Page</h2>
            <form onSubmit={handleRoleAdd}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">New Role</label>
                <div className="flex">
                  <input
                    type="text"
                    value={newRole}
                    onChange={handleRoleChange}
                    className="flex-grow mr-2 py-2 px-4 border border-gray-300 rounded"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Add Role
                  </button>
                </div>
              </div>
            </form>
            <ul className="space-y-4">
              {roles.map((role) => (
                <li
                  key={role}
                  className="flex items-center justify-between bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded"
                >
                  <span>{role}</span>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleRoleDelete(role)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};