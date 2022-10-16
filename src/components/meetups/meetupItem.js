import React from "react";
import classes from "./meetupItem.module.css";
import MeetupListItem from "./meetupListItem";
function MeetupItem(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupListItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupItem;
