'use client'
import { AddUser, AddUserDataProps } from '@/components/templates';
import React, { useState } from 'react';

const AddUserPage = () => {

  const handleSubmit = (data:AddUserDataProps) => {
    console.log(data)
  };

  return (
    <AddUser handleSubmit={handleSubmit}/>
  );
};

export default AddUserPage;