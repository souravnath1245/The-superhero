import React, { useState, useEffect } from "react";
import Cart from "../carts/Cart";
import Worker from "../workers/Worker";
import "./Main.css";

const Main = () => {
  //=========================================== Using State 
  const [workers, setWorker] = useState([]);
  const [cart, setCart] = useState([]);

  //========================================== Using useEffect 
  useEffect(() => {
    fetch("./socialWorkers.json")
      .then((res) => res.json())
      .then((data) => setWorker(data));
  }, []);

  //============================================ Using HandleEvent 
  const handleAddToCart = (worker) => {
    const newCart = [...cart, worker];
    setCart(newCart);
  };


  // ========================================== Main Function Return
  return (
    <div className="main-container">
      <div className="row justify-content-between">
        <div className="col-7 workers p-0">
          {/*============================== working with Json Data to use Worker component */}
          {workers.map((worker) => (
            <Worker
              key={worker._id}
              addToCart={() => handleAddToCart(worker)}
              worker={worker}
            />
          ))}
        </div>
        <div className="col-3 p-0">
        {/*=================================== Using Cart Component  */}
            <Cart cart={cart}/>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
