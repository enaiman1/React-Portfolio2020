import React from "react";
import "./Tech.scss";
// import Button from "../Button/Button";
// import Techpic from "../../assets/img/catburger.png";

function Tech(props) {
  return (
    <section class="tech">
      {/* <figure class="tech__shape">
      <img src={Techpic} alt="Bio Pic of Eirc" class="tech__img" />
      <figcaption class="tech__caption">Skills</figcaption>
    </figure> */}
      <h3 class="heading-secondary">PROGRAMMING LANGUAGES & TOOLS</h3>
      <div class="tech__text">
        {/* <!-- HTML icon --> */}
        <i className="devicon-html5-plain-wordmark colored fa-4x"></i>

        {/* <!-- Css icon --> */}
        <i className="devicon-css3-plain-wordmark colored fa-4x"></i>

       {/* <!-- Sass icon --> */}
       <i className="devicon-sass-original colored fa-4x"></i>

        {/* <!-- JS icon--> */}
        <i className="devicon-javascript-plain colored fa-4x"></i>

        {/* <!-- mongo icon --> */}
        <i className="devicon-mongodb-plain-wordmark fa-4x"></i>

        {/* <!-- express icon --> */}
        <i className="devicon-express-original colored fa-4x"></i>

        {/* <!-- react icon--> */}
        <i className="devicon-react-original-wordmark colored fa-4x"></i>

        {/* <!-- node icon --> */}
        <i className="devicon-nodejs-plain-wordmark colored fa-4x"></i>

       {/* <!-- angular icon --> */}
        <i class="devicon-angularjs-plain colored fa-4x"></i>

         {/* <!-- jquery icon --> */}
         <i className="devicon-jquery-plain-wordmark colored fa-4x"></i>

 {/* <!-- mySql icon--> */}
 <i className="devicon-mysql-plain-wordmark colored fa-4x"></i>

 {/* <!-- Sequilize icon --> */}
 <i className="devicon-sequelize-plain-wordmark colored fa-4x"></i>
      </div>

      <h3 class="heading-secondary">Learning </h3>
      <div class="tech__learning">

{/* <!-- Python icon --> */}
<i class="devicon-python-plain colored fa-4x"></i>

{/* <!-- Docker icon --> */}
<i class="devicon-docker-plain-wordmark fa-4x"></i>

{/* <!-- php icon --> */}
<i className="devicon-php-plain colored fa-4x"></i>

{/* <!-- WordPress icon --> */}
<i className="devicon-wordpress-plain-wordmark colored fa-4x"></i>
      </div>

    </section>
  );
}

export default Tech;
