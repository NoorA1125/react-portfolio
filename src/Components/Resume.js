import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    //Education 
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    //Skillset
    const skills = this.props.data.skills.map(function(skills){
      const projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  <p>{skills.description}</p>
               </div>
      });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
        {/* <Slide left duration={1300}> -- Not working prooerly right now, image logo issues, ruines design. Will work on after BC.
          <div className="row skill">

            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>

            <div>
              <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
              <ul className="bgrid-quarters s-bgrid-thirds cf">
                {skills}
              </ul>
            </div>
          </div>
        </Slide> */}
      </section>
    );
  }
}

export default Resume;
