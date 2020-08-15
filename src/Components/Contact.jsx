import React, { useState } from 'react';


const Contact = () => {
  const [data, setData] =  useState({
    fname:'',
    phone:'',
    email:'',
    message:'',
});




const dataset=(e)=>{
  e.preventDefault();

   const name=e.target.name;
    const value=e.target.value;

    setData((preValue)=>{
      return{
        ...preValue,
        [name]:value,
      } 
    }
    )}


  return (
    <>
      <div className="text-center">
        <h1>Contact</h1>
      </div>
      
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

         Name: {data.fname}
         <br/>Eamil: {data.email}
          <br/>Phone: {data.phone}
         <br/>Message: {data.message}

         <br/>
         <br/>
         
            <form onSubmit={dataset}>

            <div className="mb-3">
                <label className="form-label">Name:</label>
                <input type="text" className="form-control" onChange={dataset} name="fname" placeholder="Enter Your Name" value={data.fname}/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Phone</label>
                <input type="number" className="form-control" name="phone" onChange={dataset} placeholder="+917974xxxxxx" value={data.phone}/>
              </div>

              <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' onChange={dataset}  placeholder="name@example.com" value={data.email}/>
              </div>


              
              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" name="message" rows="3" onChange={dataset} placeholder="enter your query" value={data.message}></textarea>
              </div>

              <button className="btn btn-responsive btn-primary form-control">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Contact;