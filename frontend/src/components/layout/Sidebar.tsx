import { NavLink } from "react-router-dom";
import { Home, Library, Search, User, MessageCircle } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

const links = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/library", icon: Library, label: "Library" },
  { to: "/search", icon: Search, label: "Search" },
  { to: "/chat", icon: MessageCircle, label: "Chat" },
  { to: "/profile", icon: User, label: "Profile" },
];

const Sidebar = () => {
  const signOut = useAuthStore((s) => s.signOut);
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-slate-50 p-4">
      <div className="mb-6">
        <svg className="h-10" viewBox="0 0 560 90" fill="none">
          <defs><style>{`.brand{font-family:Inter,"SF Pro Display",Poppins,Arial,sans-serif;font-size:64px;font-weight:800;letter-spacing:-3px}`}</style></defs>
          <text x="12" y="64" className="brand" fill="#0F172A">m</text>
          <text x="72" y="64" className="brand" fill="#2563EB">e</text>
          <text x="112" y="64" className="brand" fill="#2563EB">e</text>
          <circle cx="95" cy="20" r="3.5" fill="#2563EB"/>
          <circle cx="135" cy="20" r="3.5" fill="#2563EB"/>
          <text x="145" y="64" className="brand" fill="#0F172A">Music</text>
        </svg>
      </div>
      <nav className="flex-1 space-y-1">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
      <button onClick={signOut} className="mt-4 w-full rounded-lg bg-slate-200 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300">
        Sign out
      </button>
    </aside>
  );
};

export default Sidebar;
