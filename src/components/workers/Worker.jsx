import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , } from '@fortawesome/free-solid-svg-icons'
import './Worker.css'

const Worker = (props) => {
    const {name, img : image, popularity, salary} = props.worker;
    return (
        <div className="">
            <div class="card" style={{width: '20rem'}}>
              <div className="image w-75 mx-auto my-2">

              <img src={image} className='img-fluid mx-auto card-img-top' alt="" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Name : {name}</h5>
                <h5 className="card-title">Popularity : {popularity}</h5>
                <h5 className="card-title">salary :$ {salary}</h5>
                <a href="#" className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} />  add to cart</a>
                <div className="row">
                  
                  {/* <FontAwesomeIcon icon={}/>
                  <FontAwesomeIcon icon={}/>
                  <FontAwesomeIcon icon={}/> */}
                </div>
              </div>
            </div>
        </div>
    );
};

export default Worker;