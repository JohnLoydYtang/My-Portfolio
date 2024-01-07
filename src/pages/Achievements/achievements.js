import React from "react";
import Header from "../../component/header/header";
import "../../App.css";
import "../Achievements/achievement.css";
import Card from "react-bootstrap/Card";
import Merit from "../../assets/images/merit.jpg";
import Completion from "../../assets/images/completion.jpg";
import CV from "../../assets/file/cv.pdf";

const Achievements = () => {
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
      <div className="App-Achievements">
        <Header />
        <p className="Title-Style">MY ACHIEVEMENTS</p>
        <p className="Description-Style">
          These are some of the Achievements i got from the school.
        </p>
      </div>
      <div className="Merit-Style">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Merit} className="Card-Img-Style" />
          <Card.Body>
            <Card.Title style={{ fontSize: "30px" }}>
              <b>Certificate of Merit</b>
            </Card.Title>
            <Card.Text>
              Recognition for their outstanding performance in the course of the{" "}
              <b>Alliance Jumpstart Program AY 2023-2024</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="Completion-Style">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={Completion} className="Card-Img-Style" />
          <Card.Body>
            <Card.Title style={{ fontSize: "30px", width: "120%" }}>
              <b>Certificate of Completion</b>
            </Card.Title>
            <Card.Text>
              for succesfully completing the{" "}
              <b>Alliance Jumpstart Program AY 2023-2024</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <button className="Downloadcv-button" onClick={downloadCV}>
        Download My CV ⇩
      </button>
    </div>
  );
};

export default Achievements;
