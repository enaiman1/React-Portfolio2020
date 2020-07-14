// import React, { Component } from "react";
import React from 'react';
import classes from "./Portfolio.module.scss";
import VideoSource from "../../assets/videos/lightbulbs1.mp4";
import Project from "./projectData";
import Button from "../../components/Button/Button";
import Cards from "../../components/Cards/Cards";

const Portfolio = props =>{
  return (
    <header className={classes.project}>
      <video playsInline="playsinline" autoPlay="autoplay" loop="loop" muted autoBuffer="autobuffer" className={classes.Video}>
        <source src={VideoSource} type="video/mp4" />
        <source src={VideoSource} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className={classes.project__title}>
      <h3>Projects</h3>
      </div>
      <div className={classes.project__cardBox}>
        {Project.map((Project) => (
          <Cards key={Project.id} card_data={Project} />
        ))}
      </div>
      <div className={classes.project__buttonBox}>
      <Button data__page="landing" onClick={props.changePage} >
          Home
        </Button>
        
      </div>
    </header>
    
  );
}
console.log(<Button />)
// class Portfolio extends Component {
//   state = {
//     Project,
//   };

//   render() {
//     return (
//       <header className={classes.header}>
//         <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
//           <source src={VideoSource} type="video/mp4" />
//           <source src={VideoSource} type="video/ogg" />
//           Your browser does not support the video tag.
//         </video>

//         <div className={classes.header__textBox}>
//           {this.state.Project.map((Project) => (
//             <Cards key={Project.id} card_data={Project} />
//           ))}
//         </div>
//         <div className={classes.header__buttonBox}>
//         <Button >
          
//             Projects
    
            
//           </Button>
//         </div>
//       </header>
//     );
//   }
// }

export default Portfolio;
