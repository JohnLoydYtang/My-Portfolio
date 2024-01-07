import React from "react";
import Header from "../../component/header/header";
import "../../App.css";
import "../Skills/skills.css";
import CV from "../../assets/file/cv.pdf";

const Skills = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "JohnLoydCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App">
      <div className="App-Skills">
        <Header />
        <p className="Title-Style">MY SKILLS</p>
        <p className="Description-Style">
          These are some of the languages i learned from the school and some
          projects.
        </p>
        <div className="Skill-List-Style">
          <h1>TECHNICAL SKILLS</h1>
          <h4 className="h4-style">Languages</h4>
          <ul className="ul-style">
            <li>REACTJS = ⚫⚫◯◯◯</li>
            <li>REACT NATIVE-EXPO = ⚫⚫⚫◯◯</li>
            <li>HTML = ⚫⚫⚫◯◯</li>
            <li>CSS = ⚫⚫◯◯◯</li>
            <li>JAVASCRIPT = ⚫◯◯◯◯</li>
            <li>PHP = ⚫⚫◯◯◯</li>
          </ul>
          <h4 className="h4-style">Databases</h4>
          <ul className="ul-style">
            <li>Firebase = ⚫⚫◯◯◯</li>
            <li>Xampp = ⚫⚫⚫◯◯</li>
          </ul>
        </div>
        <div className="Interpersonal-List-Style">
          <h1 className="h1-2-style">INTERPERSONAL SKILLS</h1>
          <ul className="ul-style">
            <li>Patience</li>
            <li>Hard-Worker</li>
            <li>Positive Attitude</li>
            <li>Time Management</li>
          </ul>
          <button className="Download-button" onClick={downloadCV}>
            Download My CV ⇩
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
