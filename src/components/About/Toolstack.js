import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaWordpress, FaTrello, FaGoogleDrive, FaDropbox, FaSlack, FaBuffer, FaEvernote } from 'react-icons/fa';
import "../../../src/Toolsstack.css";
import Grum from '../../Assets/grum.png';


const Toolsstack = () => {
  const tools = [
    { icon: <FaWordpress />, text: 'WordPress', url: 'https://wordpress.org/' },
    { icon: <FaTrello />, text: 'Trello', url: 'https://trello.com/' },
    { icon: <FaGoogleDrive />, text: 'Google Drive', url: 'https://drive.google.com/' },
    { icon: <FaDropbox />, text: 'Dropbox', url: 'https://www.dropbox.com/' },
    { icon: <FaSlack />, text: 'Slack', url: 'https://slack.com/' },
    { icon: <FaBuffer />, text: 'Buffer', url: 'https://buffer.com/' },
    { icon: <FaEvernote />, text: 'Evernote', url: 'https://evernote.com/' },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="tool-container">
              {tool.icon}
              <span className="tool-text">{tool.text}</span>
            </div>
          </a>
        </Col>
      ))}
      
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://grum.co/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="tool-container">
            <img src={Grum}className="img-fluid" alt="avatar" width={"100px"} height={"100px"}/>
            <span className="tool-text">Grum</span>
          </div>
        </a>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <a href="https://thebacklinksagency.com/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="tool-container">
            <span>𝗧</span>
            <span className="tool-text">The Backlinks Agency</span>
          </div>
        </a>
      </Col>

    </Row>
  );
};

export default Toolsstack;
