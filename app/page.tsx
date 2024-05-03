"use client";
import React, { FC, useState } from "react";
import Home from "./about/page";
import Heading from "./utils/Heading";
import Header from "@/components/Header/Header";
import Hero from "@/components/Route/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false)
  const [activeItem,setActiveItem] = useState(0)
  return (
    <div>
      <Heading
        title="Gloxad Academy"
        description="Gloxad Academy is an online learning platform for students to learn from experienced teachers in their field of study"
        keywords="Programming, Aws, Online class"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero/>
    </div>
  );
};

export default Page;
