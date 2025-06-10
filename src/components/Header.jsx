import { useState } from "react";
import { FaPlus, FaCommentDots, FaBell } from "react-icons/fa";
import logo from "../assets/Logo.svg";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm px-4 py-2 flex items-center justify-between">
      {
        /* Logo */
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <div className="text-2xl font-bold">TRAMA</div>
        </div>
      }

      {
        /* CREAR PUBLICACIÓN */
        <div className="flex items-center space-x-1 text-gray-800 hover:text-black cursor-pointer">
          <FaPlus className="text-balck-500 text-xl hover:text-blue-400 rotate-0 " />
          <span className="text-sm font-medium">Crear Publicación</span>
          <FiChevronDown className="text-sm" />
                
        </div>
      }

      {/* BARRA DE BÚSQUEDA */}
      <div className="flex-1 mx-40">
        <input
          type="text"
          placeholder="Buscar en Trama"
          className="w-full rounded-full bg-gray-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {/* ICONOS */}
      <div className="flex items-center space-x-4 text-gray-700">
        <FaCommentDots className="text-xl hover:text-black cursor-pointer" />
        <FaBell className="text-xl hover:text-black cursor-pointer" />

        {/* PERFIL DE USUARIO */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setUserMenuOpen(!userMenuOpen)}
        >
          <img
            src="/user-avatar.png"
            alt="Avatar"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex flex-col text-sm">
            <span className="font-semibold">Danieloide</span>
            <span className="text-gray-500 text-xs">
              Visionaria de los oscars
            </span>
          </div>
          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}
