import React from "react";
import './Objects.css';

const Objects = () => {
  return (
    <div className="objects">
      <img
        className="object_rocket"
        src="/images/rocket.svg"
        alt="rock"
        width="40px"
      />
      <div className="earth-moon">
        <img
          className="object_earth"
          src="/images/earth.svg"
          alt="earth"
          width="100px"
        />
        <img
          className="object_moon"
          src="/images/moon.svg"
          alt=""
          width="80px"
        />
      </div>
      <div className="box_astronaut">
        <img
          className="object_astronaut"
          src="/images/astronaut.svg"
          alt="astronaut"
          width="140px"
        />
      </div>
    </div>
  );
};

export default Objects;
