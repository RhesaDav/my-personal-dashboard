'use client'
import { UpdateProfile,UpdateProfileDataProps } from '@/components/templates';
import React, { useState } from 'react';

const page = () => {
  const handleSubmit = (data: UpdateProfileDataProps) => {

    // Perform submission logic here
    console.log("Profile updated:", data);
  };

  return (
    <UpdateProfile handleSubmit={handleSubmit}/>
  );
};

export default page;
