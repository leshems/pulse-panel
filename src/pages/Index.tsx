import { Users, DollarSign, ShoppingCart, ArrowUpRight } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { UsersChart } from "@/components/dashboard/UsersChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back to your startup overview.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+20.1%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="Active Users"
          value="2,420"
          change="+15.1%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="Sales"
          value="1,210"
          change="-5.1%"
          isPositive={false}
          icon={ShoppingCart}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RevenueChart />
        </div>
        <div className="lg:col-span-2">
          <UsersChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;