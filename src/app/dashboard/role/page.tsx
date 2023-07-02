"use client";
import { Role } from "@/components/templates";
import React, { FormEvent, useState } from "react";

const RolePage = () => {
  const roles = ["User", "Admin"];

  const handleAddData = (data: string) => {
    console.log(data);
  };

  const handleDeleteData = (data: string) => {
    console.log(data);
  };

  return (
    <Role
      roles={roles}
      handleAdd={handleAddData}
      handleDelete={handleDeleteData}
    />
  );
};

export default RolePage;
