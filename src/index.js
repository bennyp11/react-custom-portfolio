import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Core from "./Core";
import Projects from "./routes/projects.js";
import AboutMe from "./routes/aboutme.js";
import Skills from "./routes/skills.js";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";


const rootElement = document.getElementById('root');
render(
  <BrowserRouter >
    <Routes>
      <Route path="/" element={<Core />} >
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="*" element={<main style={{ padding: "1rem"}}><p>This Route Doesn't Exist</p></main>} />
      </Route>
    </Routes>
  </BrowserRouter>
  
  ,rootElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
