import { useState } from "react";
import "./skills.scss";
import React from "react";
import ProgressBar from "./progress-bar.component.jsx";



export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const data = [
    {
      
      id: "1",
      icon: "https://static.thenounproject.com/png/2473268-200.png",
      title: "Technical skills",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      name1: "HTML", bgcolor1: "#430e55", completed1: 80,
      name2: "CSS", bgcolor2: "#430e55", completed2: 60,
      name3: "JavaScript", bgcolor3: "#430e55", completed3: 70,
      name4: "ReactJs", bgcolor4: "#430e55", completed4: 60,
      name5: "Python", bgcolor5: "#430e55", completed5: 70,
    },
    {
      
      id: "2",
      icon: "https://static.thenounproject.com/png/1714291-200.png",
      title: "Soft skills",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        name1: "Adaptability", bgcolor1: "#430e55", completed1: 80,
        name2: "Communication", bgcolor2: "#430e55", completed2: 70,
        name3: "Creative", bgcolor3: "#430e55", completed3: 90,
        name4: "Problem Solving", bgcolor4: "#430e55", completed4: 80,
        name5: "Teamwork", bgcolor5: "#430e55", completed5: 75,
    },
    
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 0 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1: 0);
  };

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                    <ProgressBar name={d.name1} bgcolor={d.bgcolor1} completed={d.completed1} />
                    <ProgressBar name={d.name2} bgcolor={d.bgcolor2} completed={d.completed2} />
                    <ProgressBar name={d.name3} bgcolor={d.bgcolor3} completed={d.completed3} />
                    <ProgressBar name={d.name4} bgcolor={d.bgcolor4} completed={d.completed4} />
                    <ProgressBar name={d.name5} bgcolor={d.bgcolor5} completed={d.completed5} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/down.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("right")}
      />
      <img
        src="assets/down.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
