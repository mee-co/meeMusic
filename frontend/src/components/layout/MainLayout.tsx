import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import PlayerBar from "@/components/layout/PlayerBar";

const MainLayout = () => (
  <div className="flex h-screen flex-col bg-white">
    <div className="flex flex-1 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
    <PlayerBar />
  </div>
);

export default MainLayout;
