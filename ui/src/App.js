import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Disease from "./pages/Disease";
import Portfolio from "./pages/Portfolio";
import RupantranYatra from "./pages/RupantranYatra";
import AllPrograms from "./pages/AllPrograms";
import AllAwards from "./pages/AllAwards";
import Courses from "./pages/Courses";
import Error from "./pages/Error";
import CommingSoon from "./pages/CommingSoon";
import Course2 from "./pages/Course2";
import MediaReport from "./pages/MediaReport";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disease" element={<CommingSoon />} />
        <Route path="/yogadhara" element={<MediaReport />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/rupantranyatra" element={<RupantranYatra />} />
        <Route path="/allawards" element={<AllAwards />} />
        <Route path="/allprogs" element={<AllPrograms />} />
        <Route path="/course1" element={<Courses />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/treatment*" element={<CommingSoon />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
