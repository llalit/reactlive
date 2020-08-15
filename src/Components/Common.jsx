import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Common = (props)=> {
  return (
    <>
      <section id='header' className="d-flex align-items-center">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">

                  <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                        <h1>
                            {props.name}
                         <strong className="brand-name"> KumarTechnical </strong>
                        </h1>

                        <em className="my-3">
                          We are the team of talented developers making website
                        </em>  
                        <div className="mt-3">
                            <NavLink to={props.visit}  className="btn-get-started">
                              {props.btname}
                            </NavLink>
                        </div>
                  </div>
                  <div className="col-sm-5 col-lg-order-1 order-lg-2 header-img">
                    <img src={props.img} className="img-fluid animated" alt="header animated image" />
                  </div>
              </div>
              </div>
            </div>
          </div>
      </section>
      
    </>
  );
}

export default Common;