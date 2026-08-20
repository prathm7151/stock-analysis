import DashboardLayout from "../components/DashboardLayout";
import DashboardCards from "../components/DashboardCards";
import LiveChart from "../components/LiveChart";

function Dashboard() {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Overview of today's market and AI trading performance."
    >
      <DashboardCards />

      <LiveChart />
    </DashboardLayout>
  );
}

export default Dashboard;