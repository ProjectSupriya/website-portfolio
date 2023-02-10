import React from "react";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "HTML",
    },
    {
      id: 2,
      heading: "CSS",
    },
    {
      id: 3,
      heading: "JavaScript",
    },
    {
      id: 4,
      heading: "React Js",
    },
    {
      id: 5,
      heading: "Wordpress",
    },
    {
      id: 6,
      heading: "Bootstrap",
    },
  ]);
  return (
    <div className="projects">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="projects__box">
                  {info.icon}
                  <div className="projects__box-header">{info.heading}</div>
                  <div className="projects__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
