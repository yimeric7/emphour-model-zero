import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="pl-3 w-8 h-8" />
      <span className="pl-4 pr-6" style={{fontSize: '17px'}}> Create</span>
    </button>
  );
}
