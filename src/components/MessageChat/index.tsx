import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

interface MessageProps {
  id: string;
  avatar: string;
  name: string;
  text: string;
}

export function MessageChat(props: { message: MessageProps }) {
  const { message } = props;
  const [user] = useAuthState(auth);

  return (
    <div className={`${message.id === user?.uid ? "right-0" : "left-0"}`}>
      <img src={message.avatar} alt="Foto do usuario" />
      <div>
        <p>{message.name}</p>
        <p>{message.text}</p>
        <p></p>
      </div>
    </div>
  );
}
