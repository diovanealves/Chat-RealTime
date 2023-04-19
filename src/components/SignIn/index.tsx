import { useState } from "react";
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
      <button
        type="button"
        onClick={signInWithGoogle}
        className="w-96 h-14 bg-none text-lg text-center mt-8 border-2 border-buttonColor cursor-pointer hover:bg-buttonColor"
      >
        Acesse coma conta Google
      </button>
    </div>
  );
}
