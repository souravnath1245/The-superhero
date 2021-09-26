import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  //============================= Get Total Amount 
  let total = 0;
  for (let person of cart) {
    total = total + person.salary;
  }
  //========================== Get Person name to use handle Event 
  let personName = '';
  for (let person of cart) {
    personName += person.name;
  }
  return (
    <div>
      <div className="orderWorker text-center ms-2">
        <strong className="text-uppercase">Order Your favourite worker</strong>
        <hr />
        <div className="counterWorker my-4">
          <p>
            <strong className="workerStyle">
              {" "}
              Workers Add : {cart.length}
            </strong>
          </p>
          <h5>
            <strong className="workerStyle">Total Price : ${total}</strong>
          </h5>
          <h2 className="personName">
            { personName }
          </h2>
        </div>
        <button
          className="btn btn-danger text-capitalize"
          onClick={()=>alert("You have bought all the workers")}
        >
          buy now
        </button>
      </div>
    </div>
  );
};

export default Cart;
