import Footer from "../footer/Footer";
import "./navbar.css";

// framer motion
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 120) {
      setHide(true);
    } else if (latest > 120) {
      setHide(false);
      setScrolled(true);
    } else if (latest < 120) {
      setScrolled(false);
    }
  });

  const toggler = {
    open: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="20"
        viewBox="0 0 29 20"
        fill="none"
      >
        <path
          d="M18.1523 1L27.1523 9.99998L18.1523 19"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.94652 10.0001H26.9004"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    close: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="20"
        viewBox="0 0 35 20"
        fill="none"
      >
        <path
          d="M1 1H33.4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 10H33.4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M1 19H33.4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  const navbarVariants = {
    open: {
      backgroundColor: "var(--gray)",
      transition: "1s",
    },
    close: {
      transition: "1s",
    },

    hide: {
      y: "-100%",
      transition: "1s",
    },

    show: {
      y: 0,
      transition: "1s",
    },
  };

  return (
    <motion.div
      className={scrolled ? "navbar text scrolled-down" : "navbar text"}
      animate={isOpen ? "open" : "close" && hide ? "hide" : "show"}
      variants={navbarVariants}
    >
      <div className="navbar-wrapper">
        <div className="navbar-brand">
          <a href="#">Ramadhani</a>
          <div className="toggler" onClick={() => setOpen(!isOpen)}>
            {isOpen ? toggler.open : toggler.close}
          </div>
        </div>
        <div
          className={
            isOpen
              ? "links-wrapper collapse-menu active"
              : "links-wrapper collapse-menu"
          }
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
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
