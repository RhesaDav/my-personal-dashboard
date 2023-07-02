"use client";
import { Dashboard } from "@/components/templates";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";

type Props = {};

export default function page({}: Props) {
  return <Dashboard followers={12} projects={43} visitors={1253} />;
}
