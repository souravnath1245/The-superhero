import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Worker.css'


const Worker = (props) => {
  // ======================================== Object Destructaring 
    const {name, img : image, popularity,Age,experience, salary,Country} = props.worker;
  
    return (
        <div className="">
            <div class="card" style={{width: '20rem', background:'#f2f2f2'}}>
              <div className="image w-75 mx-auto my-2">
              {/*========================================= Using Card Image  */}
              <img src={image} className='img-fluid mx-auto card-img-top' alt="" />
              </div>
              <div className="card-body text-left">
                {/*====================================== json Data Declaration  */}
                <h5 className="card-title">Name : {name}</h5>
                <h5 className="card-title">Age : {Age}</h5>
                <h5 className="card-title">Popularity : {popularity}</h5>
                <h5 className="card-title">Experience : {experience}</h5>
                <h5 className="card-title">Country : {Country}</h5>
                <h5 className="card-title" > Salary :$ {salary}</h5>
                <div className="button my-3">
                 {/* =======================================Using Card Button  */}
                <a onClick={props.addToCart} className="btn btn-primary btn-sm text-center text-capitalize"><FontAwesomeIcon icon={faShoppingCart} />  add to cart</a> 
                </div>
              </div>
            </div>
        </div>
    );
};

export default Worker;