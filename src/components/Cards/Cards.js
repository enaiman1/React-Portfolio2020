import React from "react";
import "./Cards.scss";



const Cards = props => (
    <>
   
   <div className="card">
   <div className="card__header">
       <h1 className="card__header__title">{props.card_data.pName}</h1>
   </div>
   <figure className="card__body">
  <img src={props.card_data.image} alt="sample67" className="card__body__img" />
  <figcaption className="card__body__caption">
    {/* <h3>Eleanor Fant</h3> */}
    <p>{props.card_data.description}</p>
    
  </figcaption> 
  <div className="card__body__icons">
    <a href={props.card_data.github} target="_blank" rel="noopener noreferrer" className="card__body__icons__link"><i className="fab fa-github fa-4x"></i></a>
    <a href={props.card_data.website} target="_blank" rel="noopener noreferrer" className="card__body__icons__link"><i className="fas fa-link fa-4x"></i></a> 

 
  </div>
</figure>
</div>
</>
);

export default Cards;