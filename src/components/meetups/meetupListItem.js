import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./meetupListItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../store/favoritesContext";
import { VscEdit, VscAdd, VscTrash } from "react-icons/vsc";

function MeetupListItem(props) {
  const FavoriteContext = useContext(FavoritesContext);

  let isFavorite = FavoriteContext.isFavorite(props.id);
  function toggleMeetupBtn() {
    isFavorite
      ? FavoriteContext.removeFavorites(props.id)
      : FavoriteContext.addToFavorites({
          id: props.id,
          image: props.image,
          title: props.title,
          address: props.address,
          description: props.description,
        });
  }

  const btnText = isFavorite ? <VscTrash /> : <VscAdd />;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address> {props.address} </address>
          <p> {props.description} </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleMeetupBtn}>{btnText}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupListItem;
