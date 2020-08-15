import React from 'react';
import { NavLink } from 'react-router-dom';

const Card= (props) => {
  return (
    <>
        <div key={props.id} id={props.id} className="col-md-4 col-10 mx-auto gy-4">
<div className="card" style={{width:'22rem'}}>
    <img src={props.img} className="card-img-top" alt={props.img} />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
      <NavLink to={props.link} className="btn btn-primary">know more</NavLink>
    </div>
  </div>  
</div>
      
    </>
  );
}

export default Card;