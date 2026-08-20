import {
  FaRobot,
  FaArrowUp,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

function SignalCard() {
  return (
    <div
      style={{
        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",

        gap: "20px",
      }}
    >
      <div
        style={{
          padding: "28px",

          background:
            "linear-gradient(135deg,rgba(34,197,94,.10),#111827)",

          border: "1px solid rgba(34,197,94,.25)",

          borderRadius: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
              Current AI Recommendation
            </p>

            <h1
              style={{
                margin: "12px 0",

                color: "#22c55e",

                fontSize: "48px",
              }}
            >
              BUY
            </h1>

            <p
              style={{
                margin: 0,
                color: "#cbd5e1",
              }}
            >
              NIFTY 50
            </p>
          </div>

          <FaRobot
            style={{
              color: "#22c55e",
              fontSize: "60px",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",

              marginBottom: "8px",

              color: "#94a3b8",

              fontSize: "12px",
            }}
          >
            <span>AI Confidence</span>

            <span
              style={{
                color: "#22c55e",
                fontWeight: "700",
              }}
            >
              91%
            </span>
          </div>

          <div
            style={{
              height: "8px",

              background: "#1e293b",

              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: "91%",
                height: "100%",

                background:
                  "linear-gradient(90deg,#16a34a,#22c55e)",

                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "24px",

          background: "#111827",

          border: "1px solid #1e293b",

          borderRadius: "18px",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#f8fafc",
          }}
        >
          Signal Analysis
        </h3>

        <SignalItem
          icon={<FaArrowUp />}
          title="Trend"
          value="Bullish"
          color="#22c55e"
        />

        <SignalItem
          icon={<FaBolt />}
          title="Momentum"
          value="Strong"
          color="#38bdf8"
        />

        <SignalItem
          icon={<FaShieldAlt />}
          title="Risk Level"
          value="Moderate"
          color="#f59e0b"
        />
      </div>
    </div>
  );
}

function SignalItem({ icon, title, value, color }) {
  return (
    <div
      style={{
        padding: "14px 0",

        display: "flex",
        alignItems: "center",

        borderBottom: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          width: "38px",
          height: "38px",

          marginRight: "12px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          background: `${color}12`,

          color,

          borderRadius: "9px",
        }}
      >
        {icon}
      </div>

      <div>
        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "11px",
          }}
        >
          {title}
        </p>

        <p
          style={{
            margin: "3px 0 0",

            color: "#f8fafc",

            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default SignalCard;