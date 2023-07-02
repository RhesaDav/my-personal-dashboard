'use client'
import React from "react";
import { SwitchTheme } from "../switch-theme/SwitchTheme";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {};

export const Header = (props: Props) => {
  const router = useRouter()
  const logoutHandler = () => {
    signOut({
      redirect: true,
      callbackUrl: '/'
    })
  }
  return (
    <div className="navbar bg-base-200 px-10">
      <div className="flex-1">
        <div className="flex gap-2">
        <a className="btn btn-ghost normal-case text-xl">RhesaDav</a>
        </div>
      </div>
      <div className="flex-none gap-2">
        <SwitchTheme />
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src="/avatar/avatar2.png" alt="icon" width={100} height={100} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={logoutHandler}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
