import {
    FaChartLine,
    FaUniversity,
    FaWallet,
    FaRobot,
    FaArrowUp,
} from "react-icons/fa";

function DashboardCards() {
    const cards = [
        {
            title: "NIFTY 50",
            value: "23,950",
            change: "+0.84%",
            icon: <FaChartLine />,
            accent: "#22c55e",
        },

        {
            title: "BANK NIFTY",
            value: "54,320",
            change: "+0.42%",
            icon: <FaUniversity />,
            accent: "#38bdf8",
        },

        {
            title: "Today's P&L",
            value: "₹12,430",
            change: "+₹2,840 today",
            icon: <FaWallet />,
            accent: "#a78bfa",
        },

        {
            title: "AI Signal",
            value: "BUY",
            change: "91% confidence",
            icon: <FaRobot />,
            accent: "#22c55e",
        },
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0,1fr))",
                gap: "18px",
            }}
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    style={{
                        position: "relative",

                        padding: "20px",

                        background:
                            "linear-gradient(145deg,#111827,#0f172a)",

                        border: "1px solid #1e293b",

                        borderRadius: "16px",

                        boxShadow:
                            "0 12px 30px rgba(0,0,0,0.20)",

                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "80px",
                            height: "80px",

                            top: "-25px",
                            right: "-20px",

                            borderRadius: "50%",

                            background: card.accent,

                            filter: "blur(45px)",

                            opacity: 0.18,
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <p
                            style={{
                                margin: 0,

                                color: "#94a3b8",

                                fontSize: "13px",

                                fontWeight: "500",
                            }}
                        >
                            {card.title}
                        </p>

                        <div
                            style={{
                                width: "38px",
                                height: "38px",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                background: `${card.accent}15`,

                                color: card.accent,

                                borderRadius: "10px",

                                fontSize: "16px",
                            }}
                        >
                            {card.icon}
                        </div>
                    </div>

                    <h2
                        style={{
                            margin: "15px 0 7px",

                            color: "#f8fafc",

                            fontSize: "27px",

                            fontWeight: "700",
                        }}
                    >
                        {card.value}
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            gap: "6px",
                            alignItems: "center",

                            color: card.accent,

                            fontSize: "11px",
                            fontWeight: "600",
                        }}
                    >
                        <FaArrowUp />

                        {card.change}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DashboardCards;