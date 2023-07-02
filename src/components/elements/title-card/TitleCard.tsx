import React, { ReactNode } from "react";
import { Button } from "../button/Button";

interface Props {
  children?: ReactNode;
}

export const TitleCard = ({ children }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-2">
        <h1 className="text-xl font-semibold text-base-content">User</h1>
        <div className="flex gap-3 justify-center items-center">{children}</div>
      </div>
      <div className="divider mt-2"></div>
    </div>
  );
};
