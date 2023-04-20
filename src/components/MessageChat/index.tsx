import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

interface MessageProps {
  id: string;
  uid: string;
  avatar: string;
  name: string;
  text: string;
}

export function MessageChat(props: { message: MessageProps }) {
  const { message } = props;
  const [user] = useAuthState(auth);

  return (
    <div
      className={`w-full flex py-2 px-3  gap-3 ${
        message.uid === user?.uid
          ? "flex-row-reverse justify-start text-end"
          : "justify-start"
      }`}
    >
      <img
        src={message.avatar}
        alt="Foto do usuario"
        className="w-12 h-12 rounded-full"
      />
      <div className="">
        <p className="text-slate-400 opacity-70 ">{message.name}</p>
        <p>{message.text}</p>
        <p></p>
      </div>
    </div>
  );
}
