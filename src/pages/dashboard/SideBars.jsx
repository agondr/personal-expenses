import SideBarButton from "@/components/shared/SideBarButton";
import React from "react";

import {
  BellRing,
  BookCopy,
  ChartColumnIncreasing,
  ChartLine,
  ClipboardList,
  DatabaseBackup,
  EarthLock,
  House,
  Landmark,
  LayoutDashboard,
  LogIn,
  MessageCircleQuestionMark,
  ScrollText,
  Settings,
  WalletMinimal,
} from "lucide-react";

const SideBars = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-2">
        <SideBarButton
          icon={<LayoutDashboard />}
          acction="Dashboard"
          link="dashboard"
        />
        <SideBarButton
          icon={<ChartLine />}
          acction="Spending Insights"
          link="../register"
        />
        <SideBarButton
          icon={<ClipboardList />}
          acction="Transactions"
          link="../transactions"
        />
        <SideBarButton
          icon={<ChartColumnIncreasing />}
          acction="Analytics"
          link="analytics"
        />
        <SideBarButton
          icon={<BookCopy />}
          acction="Bill & Subscriptions"
          link="transactions"
        />
        <SideBarButton
          icon={<DatabaseBackup />}
          acction="Budget & Goals"
          link="outgoing"
        />
        <SideBarButton
          icon={<WalletMinimal />}
          acction="Wallets"
          link="outgoing"
        />
        <SideBarButton
          icon={<ScrollText />}
          acction="Reports"
          link="outgoing"
        />
      </div>
      <div className="flex flex-col gap-2">
        <SideBarButton
          icon={<BellRing />}
          acction="Notifications"
          link="analytics"
        />
        <SideBarButton
          icon={<MessageCircleQuestionMark />}
          acction="Help"
          link="help"
        />
        <SideBarButton icon={<Settings />} acction="Settings" link="settings" />
      </div>
    </div>
  );
};

export default SideBars;
