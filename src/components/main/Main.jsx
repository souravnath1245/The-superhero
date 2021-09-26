import React, { useState, useEffect } from "react";
import Cart from "../carts/Cart";
import Worker from "../workers/Worker";
import "./Main.css";

const Main = () => {
  const [workers, setWorker] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./socialWorkers.json")
      .then((res) => res.json())
      .then((data) => setWorker(data));
  }, []);

  const handleAddToCart = (worker) => {
    const newCart = [...cart, worker];
    setCart(newCart);
  };
  return (
    <div className="main-container">
      <div className="row justify-content-between">
        <div className="col-7 workers p-0">
          {workers.map((worker) => (
            <Worker
              key={worker._id}
              addToCart={() => handleAddToCart(worker)}
              worker={worker}
            />
          ))}
        </div>
        <div className="col-3 p-0">
            <Cart cart={cart}/>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
