import { titleFont } from "@/config/font";
import { LoginForm } from "./ui/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-32">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>
      <LoginForm />
    </div>
  );
}
