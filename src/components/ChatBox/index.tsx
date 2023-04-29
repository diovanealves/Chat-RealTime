import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { MessageChat } from "../MessageChat";
import { SendMessage } from "../SendMessage";
import { Logout } from "../SignOut";

interface Message {
  id: string;
  uid: string;
  name: string;
  text: string;
  avatar: string;
}

export function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const messages: Message[] = [];
      QuerySnapshot.forEach((doc) => {
        const data = doc.data();
        messages.push({
          id: doc.id,
          uid: data.uid,
          name: data.name,
          text: data.text,
          avatar: data.avatar,
        });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-3/4 h-screen mx-auto flex flex-col items-center justify-center">
      <Logout />
      <div className="w-full max-h-full h-4/5 overflow-y-scroll scrollbar">
        {messages.map((msg) => (
          <MessageChat key={msg.id} message={msg} />
        ))}
      </div>
      <SendMessage />
    </div>
  );
}
