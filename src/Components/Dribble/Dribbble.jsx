import React from 'react';
import './Dribbble.css'; 
import { useNavigate } from 'react-router-dom';
const Dribbble = () => {
  const navigate=useNavigate();
  return (
    
    <div>
      <header>
        <ul>
          <li><a href="#">Find designers</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Go Pro</a></li>
        </ul>
        <img className="logo" src="/images/Dribbble-Logo.png" alt="" />
        <div className="menu">
          <input type="search" name="" id="" placeholder="Search..." />

          <div className="btn-group">
            <button className="login" onClick={navigate}></button>
            <button className="signup">Sign up</button>
          </div>
        </div>
      </header>
      <div id="main">
        <div id="page1">

          <a className="btn-page1" href="#">Over 3 million ready-to-work creatives!</a>
          <h1>The world’s destination for design</h1>
          <p>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>

          <button className="signup"><a href="/login">Get Started</a></button>

        </div>
        <div id="page2">
          <div className="scroll">
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
            <Card name="Abi" role="Illustrator" tags={["Graphic Design", "Illustration"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ name, role, tags }) => {
  return (
    <div className="card">
      <img src={"https://cdn.dribbble.com/userupload/13787503/file/original-cfd45ef6f5dbf28008805ccb86bb7de9.png?resize=400x300&vertical=center"} alt="" />
      <div className="userinfo">
        <div className="userD">
          <h4>{name}</h4>
          <h4>{role}</h4>
          <ul className="tags">
            {tags.map((tag, index) => (
              <li key={index} className="tagLi">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dribbble;