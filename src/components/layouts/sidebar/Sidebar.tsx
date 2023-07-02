'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

export const Sidebar = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const routeArr = [
    {
      name: "Dashboard",
      linkTo: "/dashboard",
    },
    {
      name: "User",
      linkTo: "/dashboard/user",
    },
    {
      name: "Project",
      linkTo: "/dashboard/project",
    },
    {
      name: "Profile",
      linkTo: "/dashboard/profile",
    },
    {
      name: "Role",
      linkTo: "/dashboard/role",
    },
    {
      name: "Technologies",
      linkTo: "/dashboard/technologies",
    },
  ];

  return (
    <div className="h-screen">
      <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
        {routeArr.map((item, index) => (
          <li key={index}>
            <Link
              className={`${pathname === item.linkTo ? "bg-base-100" : ""}`}
              href={item.linkTo}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
