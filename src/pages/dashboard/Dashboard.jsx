import Card from "@/components/shared/Card";
import SideBar from "@/components/shared/SideBarButton";
import React from "react";
import SideBars from "./SideBars";
import {
  CalendarDays,
  Download,
  HandCoins,
  Search,
  SlidersVertical,
  User,
  WalletMinimal,
} from "lucide-react";
import NavBar from "./NavBar";
import DashBoardButton from "@/components/shared/DashBoardButton";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <main className="bg-black h-screen p-4 flex flex-row gap-10">
      <aside className="w-90 text-white flex flex-col gap-4 p-4">
        <div className="text-2xl font-bold flex items-center gap-2">
          <i>
            <HandCoins />
          </i>
          Finance
        </div>
        <SideBars />
      </aside>
      <div className="w-full flex flex-col gap-5 h-screen bg-zinc-900 p-4 rounded-lg text-white">
        <div>
          <NavBar />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-4 items-center justify-between">
            <DashBoardButton
              icon={<Download />}
              label={"Download Report"}
              link={"#"}
            />
            <DashBoardButton
              icon={<CalendarDays />}
              label={"This Month"}
              link={"#"}
            />
            <DashBoardButton icon={<SlidersVertical />} label={""} link={"#"} />
          </div>
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
