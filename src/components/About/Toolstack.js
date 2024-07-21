// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;


import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaWordpress, FaTrello, FaGoogleDrive, FaDropbox, FaSlack, FaBuffer, FaEvernote } from 'react-icons/fa';
// import './Toolsstack.css'; // Import your CSS file for custom styling
import "../../../src/Toolsstack.css";

const Toolsstack = () => {
  // Array of tools with corresponding icons
  const tools = [
    { icon: <FaWordpress />, text: 'WordPress' },
    { icon: <FaTrello />, text: 'Trello' },
    { icon: <FaGoogleDrive />, text: 'Google Drive' },
    { icon: <FaDropbox />, text: 'Dropbox' },
    { icon: <FaSlack />, text: 'Slack' },
    { icon: <FaBuffer />, text: 'Buffer' },
    { icon: <FaEvernote />, text: 'Evernote' },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className="tool-container">
            {tool.icon}
            <span className="tool-text">{tool.text}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Toolsstack;
