import { middleware } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await middleware();

  if (!session?.user) redirect("/");

  return (
    <div>
      <Title title="Perfil" />
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
      <p>{session.user.role}</p>
    </div>
  );
}
