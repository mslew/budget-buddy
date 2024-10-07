"use client";

import app from "@/firebase";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Home() {
  async function sendData(){
    await setDoc(doc(db, "cities", "LA"), {
      name:"Los Angeles",
      state: "CA",
      country: "USA"
    });
  }
  return (
    <><button className="border border-red-400 p-3 ml-3 mt-3" onClick={sendData}>Click Me!</button></>
  );
}
