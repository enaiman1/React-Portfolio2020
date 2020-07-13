import React from "react";
import classes from "./Landing.module.scss";
import VideoSource from "../../assets/videos/lighthouse2.mp4";
import Poster from "../../assets/img/poster.png";
import Logo from "../../assets/img/logoWhite_shadow.png";
import Button from "../../components/Button/Button";

const Main = (props) => {
  return (
    <header className={classes.header}>
      <video playsInline="playsinline" autoPlay="autoplay" loop="loop" muted autoBuffer="autobuffer" className={classes.Video}>
        <source src={VideoSource} type="video/mp4" />
        <source src={VideoSource} type="video/ogg" />
        <img src={Poster} alt="View of a lighthouse at the beach"/>
        Your browser does not support the video tag.
      </video>
      <div className={classes.header__textBox}>
        <div className={classes.heading__primary}>
          <img src={Logo} alt="Eric Naiman logo" />
          <h1 className={classes.main__heading}>
            <span className={classes.main__heading__first}>Eric Naiman</span>
            <span className={classes.main__heading__second}>
           
              <div className={classes.main__heading__span}>
                Software Developer 
              </div>
              <div className={classes.main__heading__span}>Scrum Master </div>
              <div className={classes.main__heading__span}>Educator </div>
              <div className={classes.main__heading__span}>Collaborator</div>
            </span>
          </h1>
        </div>
      </div>{" "}
      <div className={classes.header__buttonBox}>
        <Button data__page="projects" onClick={props.changePage}>
          Projects
        </Button>
      </div>
      
    </header>
  );
};

export default Main;
