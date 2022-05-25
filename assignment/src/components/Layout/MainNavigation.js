import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
const MainNavigation = () => {

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  console.log("login check")
  console.log(isLoggedIn)
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>HireQuotient</div>
      </Link>
      <nav>
        <ul>
        {isLoggedIn && (
        <li>
            <Link to="/companyDashboard">Company Dashboard</Link>
          </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
         
          
       
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
