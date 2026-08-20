import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children, title, subtitle }) {
    return (
        <div
            style={{
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at top right, rgba(37,99,235,0.10), transparent 30%), #0b1120",
                color: "white",
            }}
        >
            <Sidebar />

            {/* Main content starts AFTER 270px sidebar */}
            <div
                style={{
                    marginLeft: "270px",
                    minHeight: "100vh",
                    width: "calc(100% - 270px)",
                }}
            >
                <Navbar />

                <main
                    style={{
                        padding: "28px 32px 40px",
                    }}
                >
                    {(title || subtitle) && (
                        <div
                            style={{
                                marginBottom: "28px",
                            }}
                        >
                            {title && (
                                <h1
                                    style={{
                                        margin: 0,
                                        fontSize: "30px",
                                        fontWeight: "700",
                                        color: "#f8fafc",
                                    }}
                                >
                                    {title}
                                </h1>
                            )}

                            {subtitle && (
                                <p
                                    style={{
                                        margin: "7px 0 0",
                                        color: "#64748b",
                                        fontSize: "14px",
                                    }}
                                >
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    )}

                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;