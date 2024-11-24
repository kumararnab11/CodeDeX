import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(
    ()=>{
      console.log(expanded);
    },[expanded]
  )

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transform transition-all ${
          expanded ? "scale-x-100" : "scale-x-[-1]"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <button
            onClick={() => setExpanded((curr) =>!curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <div className="flex-1 px-3">{children}</div>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">{/* Avatar and other content */}</div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, link }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
      `}
    >
      {/* Ensure icons are upright regardless of the sidebar state */}
      <span className="transition-all transform scale-x-[-1]">{icon}</span>
      <span
        className={`overflow-hidden transition-all ${expanded ? "w-36 ml-3" : "w-0"}`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}

      {/* Tooltip on hover (when not expanded) */}
      {!expanded && (
        <div
          className={` 
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-0 translate-x-3 transition-all
             group-hover:opacity-100 group-hover:translate-x-0
            pointer-events-none
          `}
        >
          {text}
        </div>
      )}
    </a>
  );
}

