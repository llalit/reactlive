import React from 'react';
import Card  from './Card';
import h2 from './images/h2.jpg';
import Sdata from './Sdata';
const Services= () => {
  return (
    <>
      <div className="my-5">
          <h1 className="text-center">Our Services </h1>
      </div>

      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">



    {Sdata.map((b,i)=>{

              return(
                  <>
                 <Card  id={i}
                link={b.link} 
                img={b.imgsrc} 
                title={b.title} 
                text={b.text}/>
</>
              ) 

    })}

                      </div>
                    </div>
                  </div>
              </div>



              
          
      
    </>
  );
}

export default Services;