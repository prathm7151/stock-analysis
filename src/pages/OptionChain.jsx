import DashboardLayout from "../components/DashboardLayout";

function OptionChain() {
  const strikes = [
    {
      strike: "23,800",
      callOI: "125K",
      callLTP: "215.30",
      putLTP: "75.20",
      putOI: "98K",
    },
    {
      strike: "23,900",
      callOI: "182K",
      callLTP: "158.75",
      putLTP: "102.40",
      putOI: "145K",
    },
    {
      strike: "24,000",
      callOI: "240K",
      callLTP: "105.50",
      putLTP: "148.60",
      putOI: "225K",
    },
    {
      strike: "24,100",
      callOI: "165K",
      callLTP: "67.30",
      putLTP: "198.40",
      putOI: "188K",
    },
  ];

  return (
    <DashboardLayout
      title="Option Chain"
      subtitle="Analyze calls, puts, strike prices and open interest."
    >
      <div
        style={{
          padding: "22px",

          background: "#111827",

          border: "1px solid #1e293b",

          borderRadius: "16px",

          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",

            borderCollapse: "collapse",

            textAlign: "center",
          }}
        >
          <thead>
            <tr
              style={{
                color: "#94a3b8",

                borderBottom: "1px solid #334155",
              }}
            >
              <th style={{ padding: "14px" }}>
                Call OI
              </th>

              <th style={{ padding: "14px" }}>
                Call LTP
              </th>

              <th
                style={{
                  padding: "14px",
                  color: "#38bdf8",
                }}
              >
                Strike Price
              </th>

              <th style={{ padding: "14px" }}>
                Put LTP
              </th>

              <th style={{ padding: "14px" }}>
                Put OI
              </th>
            </tr>
          </thead>

          <tbody>
            {strikes.map((row) => (
              <tr
                key={row.strike}
                style={{
                  borderBottom: "1px solid #1e293b",
                }}
              >
                <td
                  style={{
                    padding: "16px",
                    color: "#ef4444",
                  }}
                >
                  {row.callOI}
                </td>

                <td
                  style={{
                    padding: "16px",
                    color: "#cbd5e1",
                  }}
                >
                  ₹{row.callLTP}
                </td>

                <td
                  style={{
                    padding: "16px",
                    color: "#38bdf8",
                    fontWeight: "700",
                  }}
                >
                  {row.strike}
                </td>

                <td
                  style={{
                    padding: "16px",
                    color: "#cbd5e1",
                  }}
                >
                  ₹{row.putLTP}
                </td>

                <td
                  style={{
                    padding: "16px",
                    color: "#22c55e",
                  }}
                >
                  {row.putOI}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default OptionChain;