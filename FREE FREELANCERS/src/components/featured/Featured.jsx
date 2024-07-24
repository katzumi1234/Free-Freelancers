import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span className="popular_space">Popular:</span>
            <button>Full Website React</button>
            <button>Logo Design</button>
            <button>Photo Edit</button>
            <button>WordPress</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
