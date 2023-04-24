import { auth } from "../../config/firebase";

export function SignOut() {
  function signOut() {
    auth.signOut();
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className="absolute top-4 right-5 border-2 px-5 py-2 rounded-lg hover:bg-white hover:text-black"
    >
      Sign Out
    </button>
  );
}
