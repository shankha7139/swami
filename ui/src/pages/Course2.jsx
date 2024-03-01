import React, { useState } from "react";
import styled from "styled-components";
import NewNavbar from "../components/NewNavbar";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import CourssSelect from "../components/CourseSelect";
import HeroCourse from "../components/HeroCourse";

export default function Courses() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      <NewNavbar isScrolled={isScrolled} />
      <HeroCourse />
      <h1>COURSE2</h1>
      <CourssSelect />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
