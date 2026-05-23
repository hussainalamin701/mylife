import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-base-200">

      
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      
      <div className="flex flex-col flex-1 lg:ml-64">

        
        <div className="lg:hidden flex items-center gap-4 px-4 py-3 bg-base-300 border-b border-base-content/10">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-ghost btn-sm text-xl"
          >
            ☰
          </button>
          <span className="text-lg font-bold text-primary font-mono">MyLife</span>
        </div>

        {/* Page content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
