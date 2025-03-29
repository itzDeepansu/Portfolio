import React from "react";
import Link from "next/link";

const Footer = ({ className }) => {
  const date = new Date();
  function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }
  function convertToIST(timeString) {
    if (!timeString) return "";
    const date = new Date(timeString);
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-IN", options).format(date);
  }
  const handleEmailClick = (email) => {
    // Opens the email client with a new draft to the specified recipient
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className={`z-50 bg-background/20 backdrop-blur-md max-h-20 w-full fixed bottom-0 grid grid-cols-6 text-xs items-end font-jetbr pb-1 ${className}`}>
      <ul className="list-none">
        <li className="text-mutedForeground">Time</li>
        <li>{convertToIST(date.getTime())}</li>
      </ul>
      <ul className="list-none relative grid rows-4 w-fit z-50">
        <Link target="_blank" href="https://www.linkedin.com/in/deepansu/" className="z-10 text-mutedForeground hover:text-foreground cursor-pointer w-fit">Linked In</Link>
        <Link target="_blank" href="https://x.com/Deepansu_S" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Twitter</Link>
        <Link target="_blank" href="https://leetcode.com/u/itzdeep/" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Leetcode</Link>
        <a href="mailto:itzdeepansu@gmail.com" className="text-mutedForeground hover:text-foreground w-fit cursor-pointer">Gmail</a>
      </ul>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <div className="bg-transparent"></div>
      <ul className="list-none">
        <li>c 2024</li>
        <li className="font-bold">ZUES</li>
        </ul>
    </div>
  );
};

export default Footer;