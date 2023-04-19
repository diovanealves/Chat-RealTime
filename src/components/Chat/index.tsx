type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

type ChatProps = {
  user: User;
};

export function Chat(props: ChatProps) {
  const { user } = props;

  console.log(user);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="Foto do usuário"
          className="w-52 rounded-full mb-5"
        />
      )}

      <strong>{user.displayName}</strong>
      <p>{user.email}</p>
    </div>
  );
}
