import { SignOut } from "@phosphor-icons/react";
import { auth } from "../../config/firebase";

export function Logout() {
  function signOut() {
    auth.signOut();
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className="absolute flex items-center gap-3 top-4 right-5 border-2 px-5 py-2 rounded-lg hover:bg-white hover:text-black"
    >
      <SignOut size={20} />
      Sair
    </button>
  );
}
