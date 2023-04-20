import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useState, FormEvent } from "react";

import { db, auth } from "../../config/firebase";

export function SendMessage() {
  const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();

    if (message.trim() === "") {
      return alert("Envie uma mensagem valida");
    }

    await addDoc(collection(db, "messages"), {
      uid: user?.uid,
      name: user?.displayName,
      avatar: user?.photoURL,
      text: message,
      createdAt: serverTimestamp(),
    });
    setMessage("");
  }

  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="w-full flex gap-1 mt-2"
    >
      <input
        className="w-full bg-background border-2 border-buttonColor text-white text-center  outline-none "
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button
        type="submit"
        className="bg-buttonColor flex items-center justify-center w-16 p-2 hover:opacity-70"
      >
        <PaperPlaneTilt size={24} />
      </button>
    </form>
  );
}
