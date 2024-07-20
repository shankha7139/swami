import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "./Modal";
import logo from "../assets/logo.png";

const NewNavbar = ({ isScrolled }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavContent>
        <LogoContainer onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" />
        </LogoContainer>
        <MenuToggle onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        <NavLinks isMobile={isMobile} showMobileMenu={showMobileMenu}>
          <NavItem onClick={() => navigate("/courses")}>Courses</NavItem>
          <NavItem onClick={() => navigate("/yogadhara")}>Yoga Dhara</NavItem>
          <NavItem onClick={() => navigate("/mediareport")}>
            Media Report
          </NavItem>
          <NavItem onClick={() => navigate("/about")}>About Us</NavItem>
          <NavItem onClick={() => navigate("/rupantranyatra")}>
            Rupayantran yatra
          </NavItem>
          <NavDropdown>
            <DropdownButton onClick={toggleDropdown}>Media</DropdownButton>
            <DropdownContent show={showDropdown}>
              <DropdownItem onClick={() => navigate("/gallary")}>
                Gallary
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/news")}>
                News
              </DropdownItem>
            </DropdownContent>
          </NavDropdown>
          <NavItem>
            <Modal />
          </NavItem>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default NewNavbar;

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#fff" : "rgba(255, 255, 255, 0.9)"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  img {
    height: 40px;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #02a66e;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    display: ${({ showMobileMenu }) => (showMobileMenu ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #02a66e;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavDropdown = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
`;

const DropdownContent = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
  }
`;

const DropdownItem = styled.a`
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f1f1;
    color: #02a66e;
  }
`;
