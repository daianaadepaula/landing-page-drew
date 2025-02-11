import { NavLinks } from "../data/navLinks";

const Navbar = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <nav className={`md:flex md:justify-center ${isMenuOpen ? "block" : "hidden"}`}>
      <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent border md:border-0 border-gray-100 dark:border-gray-700 rounded-lg">
        {NavLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="block py-2 px-3 font-bold text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
