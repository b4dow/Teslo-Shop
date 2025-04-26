import Link from "next/link";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const SidebarItem = () => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      >
        <IoPersonOutline size={20} />
        <span className="ml-3 text-md">Perfil</span>
      </Link>
      <Link
        href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      >
        <IoTicketOutline size={20} />
        <span className="ml-3 text-md">Ordenes</span>
      </Link>
      <Link
        href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      >
        <IoLogInOutline size={20} />
        <span className="ml-3 text-md">Ingresar</span>
      </Link>
      <Link
        href="/"
        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
      >
        <IoLogOutOutline size={20} />
        <span className="ml-3 text-md">Salir</span>
      </Link>
    </>
  );
};
