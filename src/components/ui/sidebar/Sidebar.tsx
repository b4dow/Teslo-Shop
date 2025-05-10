"use client";
import Link from "next/link";
import clsx from "clsx";
import {
  IoCloseOutline,
  IoPeopleOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";
import { MenuStore } from "@/store";
import { useSession } from "next-auth/react";

export const Sidebar = () => {
  const isSideMenuOpen = MenuStore((state) => state.isSideMenuOpen);
  const closeMenu = MenuStore((state) => state.closeSideMenu);
  const session = useSession();
  const isAuthenticated = session?.data?.user.role === "admin";
  console.log({ isAuthenticated });

  return (
    <div>
      {/* Black Background */}

      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Blur */}

      {isSideMenuOpen && (
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"></div>
      )}
      {/* Side Menu */}
      <nav
        //TODO:Efecto de slice
        className={clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-700 ease-in",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar.."
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-md border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Menu */}
        <SidebarItem />

        {/* Line Separator */}
        {isAuthenticated && (
          <>
            <div className="w-full h-px bg-gray-200 my-10"></div>
            <Link
              href="/"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoShirtOutline size={20} />
              <span className="ml-3 text-md">Productos</span>
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
              <IoPeopleOutline size={20} />
              <span className="ml-3 text-md">Usuarios</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
