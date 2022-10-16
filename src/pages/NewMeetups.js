import React from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/newMeetupForm";

function NewMeetups() {
  const navigate = useNavigate();
  function submitDataToDatabase(meetupData) {
    fetch(
      "https://react-meetup-6ba04-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => navigate("/"));
  }
  return <NewMeetupForm dataSubmition={submitDataToDatabase} />;
}

export default NewMeetups;
