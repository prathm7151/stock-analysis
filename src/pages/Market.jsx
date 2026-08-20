import DashboardLayout from "../components/DashboardLayout";

import {
  FaArrowUp,
  FaArrowDown,
  FaChartLine,
} from "react-icons/fa";

function Market() {
  const markets = [
    {
      name: "NIFTY 50",
      price: "23,950.20",
      change: "+0.84%",
      positive: true,
    },
    {
      name: "BANK NIFTY",
      price: "54,320.10",
      change: "+0.42%",
      positive: true,
    },
    {
      name: "SENSEX",
      price: "78,245.70",
      change: "-0.18%",
      positive: false,
    },
  ];

  return (
    <DashboardLayout
      title="Market"
      subtitle="Track major indices and market movements."
    >
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(230px,1fr))",

          gap: "18px",
        }}
      >
        {markets.map((market) => (
          <div
            key={market.name}
            style={{
              padding: "22px",

              background:
                "linear-gradient(145deg,#111827,#0f172a)",

              border: "1px solid #1e293b",

              borderRadius: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#94a3b8",
                    fontSize: "13px",
                  }}
                >
                  {market.name}
                </p>

                <h2
                  style={{
                    margin: "12px 0",

                    color: "#f8fafc",

                    fontSize: "25px",
                  }}
                >
                  {market.price}
                </h2>
              </div>

              <FaChartLine
                style={{
                  color: "#38bdf8",
                  fontSize: "22px",
                }}
              />
            </div>

            <span
              style={{
                display: "flex",
                alignItems: "center",

                gap: "5px",

                color: market.positive
                  ? "#22c55e"
                  : "#ef4444",

                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {market.positive ? (
                <FaArrowUp />
              ) : (
                <FaArrowDown />
              )}

              {market.change}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "22px",

          minHeight: "380px",

          padding: "25px",

          background: "#111827",

          border: "1px solid #1e293b",

          borderRadius: "16px",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#f8fafc",
          }}
        >
          Live Market Overview
        </h3>

        <div
          style={{
            height: "290px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "#64748b",

            background: "#0b1120",

            border: "1px dashed #334155",

            borderRadius: "12px",
          }}
        >
          Real-time market API data will appear here
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Market;