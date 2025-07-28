import Card from "@/components/shared/Card";
import {
  BanknoteArrowDown,
  BellRing,
  ChartNoAxesColumn,
  WalletMinimal,
} from "lucide-react";
import React from "react";

const Cards = () => {
  return (
    <div className="flex gap-g justify-between">
      <Card
        title="Total Balance"
        desc="all accounts"
        amount="2550$"
        icon={<WalletMinimal />}
      />
      <Card
        title="Monthly Expenses"
        desc="total expenses this month"
        amount="2550$"
        icon={<ChartNoAxesColumn />}
      />
      <Card
        title="Upcoming Bills"
        desc="due in 7 days"
        amount="2550$"
        icon={<BellRing />}
      />
      <Card
        title="Savings Progress"
        desc="2890$ / 5000$"
        amount="60%"
        icon={<BanknoteArrowDown />}
      />
    </div>
  );
};

export default Cards;
