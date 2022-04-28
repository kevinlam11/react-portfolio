import React from "react";
import { Card, Button } from "react-bootstrap";
import tagAlong from "../../assets/tagAlong.png";
import portfolio from "../../assets/portfolio.png";
import myAnimeList from "../../assets/myAnimeList.png";
import passwordGenerator from "../../assets/passwordGenerator.png";
import JavascriptQuiz from "../../assets/JavascriptQuiz.png";
import Calendar from "../../assets/Calendar.png";

const projectsData = [
  {
    img: tagAlong,
    title: "Tag Along",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/tag_along",
    deployed: " https://limitless-cove-90207.herokuapp.com/",
  },
  {
    img: portfolio,
    title: "Portfolio",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/Kevins-Portfolio",
    deployed: "https://kevinlam11.github.io/Kevins-Portfolio/",
  },
  {
    img: myAnimeList,
    title: "My Anime List",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/MyAnimeList-API-Project1",
    deployed: "https://kevinlam11.github.io/MyAnimeList-API-Project1/",
  },
  {
    img: passwordGenerator,
    title: "Password Generator",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/Random-password-generator-",
    deployed: "https://kevinlam11.github.io/Random-password-generator-/",
  },
  {
    img: JavascriptQuiz,
    title: "Javascript Quiz",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/Javascript-Quiz",
    deployed: "https://kevinlam11.github.io/Javascript-Quiz/",
  },
  {
    img: Calendar,
    title: "Calendar",
    body: "lorem ipsum dolor sit amet",
    repoLink: "https://github.com/kevinlam11/My-Event-Calender",
    deployed: "https://kevinlam11.github.io/My-Event-Calender/",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>PORTFOLIO Page</h1>

      {projectsData.map((project) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.body}</Card.Text>
            <Button variant="primary" href={project.deployed}>
              Links Deployed
            </Button>
            <Button variant="primary" href={project.repoLink}>
              Repo
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
