import "./style/global.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "./config/firebase";
import { getAuth } from "firebase/auth";

import { SignIn } from "./components/SignIn";
import { Chat } from "./components/Chat";

export function App() {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  return <>{user ? <Chat /> : <SignIn />}</>;
}
