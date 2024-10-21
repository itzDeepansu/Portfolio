import React from "react";

const Footer = ({ classes }) => {
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }
  return (
    <div className="h-20 w-[calc(100dvw-5rem)] bottom-0 fixed grid grid-cols-6 text-xs items-end z-20 font-jetbr pb-3 bg-background">
      <ul className="list-none">
        <li className="text-mutedForeground">Your Time</li>
        <li>{getTime()}</li>
      </ul>
      <ul className="list-none">
        <li className="text-mutedForeground">Linked In</li>
        <li className="text-mutedForeground">Twitter</li>
        <li className="text-mutedForeground">Instagram</li>
        <li className="text-mutedForeground">Gmail</li>
      </ul>
      <div></div>
      <div></div>
      <div></div>
      <ul className="list-none">
        <li>c 2024</li>
        <li className="font-bold">Zues</li>
        </ul>
    </div>
  );
};

export default Footer;
