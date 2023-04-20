import { useState } from "react";
import { GoogleLogo } from "@phosphor-icons/react";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";

import { auth } from "../../config/firebase";

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Acesse sua conta!</h1>
      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-96 h-14 flex items-center justify-center gap-3  text-lg font-bold mt-8 border-2 border-buttonColor cursor-pointer hover:bg-buttonColor"
      >
        <GoogleLogo size={28} weight="bold" />
        Acesse coma conta Google
      </button>
    </div>
  );
}
