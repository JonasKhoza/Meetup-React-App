import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const meetups = JSON.parse(localStorage.getItem("meetups"));

    meetups ? setFavorites(meetups) : setFavorites([]);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("meetups", JSON.stringify(favorites));
  }, [favorites]);

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addToFavorites: addToFavorites,
    removeFavorites: removeFromFavorites,
    isFavorite: itemIsFavorite,
  };
  function addToFavorites(meetup) {
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(meetup);
    });
  }

  function removeFromFavorites(meetupId) {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }
  function itemIsFavorite(meetupId) {
    return favorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
