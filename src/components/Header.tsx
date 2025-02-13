import { useState } from "react";
import useTheme from "../hooks/useTheme";
import LogoDark from "../assets/logo-dark.svg";
import LogoLight from "../assets/logo-light.svg";
import { BiSolidSun, BiSolidMoon, BiMenu, BiX } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300 z-50">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between p-4">
          
          {/* Topo - Logo e Botões */}
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center">
              <img
                src={theme === "dark" ? LogoDark : LogoLight}
                className="w-32 h-auto"
                alt="Drew Logo"
              />
						</a>
						
						 {/* Navegação Desktop - Centralizado */}
						<div className="hidden md:flex md:justify-center w-full">
							<Navbar isMenuOpen={false} />
						</div>

            {/* Botões */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contatar
              </button>
              {/* Botão de Tema */}
              <button
                onClick={toggleTheme}
                className="p-2.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                {theme === "dark" ? <BiSolidSun size={24} /> : <BiSolidMoon size={24} />}
              </button>
              {/* Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Navegação Mobile - Fica abaixo do header e sobre o conteúdo */}
      {isMenuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-white dark:bg-gray-900 shadow-md z-40 md:hidden">
          <Navbar isMenuOpen={true} />
        </div>
      )}
    </>
  );
};

export default Header;
