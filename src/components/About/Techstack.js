import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaPen, FaSearchDollar, FaBrain, FaLightbulb, FaChartLine, FaClock, FaComments, FaUserCheck, FaDesktop } from 'react-icons/fa';
// import "./Techstack.css";
import "../../../src/Techstack.css";

import { TbBrandGolang, TbSeo } from "react-icons/tb";
const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <TbSeo />
          <span className="icon-text">SEO</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaPen />
          <span className="icon-text">Writing</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaSearchDollar />
          <span className="icon-text">SEO Knowledge</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaBrain />
          <span className="icon-text">Content Strategy</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaLightbulb />
          <span className="icon-text">Creativity</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaChartLine />
          <span className="icon-text">Analytical Thinking</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaClock />
          <span className="icon-text">Time Management</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaComments />
          <span className="icon-text">Communication</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaUserCheck />
          <span className="icon-text">Audience Engagement</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-container">
          <FaDesktop />
          <span className="icon-text">Digital Content Creation</span>
        </div>
      </Col>
    </Row>
  );
};

export default Techstack;
