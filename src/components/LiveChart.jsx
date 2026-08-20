import {
    FaChartArea,
    FaCircle,
    FaExpand,
} from "react-icons/fa";

function LiveChart() {
    return (
        <div
            style={{
                marginTop: "22px",

                padding: "22px",

                background:
                    "linear-gradient(145deg,#111827,#0f172a)",

                border: "1px solid #1e293b",

                borderRadius: "16px",
            }}
        >
            <div
                style={{
                    marginBottom: "18px",

                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h3
                        style={{
                            margin: 0,

                            display: "flex",
                            alignItems: "center",

                            gap: "8px",

                            color: "#f8fafc",
                        }}
                    >
                        <FaChartArea
                            style={{
                                color: "#38bdf8",
                            }}
                        />

                        Live Market Chart
                    </h3>

                    <p
                        style={{
                            margin: "5px 0 0",

                            color: "#64748b",

                            fontSize: "11px",
                        }}
                    >
                        Real-time market movement
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",

                        gap: "12px",
                    }}
                >
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",

                            gap: "6px",

                            color: "#22c55e",

                            fontSize: "11px",
                        }}
                    >
                        <FaCircle style={{ fontSize: "7px" }} />

                        Live
                    </span>

                    <button
                        style={{
                            width: "35px",
                            height: "35px",

                            background: "#0f172a",

                            border: "1px solid #1e293b",

                            borderRadius: "8px",

                            color: "#94a3b8",

                            cursor: "pointer",
                        }}
                    >
                        <FaExpand />
                    </button>
                </div>
            </div>

            <div
                style={{
                    height: "340px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    position: "relative",

                    overflow: "hidden",

                    background: "#0b1120",

                    backgroundImage:
                        "linear-gradient(rgba(51,65,85,.20) 1px,transparent 1px),linear-gradient(90deg,rgba(51,65,85,.20) 1px,transparent 1px)",

                    backgroundSize: "55px 55px",

                    border: "1px solid #1e293b",

                    borderRadius: "14px",
                }}
            >
                <div
                    style={{
                        textAlign: "center",

                        padding: "20px",

                        background: "rgba(11,17,32,.8)",

                        borderRadius: "15px",
                    }}
                >
                    <FaChartArea
                        style={{
                            color: "#2563eb",
                            fontSize: "43px",
                        }}
                    />

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontWeight: "600",
                        }}
                    >
                        TradingView Chart
                    </p>

                    <p
                        style={{
                            color: "#475569",
                            fontSize: "11px",
                        }}
                    >
                        Live chart integration will appear here
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LiveChart;