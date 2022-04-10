import React from "react";
import { Collapse } from "react-collapse";
import { useState } from "react";
import ControlledAccordions from "./Accordin/Accordin";
import { Divider } from "@mui/material";

const LeftSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <aside className="py-5 bg-slate-800">
      <h2 className="text-2xl  text-white mb-4">All Sports</h2>
      <Divider />
      <ControlledAccordions />
    </aside>
  );
};

export default LeftSidebar;
