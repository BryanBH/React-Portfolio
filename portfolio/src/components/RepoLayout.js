import React, { useState } from "react";
import Card from "../components/Card";
import Overlay from "../components/Overlay";
import Modal from "../components/Modal";

import { AnimatePresence } from "framer-motion";
export default function RepoLayout({ repo }) {
  const [open, setOpen] = useState(false);
  // const [currentRepo, setCurrentRepo] = useState({});
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <Card repo={repo} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal show={open} repo={repo} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
