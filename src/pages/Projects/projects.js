import React from "react";
import Header from "../../component/header/header";
import "../../App.css";
import "../Projects/projects.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CallArBoatUser from "../../assets/videos/user.mp4";
import CallArBoatAdmin from "../../assets/videos/scanner.mp4";
import Profile from "../../assets/videos/profile-trashbin.mp4";
import CV from "../../assets/file/cv.pdf";

const Projects = () => {
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
      <div className="App-Projects">
        <Header />
        <p className="Title-Style">MY PROJECTS</p>
        <p className="Description-Style">
          These are some of the Projects i made from the school.
        </p>
        <div className="Card-Style-CallArBoat">
          <Card style={{ width: "18rem" }}>
            <video autoPlay loop muted playsInline style={{ width: "80%" }}>
              <source src={CallArBoatUser} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body>
              <Card.Title>
                <b>CALLARBOAT - USER</b>
              </Card.Title>
              <Card.Text>Callarboat User Application for Capstone42</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Role: <b>Programmer</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Tech-Stack: <b>React Native-Expo / Firebase</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Contribution: <b>FullStack</b>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="Card-Style-CallArBoatAdmin">
          <Card style={{ width: "18rem" }}>
            <video autoPlay loop muted playsInline style={{ width: "80%" }}>
              <source src={CallArBoatAdmin} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body>
              <Card.Title>
                <b>CALLARBOAT - ADMIN</b>
              </Card.Title>
              <Card.Text>Callarboat ADMIN Application for Capstone42</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Role: <b>Programmer</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Tech-Stack: <b>React Native-Expo / Firebase</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Contribution: <b>FullStack</b>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="Card-Style-Trashbin">
          <Card style={{ width: "18rem" }}>
            <video autoPlay loop muted playsInline style={{ width: "80%" }}>
              <source src={Profile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body>
              <Card.Title>
                <b>TRASHBIN - PROFILE</b>
              </Card.Title>
              <Card.Text>TRASHBIN Application for IT-ELEMSYS</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Role: <b>Programmer</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Tech-Stack: <b>React Native-Expo / Firebase</b>
              </ListGroup.Item>
              <ListGroup.Item>
                Contribution: <b>Made the Profile</b>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="Otherworks-Style">
          <h2>Other Works:</h2>
          <a
            href="https://drive.google.com/drive/folders/1oppCiwlK282jRAc8PJeqb2gUvdg4b4Y0?usp=sharing"
            className="Link-Style"
          >
            PALIBRO 📚
          </a>
          <p>PALIBRO Website for DBSYS-2</p>
          <p>
            Role: <b>Programmer</b>
          </p>
          <p>
            Tech-Stack: <b>PHP / XAMPP</b>
          </p>
          <p>
            Contribution: <b>FullStack</b>
          </p>
          <button className="DownloadCV-button" onClick={downloadCV}>
            Download My CV ⇩
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
