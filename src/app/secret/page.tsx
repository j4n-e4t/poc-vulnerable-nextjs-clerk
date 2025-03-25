import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();
  console.log(userId); // -> null
  // if (!userId) {
  //   redirect("/");
  // }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Secret Page</h1>
      <p className="text-lg mt-4">This page is protected by Clerk.</p>
    </div>
  );
}
