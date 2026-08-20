import DashboardLayout from "../components/DashboardLayout";
import SignalCard from "../components/SignalCard";

function Signals() {
  return (
    <DashboardLayout
      title="AI Trading Signals"
      subtitle="AI-generated market opportunities and confidence analysis."
    >
      <SignalCard />
    </DashboardLayout>
  );
}

export default Signals;