import React from "react"
import Heading from "../Heading"

const About = () => (
  <div className="about">
    <Heading value="about" />
    <p>
      I'm a Software Engineer, and a graduate of Nashville Software School. I
      play the bass and sleep in East Nashville, TN.
    </p>
    <p>
      Born and raised in Tulsa, OK, I studied Music Composition at Oral Roberts
      University.My wife, Amber, is the greatest woman of all time.We moved to
      Nashville in the Fall of 2013 and discover more fun things every day.{" "}
    </p>
    <p>
      I have been a fan of the{" "}
      <a
        href="http://www.nba.com/pacers/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {" "}
        Indiana Pacers
      </a>{" "}
      my whole life. We are going to win a title. You just wait.
    </p>
  </div>
)

export default About
