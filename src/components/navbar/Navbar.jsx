import Footer from "../footer/Footer";
import "./navbar.css";

// framer motion
import { motion } from "framer-motion";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggler = {
    open: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="28"
        viewBox="0 0 38 28"
        fill="none"
      >
        <path
          d="M23.6008 1L36.1523 13.5515L23.6008 26.103"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M0.999806 13.5517H35.8008"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    close: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="19"
        viewBox="0 0 32 19"
        fill="none"
      >
        <path
          d="M1 1H31"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M1 9.33334H31"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M1 17.6667H31"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    ),
  };

  const wrapperVariants = {
    open: {
      x: 0,
      display: "block",
      transition: {
        type: "ease",
        ease: "easeInOut",
        duration: 0.6,
        delay: 0,
      },
    },
    close: {
      x: "100%",
      display: "none",
      transition: {
        type: "ease",
        ease: "easeInOut",
        duration: 0.6,
        display: { delay: 0.6 },
      },
    },
  };
  return (
    <motion.div
      className="navbar text"
      animate={
        isOpen ? { backgroundColor: "#9D9D9D" } : { background: "transparent" }
      }
    >
      <div className="navbar-brand">
        <a href="#">Ramadhani</a>
        <div className="toggler" onClick={() => setOpen(!isOpen)}>
          {isOpen ? toggler.open : toggler.close}
        </div>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={isOpen ? "open" : "close"}
        variants={wrapperVariants}
        transition={{ type: "ease", ease: "easeInOut" }}
        className="navbar-wrapper collapse-menu"
      >
        <div className="nav-links">
          <div className="nav-item">
            <a href="#">Home</a>
          </div>
          <div className="nav-item">
            <a href="#">About</a>
          </div>
          <div className="nav-item">
            <a href="#">Services</a>
          </div>
          <div className="nav-item">
            <a href="#">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#">Skills</a>
          </div>
          <div className="nav-item">
            <a href="#">Contacts</a>
          </div>
        </div>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
