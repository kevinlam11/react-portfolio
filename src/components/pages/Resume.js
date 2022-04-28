import React from "react";
import { Button } from "react-bootstrap";
import KevinLam from "../../assets/Kevin-Lam.pdf";

export default function Resume() {
  return (
    <div>
      <h1>RESUME Page</h1>
      <p>
        Talented developer in search of learning and growing within a team while
        implementing user interaction following client-approved mock-ups, such
        as wireframes, visual design comprehensive layouts, and prototypes.
        Bringing a keen eye for details, strong ability to implement mock-ups,
        and understanding of great user experience design. Experience in visual
        UI / front-end development work, JavaScript, CSS, mySQL, JSON, Python,
        Ruby, MERN stack, jQuery, Node.js, MongoDB, React.js, and HTML.
      </p>
      <Button variant="primary" href={KevinLam}>
        Resume Link
      </Button>
    </div>
  );
}
