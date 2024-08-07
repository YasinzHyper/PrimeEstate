import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";
import "react-toggle/style.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
function NavBar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) {
    fetch();
  }

  // const user = true;
  return (
    <nav>
      <div className="left" id="top">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>PrimeEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="/list">Properties</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="right">
        <DarkModeToggle />
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="user" />
            <span>{currentUser.username}</span>
            <Link className="profile" to="/profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="user" />
              <span>{currentUser.username}</span>
              <Link className="profile" to="/profile">
                {number > 0 && <div className="notification">{number}</div>}
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/login">Sign in</a>
              <a href="/register" className="register">
                Sign up
              </a>
            </>
          )}
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="/list">Properties</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
