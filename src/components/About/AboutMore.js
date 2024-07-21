import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutMore() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Imagine content that not only captures attention but also converts curiosity into loyal customers. At [Your Business Name], we specialize in crafting compelling narratives that resonate with your audience, turning casual browsers into passionate advocates of your brand. </p>
            <br />

          <p style={{ textAlign: "justify" }}> Whether it's through engaging blogs, persuasive copy, or captivating social media posts, our content doesn't just inform – it ignites action. Elevate your brand presence today with content that walks, talks, and sells for your business."
          </p>
          <br />
          <ul>
            <li className="about-activity">
              <h2>Why Choose Us?</h2>
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> We Create High Quality Content.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> We Focus on Quantity & Well Organised Content.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> We Deliver On Time.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> Professional Team with 5+ Experience.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> Tailor-Made Content Strategies Aligned with Your Business Goals.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> Audience-tailored content strategies.
            </li>
            <li className="about-activity">
              <span class="tick" className="purple">&#10004;</span> SEO Optimized Content
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutMore;
