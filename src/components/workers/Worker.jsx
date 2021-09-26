import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Worker.css'


const Worker = (props) => {
    const {name, img : image, popularity, salary,Country} = props.worker;
  
    return (
        <div className="">
            <div class="card" style={{width: '20rem', background:'#f2f2f2'}}>
              <div className="image w-75 mx-auto my-2">

              <img src={image} className='img-fluid mx-auto card-img-top' alt="" />
              </div>
              <div className="card-body text-left">
                <h5 className="card-title">Name : {name}</h5>
                <h5 className="card-title">Popularity : {popularity}</h5>
                <h5 className="card-title">Country : {Country}</h5>
                <h5 className="card-title" > Salary :$ {salary}</h5>
                <div className="button my-3">
                <a onClick={props.addToCart} className="btn btn-primary btn-sm text-center"><FontAwesomeIcon icon={faShoppingCart} />  add to cart</a> 
                </div>
              </div>
            </div>
        </div>
    );
};

export default Worker;