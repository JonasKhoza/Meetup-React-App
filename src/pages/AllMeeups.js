import React, { useState, useEffect } from "react";
import MeetupItem from "../components/meetups/meetupItem";

function AllMeetups() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function getMeetups() {
      const res = await fetch(
        "https://react-meetup-6ba04-default-rtdb.firebaseio.com//meetup.json"
      );
      const data = await res.json();
      const meetups = [];
      let meetup;
      for (let key in data) {
        meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      setMeetups(meetups);
      console.log(meetup);
    }
    getMeetups();
  }, []);

  return (
    <section>
      <h1 style={{ color: "#ff1e00" }}>All Meetups</h1>
      <MeetupItem meetups={meetups} />;
    </section>
  );
}

export default AllMeetups;
