import "./homePage.scss";
import SearchBar from "../../components/searchBar/searchBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const HomePage = () => {

  const {currentUser} = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
  );
};

export default HomePage;
