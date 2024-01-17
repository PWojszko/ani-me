import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

const Profile = async () => {
  const session = await getSession();

  return (
    <section className="flex flex-col gap-10 px-16 py-12">
      <div className="flex flex-col gap-4 place-content-center place-items-center text-center">
        <h2>{session?.user.nickname}</h2>
        <Image
          className="rounded-full"
          alt="profile picture"
          src={session?.user.picture}
          width={100}
          height={100}
        />
      </div>

      <div>
        <p>Email: {session?.user.name}</p>
      </div>
    </section>
  );
};

export default withPageAuthRequired(Profile);
