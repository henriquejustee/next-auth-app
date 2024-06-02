import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/LogoutButton";


export default async function Home() {


  const session = await getServerSession();

  if (!session) {
    redirect("/register");
  }

  return (
    <main className="h-screen flex flex-col space-y-3 justify-center items-center bg-white px-4">
      <h1 className="text-black text-3xl text-bold">Name: {session.user?.name}</h1>
      <h1 className="text-black text-3xl text-bold">Email: {session.user?.email}</h1>

      <LogoutButton />
    </main>
  );
}
