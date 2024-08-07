import "./homePage.scss";
import SearchBar from "../../components/searchBar/searchBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const stats = [
    { id: 1, name: "Transactions every 24 hours", value: "44 million" },
    { id: 2, name: "Assets under holding", value: "$119 trillion" },
    { id: 3, name: "New users annually", value: "46,000" },
  ];

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>
              Explore a wide range of properties tailored to your needs, from
              cozy apartments to luxurious homes. Whether you're buying,
              renting, or investing, we provide the tools and insights to help
              you find the perfect place that feels like home. Start your
              journey with us and turn your dreams into reality.
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>8+</h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>186</h1>
                <h2>Awards Gained</h2>
              </div>
              <div className="box">
                <h1>200+</h1>
                <h2>Properites Ready</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="background" />
        </div>
      </div>
      <div id="about" className="about-us">
        <div className="about-card">
          <h2>About Us</h2>
          <p>
            At the heart of our mission is a commitment to connecting people
            with the perfect real estate solutions. Whether you're looking for a
            cozy home or an investment opportunity, our team is here to guide
            you every step of the way.
          </p>
          <div className="about-details">
            <div className="detail-item">
              <i className="material-icons">people</i>
              <p>Experienced Team</p>
            </div>
            <div className="detail-item">
              <i className="material-icons">location_city</i>
              <p>Local Expertise</p>
            </div>
            <div className="detail-item">
              <i className="material-icons">support_agent</i>
              <p>24/7 Support</p>
            </div>
          </div>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <div id="contact" className="contact">
        <div className="left">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="logo" />
              <span>PrimeEstate</span>
            </a>
          </div>
          <p>
            Find your dream place with us. Choose from the best properties in
            the business. We are PrimeEstate.
          </p>
        </div>
        <div className="right">
          <div>
            <a href="#top" className="top-button">
              ^
            </a>
          </div>
          <div className="navigation">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="/list">Properties</a>
          </div>
          <p>Copyright © 2024. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
