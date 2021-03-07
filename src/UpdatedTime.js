import React from "react";

export default function  formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
        <div>
          Updated at {hours}:{minutes}
        </div>
      );
    }
    
  