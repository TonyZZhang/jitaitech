import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                主页
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                关于我们
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                技术服务
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                应用场景
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                联系我们
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="" className="button btn project-btn">
                  <i className="fa fa-book"></i>立即体验
                </a>
                <a href="#contact" className="button btn github-btn">
                  <i className="fa fa-github"></i>留言咨询
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
