import { titleFont } from "@/config/font";
import { RegisterForm } from "./ui/RegisterForm";

export default function NewAccount() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-32">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>
      <RegisterForm />
    </div>
  );
}
