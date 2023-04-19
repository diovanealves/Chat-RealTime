import "./style/global.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase";

import { SignIn } from "./components/SignIn";
import { ChatBox } from "./components/ChatBox";

export function App() {
  const [user] = useAuthState(auth);

  return <>{!user ? <SignIn /> : <ChatBox />}</>;
}
