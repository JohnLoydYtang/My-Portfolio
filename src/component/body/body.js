import React from "react";
import ProfileImage from "../../assets/images/Profile.jpg";
import "../body/body.css";
import CV from "../../assets/file/cv.pdf";

const Body = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "JohnLoydCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="App-Body">
      <div className="App-Sentence">
        <h1 className="H1-Style">I AM JOHN LOYD M. YTANG </h1>
        <h2 className="H2-Style">BSIT-STUDENT</h2>
        <p className="p-Style">
          I'm passionate about learning new technologies,
          <br />
          putting them to use in practical situations,
          <br />
          and gaining experience as a BSIT student.
          <br />I like to play video games after school.
          <br /> My objective is to provide software solutions that improve
          society.
        </p>
        <button className="Download-Style" onClick={downloadCV}>
          Download My CV ⇩
        </button>
      </div>
      <img src={ProfileImage} alt="Profile" className="Profile-Style" />
    </div>
  );
};

export default Body;
