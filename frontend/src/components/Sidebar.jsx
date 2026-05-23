import { NavLink } from "react-router";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 space-y-6">

          <h2 className="text-xl font-bold dark:text-white">
            MyLife
          </h2>

          <nav className="flex flex-col gap-4">
            <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-white hover:text-blue-300 ${
                    isActive ? "font-bold text-blue-400" : ""
                  }`
                }
              >
                Notes
            </NavLink>

            <NavLink
                to="/flashcards"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-white hover:text-blue-300 ${
                    isActive ? "font-bold text-blue-400" : ""
                  }`
                }
              >
                Flashcards
            </NavLink>

            <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-white hover:text-blue-300 ${
                    isActive ? "font-bold text-blue-400" : ""
                  }`
                }
              >
                Coming Soon...
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;