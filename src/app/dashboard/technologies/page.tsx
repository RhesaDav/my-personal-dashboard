"use client";
import { Technologies, TechnologiesDataProps } from "@/components/templates";
import { useAddTechnologies, useDeleteTechnologies, useListTechnologies } from "@/service/technologies";
import React, { useState } from "react";

const TechnologiesListPage = () => {
  const addTechnologies = useAddTechnologies()
  const deleteTechnologies = useDeleteTechnologies()
  const {data: technologies, refetch} = useListTechnologies()
  // const technologies: TechnologiesDataProps[] = [
  //   {
  //     name: "React",
  //     description: "A JavaScript library for building user interfaces",
  //   },
  //   {
  //     name: "Node.js",
  //     description:
  //       "A JavaScript runtime built on Chrome's V8 JavaScript engine",
  //   },
  //   {
  //     name: "Vue.js",
  //     description:
  //       "A progressive JavaScript framework for building user interfaces",
  //   },
  // ];
  
  const handleAddData = async (data:TechnologiesDataProps) => {
    addTechnologies.mutate(data)
    refetch()
    // console.log(data)
    
  }

  const handleDeleteData = (id:string) => {
    deleteTechnologies.mutate(id)
    refetch()
  }

  return <Technologies handleAdd={handleAddData} handleDelete={handleDeleteData} technologies={technologies} />;
};

export default TechnologiesListPage;
