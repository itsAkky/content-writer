import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Liam Hall </span>
            from <span className="purple"> United Kingdom.</span><br /><br />
            I produce strategic marketing content for start-ups, tech companies, and VC Firms. I help content marketers, product marketers, and executives tell stories, achieve online presence, and build brands that communicate with their users. 
          </p><br />

          <p style={{ textAlign: "justify" }}>
            <h4>What Sets Me Apart:</h4>
            <span className="purple">Strategic Storytelling:</span> I captivate and engage audiences through powerful storytelling, fostering meaningful connections and brand loyalty.<br />
            <span className="purple">Expertise in Tech and Innovation:</span> I translate complex tech ideas into clear, accessible content that resonates with tech-savvy audiences.<br />
            <span className="purple">Versatile Content Creation:</span> From blog posts to social media campaigns, I deliver impactful content that drives results across various platforms.
            <span className="purple">Data-Driven Insights:</span> I leverage data analytics to inform content strategies, ensuring each piece resonates with target audiences and achieves measurable objectives.
          </p>

          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Networking Events
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Business Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ textAlign: "justify" , color: "rgb(155 126 172)" }}>
            "Crafting words that inspire and resonate with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Akshay</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
