import AppBar from "@/components/app-bar";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function UserPage() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      UserPage
      {JSON.stringify(session)}
      <br /><br /><br />
      <AppBar />
    </div>
  )
}
