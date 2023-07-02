import React from "react";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'

interface TableProps {
  headers?: Array<string>;
  data?: Array<Record<string, any>>;
}

export const Table: React.FC<TableProps> = ({ headers = [], data = [] }) => {
  const isEmpty = data.length === 0;

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead className="bg-base-300">
          {headers.length > 0 && (
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th></th>
            </tr>
          )}
        </thead>
        <tbody className="h-56">
          {isEmpty ? (
            <tr>
              <td colSpan={headers.length + 1}>
                  No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image src={item.avatar} alt="Avatar" height={100} width={100}/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.firstName}</div>
                      <div className="text-sm opacity-50">{item.lastName}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>{item.status}</td>
                <td>{item.assignedTo}</td>
                <td className="flex gap-2">
                  <button className="btn btn-square btn-ghost">
                    <EyeIcon className="w-5" />
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <TrashIcon className="w-5" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
