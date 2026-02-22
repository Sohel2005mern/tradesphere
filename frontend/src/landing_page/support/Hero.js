import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top bar */}
      <div id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      {/* Main content */}
      <div className="row supportContent">
        {/* Left */}
        <div className="col-md-6">
          <h1 className="supportTitle">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
          />

          <div className="supportLinks">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* Right */}
        <div className="col-md-6">
          <h1 className="supportTitle">Featured</h1>
          <ol className="featuredList">
            <li>
              <a href="">
                Current Takeovers and Delisting – January 2024
              </a>
            </li>
            <li>
              <a href="">
                Latest Intraday leverages – MIS &amp; CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
