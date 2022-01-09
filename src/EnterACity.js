import React from "react";

export default function EnterACity() {
  return (
    <div className="EnterACity">
      <input type="text" placeholder="Enter a City" autoFocus="on" autoComplete="off" />;
      <input type="submit" value="Search" />;
    </div>
  );
}
