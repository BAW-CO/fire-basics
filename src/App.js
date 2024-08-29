import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
 } from "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from "@fortawesome/free-solid-svg-icons";
 import Nav from './components/Nav';
import FESLogo from './assets/FES.svg';
import bars from './assets/bars.svg';


function App() {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  library.add(faBars);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user)
      }
    })
  }, []);

  function register() {
    createUserWithEmailAndPassword(auth, `Bemail@email.com`, `test123`)
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function login() {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, `Bemail@email.com`, `test123`)
      .then(({ user }) => {
        console.log(user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      })
  }
  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <div className="nav">
        <div className="nav__container">
          <div className="nav__container-left">
          
            <button className="btn__menu">
            <FontAwesomeIcon icon="bars" /> 
            </button>
            
            <img src={FESLogo} alt="FES Logo" 
            className="logo" />
          </div>
          <ul className="nav__links">
            {!user.email && !isLoading && (
              <>
                <li className="nav__list">
                  <button onClick={login}>Log In</button>
                </li>  
                <li className="nav__list">
                  <button className="btn__register" onClick={register}>Register</button>
                </li>
              </>
            )}
            {isLoading && (
              <li className="nav__list">
                <div className="skeleton-loader"></div>
                <div className="skeleton-loader-circle"></div>
              </li>
            )}
            {user.email && !isLoading && (
              <li className="nav__list">
                <button className="btn__logout" onClick={logout}>
                  {user.email[0].toUpperCase()}
                </button>
              </li>
            )}
          </ul>  
          </div>
        </div>
    </div>
  );
}
export default App;


