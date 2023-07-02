"use client";
import { User, UserDataProps } from "@/components/templates";
import { useListUser } from "@/service/user";
import React, { Fragment } from "react";

export default function Page() {
  const {data: users, isLoading} = useListUser()
  const userList:UserDataProps[] = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      status: "Active",
      createdAt: "2023-06-28",
      avatar: "/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      status: "Inactive",
      createdAt: "2023-06-29",
      avatar: "/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      status: "Active",
      createdAt: "2023-06-30",
      avatar: "/avatar/avatar3.png",
    },
  ];
  return (
    <User users={users} isLoading={isLoading}/>
  );
}
