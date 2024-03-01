import React, { useState } from "react";
import "./newNav.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import logo from "../assets/logo.png";
import styled from "styled-components";

export default function NewNavbar({ isScrolled }) {
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} navbar`}>
        <div className="container">
          <img
            className="logo"
            src={logo}
            alt=""
            onClick={() => navigate("/")}
          />
          <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
            {/* <a onClick={() => navigate("/courses")}>Courses</a> */}
            <div class="dropdown">
              <button class="dropbtn">
                Courses
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#" onClick={() => navigate("/course1")}>
                  Course 1
                </a>
                <a href="#" onClick={() => navigate("/course2")}>
                  Course 2
                </a>
              </div>
            </div>
            <a
              onClick={() => {
                navigate("/treatment");
              }}
            >
              Treatment
            </a>
            <a
              onClick={() => {
                navigate("/disease");
              }}
            >
              Diseases
            </a>
            <a
              onClick={() => {
                navigate("/yogadhara");
              }}
            >
              Yoga Dhara
            </a>
            <a
              onClick={() => {
                navigate("/");
              }}
            >
              About Us
            </a>
            <Modal />
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <ImCross /> : <FaBars />}
          </button>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  .logo {
    cursor: pointer;
  }
  button {
    margin: 3px;
    color: #460954;
    padding: 8px 12px 8px 12px;
    text-decoration: none;
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 500;
    background-color: #02a66e;
    color: #fff;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  .navbar {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 10;
    transition: all 0.2s ease-in-out;
  }
  a {
    font-weight: 300;
    margin: 0 5px;

    &:hover {
      color: #02a66e;
      font-weight: bolder;
    }
  }
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Style the dropdown button to fit inside the topnav */
  .dropdown .dropbtn {
    font-weight: 300;
    border: none;
    outline: none;
    color: black;
    margin: 0 5px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  /* Style the dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Style the links inside the dropdown */
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Add a dark background on topnav links and the dropdown button on hover */
  .dropdown:hover .dropbtn {
    color: #02a66e;
    font-weight: bolder;
  }

  /* Add a grey background to dropdown links on hover */
  .dropdown-content a:hover {
    color: #02a66e;
  }

  /* Show the dropdown menu when the user moves the mouse over the dropdown button */
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
