import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
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
    <form onSubmit={(event) => sendMessage(event)}>
      <input
        type="text"
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" className="bg-red-500 w-10">
        Enviar
      </button>
    </form>
  );
}
