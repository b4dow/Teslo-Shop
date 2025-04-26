import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const EmptyPage = () => {
  return (
    <div className="flex  items-center justify-center h-[500px] ">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-normal">Tu Carrito esta vacio</h1>
        <Link href="/" className="text-blue-500 mt-2 text-2xl">
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default EmptyPage;
