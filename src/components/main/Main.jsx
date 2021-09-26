import React, { useState, useEffect } from "react";
import Worker from "../workers/Worker";
import "./Main.css";

const Main = () => {
  const [workers, setWorker] = useState([]);

  useEffect(() => {
    fetch("./socialWorkers.json")
      .then((res) => res.json())
      .then((data) => setWorker(data));
  }, []);
  return (
    <div className="main-container ">
      <div className="row justify-content-between">
        <div className="col-8 workers ">
          {workers.map((worker) => (
            <Worker key={worker._id} worker={worker} />
          ))}
        </div>
        <div className="col-3">
          <div className="orderWorker">
            <strong className='text-uppercase'>Order Your favourite worker</strong>
            <div className="counterWorker my-4">
              <p>
                <strong className="workerStyle"> Workers Add : 0</strong> 
              </p>
              <h5>
                <strong className="workerStyle">Total Price : $</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
