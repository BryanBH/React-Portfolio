import React, { useState } from "react";
import Card from "./Card";
import Overlay from "./Overlay";
import ResumeModal from "./ResumeModal";
import { AnimatePresence } from "framer-motion";

export default function ResumeLayout({ job }) {
  const [open, setOpen] = useState(false);
  const openJob = () => {
    setOpen(true);
  };

  const closeJob = () => {
    setOpen(false);
  };
  return (
    <>
      <Card job={job} open={openJob} />
      <AnimatePresence>
        {open && (
          <Overlay key={"overlay"}>
            <ResumeModal job={job} close={closeJob} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
