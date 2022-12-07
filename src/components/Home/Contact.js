import React from "react";
import { contacts } from "../../data";

function Contact() {
  return (
    <div className="home-about-section" id="introduction">
      <div className="flex flex-row justify-center">
        {contacts.map((item) => 
          <div className="flex items-center justify-center bg-white rounded-full shadow-sm border-transparent w-10 h-10 mx-3 hover:bg-violet-600 hover:text-white">
            <a href={item.url} target="_blank" rel="noreferrer">
              <item.icon  className="w-5 h-5"/>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
export default Contact;
