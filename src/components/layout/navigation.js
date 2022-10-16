import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./navigation.module.css";
import FavoritesContext from "../store/favoritesContext";

function Navigation() {
  const FavoriteContext = useContext(FavoritesContext);
  const favoritesAmount = FavoriteContext.totalFavorites;
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>Meetups</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetups">New-Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites<span className={classes.badge}>{favoritesAmount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
