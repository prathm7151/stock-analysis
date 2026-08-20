import DashboardLayout from "../components/DashboardLayout";

import {
  FaWallet,
  FaChartPie,
  FaArrowUp,
} from "react-icons/fa";

function Portfolio() {
  const holdings = [
    {
      stock: "RELIANCE",
      quantity: 10,
      avg: "2,840",
      current: "2,945",
      pnl: "+₹1,050",
    },
    {
      stock: "TCS",
      quantity: 8,
      avg: "4,020",
      current: "4,110",
      pnl: "+₹720",
    },
    {
      stock: "INFY",
      quantity: 15,
      avg: "1,620",
      current: "1,678",
      pnl: "+₹870",
    },
  ];

  return (
    <DashboardLayout
      title="Portfolio"
      subtitle="Track your holdings, investments and profit/loss."
    >
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",

          gap: "18px",

          marginBottom: "22px",
        }}
      >
        <SummaryCard
          icon={<FaWallet />}
          title="Portfolio Value"
          value="₹1,85,430"
        />

        <SummaryCard
          icon={<FaArrowUp />}
          title="Total P&L"
          value="+₹12,430"
        />

        <SummaryCard
          icon={<FaChartPie />}
          title="Invested"
          value="₹1,73,000"
        />
      </div>

      <div
        style={{
          padding: "22px",

          background: "#111827",

          border: "1px solid #1e293b",

          borderRadius: "16px",

          overflowX: "auto",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#f8fafc",
          }}
        >
          Holdings
        </h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #334155",
                color: "#64748b",
              }}
            >
              <th style={{ padding: "13px", textAlign: "left" }}>
                Stock
              </th>

              <th style={{ padding: "13px" }}>
                Quantity
              </th>

              <th style={{ padding: "13px" }}>
                Avg Price
              </th>

              <th style={{ padding: "13px" }}>
                Current Price
              </th>

              <th style={{ padding: "13px" }}>
                P&L
              </th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((holding) => (
              <tr
                key={holding.stock}
                style={{
                  borderBottom: "1px solid #1e293b",
                }}
              >
                <td
                  style={{
                    padding: "16px",
                    color: "#f8fafc",
                    fontWeight: "600",
                  }}
                >
                  {holding.stock}
                </td>

                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  {holding.quantity}
                </td>

                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  ₹{holding.avg}
                </td>

                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",
                  }}
                >
                  ₹{holding.current}
                </td>

                <td
                  style={{
                    padding: "16px",
                    textAlign: "center",

                    color: "#22c55e",

                    fontWeight: "600",
                  }}
                >
                  {holding.pnl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

function SummaryCard({ icon, title, value }) {
  return (
    <div
      style={{
        padding: "20px",

        background:
          "linear-gradient(145deg,#111827,#0f172a)",

        border: "1px solid #1e293b",

        borderRadius: "16px",
      }}
    >
      <div
        style={{
          color: "#38bdf8",
          fontSize: "22px",
        }}
      >
        {icon}
      </div>

      <p
        style={{
          margin: "12px 0 5px",
          color: "#64748b",
          fontSize: "12px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          margin: 0,
          color: "#f8fafc",
        }}
      >
        {value}
      </h2>
    </div>
  );
}

export default Portfolio;