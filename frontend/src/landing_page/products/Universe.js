import React from 'react';

function Universe() {
    return (  
         <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Logos Grid */}
      <div className="row text-center">

        {/* Row 1 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxWidth: "160px" }}
          />
          <p className="text-muted">Algo &amp; strategy platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">Options trading platform</p>
        </div>

        {/* Row 2 */}
        <div className="col-md-4 mb-5">
          <img
            src="/media/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-3"
            style={{ maxWidth: "180px" }}
          />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-3"
            style={{ maxWidth: "160px" }}
          />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxWidth: "140px" }}
          />
          <p className="text-muted">Insurance</p>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary px-4 py-2 fs-5">
          Sign up now
        </button>
      </div>
    </div>
    );
}

export default Universe;