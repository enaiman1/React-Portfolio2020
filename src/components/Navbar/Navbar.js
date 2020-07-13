// import React from "react";
import React from "react";
import "./Navbar.scss";


const Navbar = props =>  {
    return (
     <div data__page={props.data__page}
      onClick={props.onClick} className="navz__Btn">{props.children}</div>

    );
  }



export default Navbar;
