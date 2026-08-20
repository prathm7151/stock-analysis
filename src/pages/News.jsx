import DashboardLayout from "../components/DashboardLayout";

import {
  FaNewspaper,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

function News() {
  const news = [
    {
      title:
        "Indian markets gain as technology and banking stocks rally",
      source: "Market News",
      time: "10 mins ago",
      sentiment: "Positive",
    },
    {
      title:
        "Global markets remain cautious ahead of economic data",
      source: "Financial News",
      time: "35 mins ago",
      sentiment: "Negative",
    },
    {
      title:
        "AI-driven trading activity continues to increase",
      source: "Technology",
      time: "1 hour ago",
      sentiment: "Positive",
    },
  ];

  return (
    <DashboardLayout
      title="Financial News"
      subtitle="Market headlines with AI-based sentiment analysis."
    >
      <div
        style={{
          display: "grid",
          gap: "15px",
        }}
      >
        {news.map((article, index) => {
          const positive =
            article.sentiment === "Positive";

          return (
            <div
              key={index}
              style={{
                padding: "20px",

                display: "flex",
                alignItems: "center",

                gap: "18px",

                background:
                  "linear-gradient(145deg,#111827,#0f172a)",

                border: "1px solid #1e293b",

                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",

                  flexShrink: 0,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  background: "#0b1120",

                  color: "#38bdf8",

                  borderRadius: "12px",

                  fontSize: "20px",
                }}
              >
                <FaNewspaper />
              </div>

              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: 0,

                    color: "#f8fafc",

                    fontSize: "15px",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    margin: "6px 0 0",

                    color: "#64748b",

                    fontSize: "11px",
                  }}
                >
                  {article.source} • {article.time}
                </p>
              </div>

              <div
                style={{
                  padding: "8px 11px",

                  display: "flex",
                  alignItems: "center",

                  gap: "5px",

                  background: positive
                    ? "rgba(34,197,94,.08)"
                    : "rgba(239,68,68,.08)",

                  color: positive
                    ? "#22c55e"
                    : "#ef4444",

                  borderRadius: "9px",

                  fontSize: "11px",
                  fontWeight: "600",
                }}
              >
                {positive ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )}

                {article.sentiment}
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}

export default News;