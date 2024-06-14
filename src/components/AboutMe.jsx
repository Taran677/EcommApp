import React from "react";

function AboutMe() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="display-3">About Me</h2>
          <p className="lead">
            Hi there! I am Taranveer Singh, a Bachelor's in Technology student
            in Computer Science and Engineering at Guru Nanak Dev University. I
            am passionate about web development, and this is one of my projects, made using <span className="lead links"><a target="blank" href="https://getbootstrap.com/">Bootstrap</a></span>, <span className="lead links"><a target="blank" href="https://fakestoreapi.com/docs">fakeStoreAPI</a></span> and <span className="lead links"><a target="blank" href="https://react.dev/">ReactJs</a></span>.
          </p>
        </div>
        <div className="col-md-6 imgcol">
          <img
            src="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="img-fluid rounded-circle image-me"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
