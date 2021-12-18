import "./aboutme.scss";

export default function Aboutme() {

  const data = [
    {
      id: 1,
      title: "Professional development",
      img:
        "assets/professionalicon.png",
      desc:
      "On the professional side, I identify myself as a creative problem solver, a positive team player with the 'can-do' attitude, who tries to absorb as much knowledge as possible. These traits merged with my drive for learning, consistency and resilience, leading to the adoption of the lifelong learner attribute.",
      featured : true,
    },
    {
      id: 2,
      title: "Personal development",
      img:
        "https://icon-library.com/images/91-512_93303.png",
        //"https://icon-library.com/images/91f030359e.png",
      desc:
        "On the personal development side, I have built healthy habits to enhace my growth within all perspectives. My routine consists of reading, physical activities, meditation and journaling.",
      featured: true,
    },
  ];
  return (
    <div className="aboutme" id="aboutme">
      <h1>About Me</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}