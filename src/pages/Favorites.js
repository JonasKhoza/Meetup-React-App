import React, { useContext } from "react";
import FavoritesContext from "../components/store/favoritesContext";
import MeetupItem from "../components/meetups/meetupItem";

function Favorites() {
  const FavoriteContext = useContext(FavoritesContext);
  const meetups = FavoriteContext.favorites;
  const favoritesAmount = FavoriteContext.totalFavorites;

  let content;
  if (favoritesAmount === 0) {
    content = "You have no favorites available. Maybe try to add some!";
  } else {
    content = "Your Favorites";
  }
  return (
    <section>
      <h1>{content}</h1>;
      <MeetupItem meetups={meetups} />
    </section>
  );
}

export default Favorites;
