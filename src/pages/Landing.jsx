import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaNewspaper,
} from "react-icons/fa";

const features = [
  {
    icon: FaChartLine,
    title: "Live Market Analysis",
    desc: "Option chains, strikes, and IV shifts tracked as the market moves.",
  },
  {
    icon: FaRobot,
    title: "AI Trading Signals",
    desc: "Rule-based signals surface setups the moment they line up.",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Portfolio Management",
    desc: "One screen for holdings, P&L, and exposure across your book.",
  },
  {
    icon: FaNewspaper,
    title: "Market News",
    desc: "Curated headlines tied to the instruments you actually watch.",
  },
];

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        color: "white",
        fontFamily: "Arial",
        overflowY: "auto",
      }}
    >
      {/* Nav */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "35px 20px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "22px", fontWeight: "bold" }}>
          AI Trading Platform
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <Link
            to="/login"
            style={{
              padding: "10px 22px",
              borderRadius: "10px",
              fontSize: "15px",
              color: "white",
              border: "1px solid rgba(255,255,255,.15)",
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
          <Link
            to="/register"
            style={{
              padding: "10px 22px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: "bold",
              color: "white",
              background: "#2563eb",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
          padding: "90px 20px 70px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px", lineHeight: 1.2 }}>
          Trade with data,
          <br />
          not guesswork.
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.75, marginBottom: "35px" }}>
          AI Powered Financial & Trading Algorithm Platform for live market
          analysis, portfolio management, and smart trading signals.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/register"
            style={{
              padding: "15px 30px",
              borderRadius: "10px",
              fontSize: "17px",
              fontWeight: "bold",
              color: "white",
              background: "#2563eb",
              textDecoration: "none",
            }}
          >
            Create Free Account
          </Link>
          <Link
            to="/login"
            style={{
              padding: "15px 30px",
              borderRadius: "10px",
              fontSize: "17px",
              color: "white",
              border: "1px solid rgba(255,255,255,.15)",
              textDecoration: "none",
            }}
          >
            I Already Have an Account
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px 90px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: "#111827",
              borderRadius: "16px",
              padding: "28px 24px",
              border: "1px solid rgba(255,255,255,.05)",
              boxShadow: "0 15px 35px rgba(0,0,0,.25)",
            }}
          >
            <Icon style={{ fontSize: "26px", color: "#38bdf8", marginBottom: "16px" }} />
            <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>{title}</h3>
            <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.6 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          fontSize: "13px",
          paddingBottom: "40px",
        }}
      >
        Final Year Project • AI Powered Trading Platform
      </p>
    </div>
  );
}

export default Landing;
