import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Business Marketing Wordsmith",
          "Fueling Business Growth Through Content",
          "Content Marketer for Business Growth",
          "Crafting Compelling Brand Stories",
          "Online Brand Growth Expert",
          "Driving Online Success with Strategic Content",
          // "Software Developer",
          // "Freelancer",
          // "MERN Stack Developer",
          // "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
