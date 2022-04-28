import React from "react";
import { Figure } from "react-bootstrap";
import headshot from "../../assets/headshot.JPG";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Figure>
        <Figure.Image width={500} height={180} src={headshot} />
      </Figure>
      <p>
        My name is Kevin Lam. I am currently in a web development bootcamp. I
        have learned wireframes, visual design comprehensive layouts, and
        prototypes, visual UI, front-end development work, JavaScript, CSS,
        mySQL, JSON, Python, Ruby, MERN stack, jQuery, Node.js, MongoDB,
        React.js, and HTML. I am seeking to use my knowledge attained through
        this bootcamp to find a job and pursue a fulltime career!
      </p>
    </div>
  );
}
