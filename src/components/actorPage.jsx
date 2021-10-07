import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ActorPage({ actor }) {
  const [actorPage, setActorPage] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/" +
        id +
        "?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
    )
      .then((response) => response.json())
      .then((json) => {
        setActorPage(json);
        console.log(actorPage);
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          alt="img"
          style={{
            width: "100%",
            height: "100%"
          }}
          src={
            actorPage.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actorPage.profile_path}`
              : "https://p.kindpng.com/picc/s/78-785904_block-chamber-of-commerce-avatar-white-avatar-icon.png"
          }
        />
      </div>
      <div>
        <p> {actorPage.birthday} </p>
        <p> {actorPage.biography} </p>
        <p> {actorPage.place_of_birth} </p>
      </div>
    </div>
  );
}
