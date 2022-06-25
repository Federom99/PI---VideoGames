import React from "react";
import "../styles/HomeStyle.css";

export default function Loading() {
    return (
        <div className="gif">
        <img
          src="https://c.tenor.com/WlKcCyNqoZwAAAAC/super-mario-mario.gif"
          alt="Loading"
        />

        <h1 className="b">Loading...</h1>
      </div>
    );
  }