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

interface Message {
  id: string;
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
    <div>
      {messages.map((msg) => (
        <MessageChat key={msg.id} message={msg} />
      ))}
      <SendMessage />
    </div>
  );
}
