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

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>药物靶点预测系统</span>
              </h1>
            </div>
			
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
				<div>
			     药物靶标分析软件总共分为三大模块，
				 它们分别是：药物靶标数据预处理模块，药物靶标模型训练模块，以及药物靶标预测模块。
				 药物靶标数据预处理模块是对原始的训练数据进行分类，用以得到数据训练时比较清晰的数据。
				 药物靶标模型训练模块是用数据预处理后的数据，
				 采用机器学习的方法，根据数据的规律，运用深度卷积网络，得到药物与靶标的结合性分析模型。
				 药物靶标预测模块根据药物靶标训练系统得到的模型，将新的药物作为输入，预测药物分子能否与靶标结合。
				</div>
				</div>
              </div>
            </div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
