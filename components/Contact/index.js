import React from "react";
import { contacts } from "../../data";
import Link from "next/link";

function Contact() {
  return (
    <div id="introduction">
      <div className="flex flex-row justify-center">
        {contacts.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center bg-white rounded-full shadow-sm border-transparent w-10 h-10 mx-3 hover:bg-violet-600 hover:text-white"
          >
            <Link href={item.url} target="_blank">
              <item.icon className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Contact;
