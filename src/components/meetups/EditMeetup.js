// import NewMeetupForm from "./newMeetupForm";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// function EditMeetup() {
//   const params = useParams();
//   const meetupId = params.meetupId;
//   const [meetups, setmeetups] = useState([]);

//   useEffect(() => {
//     async function getMeetups() {
//       const res = await fetch(
//         "https://react-meetup-6ba04-default-rtdb.firebaseio.com/meetup.json"
//       );
//       const data = await res.json();

//       const meetups = [];
//       let meetup;
//       for (let key in data) {
//         meetup = {
//           id: key,
//           ...data[key],
//         };
//         meetups.push(meetup);
//       }
//       setmeetups(meetups);
//     }
//     getMeetups();
//   }, []);
//   return meetups.map((meetup) => {
//     if (meetup.id === meetupId) {
//       return <NewMeetupForm meetup={meetup} key={meetup.id} />;
//     }
//   });
// }

// export default EditMeetup;
