import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeeups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import EditMeetup from "./components/meetups/EditMeetup";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/edit/:meetupId" element={<EditMeetup />} />
        <Route path="/new-meetups" element={<NewMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
