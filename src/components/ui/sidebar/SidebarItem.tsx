"use client";
import { Logout } from "@/actions";
import { MenuStore } from "@/store";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const SidebarItem = () => {
  const closeMenu = MenuStore((state) => state.closeSideMenu);

  const { data: session, update } = useSession();
  const isAuthenticated = !!session?.user;

  useEffect(() => {
    update();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <Link
          href="/profile"
          onClick={closeMenu}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={20} />
          <span className="ml-3 text-md">Perfil</span>
        </Link>
      )}

      {isAuthenticated && (
        <Link
          href="/"
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={20} />
          <span className="ml-3 text-md">Ordenes</span>
        </Link>
      )}

      {!isAuthenticated && (
        <Link
          href="/auth/login"
          onClick={closeMenu}
          className="flex items-center mt-10  p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={20} className="mr-3" />
          Ingresar
        </Link>
      )}

      {isAuthenticated && (
        <Link
          href="/"
          onClick={() => {
            closeMenu();
            Logout();
          }}
          className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={20} />
          <span className="ml-3 text-md">Salir</span>
        </Link>
      )}
    </>
  );
};
