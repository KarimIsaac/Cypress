import "../styles/globals.css";
import { useState } from "react";
import { LoginContext } from "../components/contexts/loginContext.js";

import Navbar from "../components/header/nav/Navbar";
import Logo from "../components/header/Logo";
import Banner from "../components/header/Banner";
import LatestMovies from "../components/LatestMovies";
import RightSidebar from "../components/RightSidebar";

import LoginPage from "./login";

function MyApp({ Component, pageProps }) {
  const [userObj, setUserObj] = useState({ user: null, key: "", logedIn: false});
  
  return (
    <LoginContext.Provider value={{ userObj, setUserObj }}>
      <header>
        <nav>
          <Logo />
          <Navbar />
          <Banner />
        </nav>
      </header>
      
      <Component {...pageProps} />;

      <footer className="footer">
        <p>This is the footer</p>
      </footer>
    </LoginContext.Provider>
  );
}

export default MyApp;
