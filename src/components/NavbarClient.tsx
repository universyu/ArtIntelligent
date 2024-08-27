'use client';

import React, { useState, useEffect } from "react";
import { ColorfulButton } from "@/components/common";

type NavbarClientProps = {
  topText: string;
  children: React.ReactNode;
};

const NavbarClient: React.FC<NavbarClientProps> = ({ topText, children }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setSticky(scrolled ? true : false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em 5em",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: sticky ? "linear-gradient(to right, rgba(212, 252, 121, 0.2), rgba(150, 230, 161, 0.2))" : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      <div>
        <ColorfulButton onClick={handleScrollToTop}>
          {topText}
        </ColorfulButton>
      </div>
      {children}
    </nav>
  );
};

export default NavbarClient;