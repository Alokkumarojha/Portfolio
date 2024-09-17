import React from "react";

const Home = () => {
  return (
    <div className="item container">
      {/* Main Content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="rl-01.webp"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="display-5 fw-bold text-body-emphasis">
            Hi, I'm Alok Kumar Ojha
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              I’m a passionate Web Developer, skilled in building interactive
              web applications using modern technologies like React, JavaScript,
              and CSS.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
