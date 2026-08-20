import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaTachometerAlt,
  FaChartLine,
  FaListAlt,
  FaRobot,
  FaWallet,
  FaNewspaper,
  FaCog,
  FaSignOutAlt,
  FaUserCircle,
  FaCircle,
} from "react-icons/fa";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { logoutUser } from "../utils/auth";

function Sidebar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loggingOut, setLoggingOut] = useState(false);

  // ==========================================
  // GET CURRENT FIREBASE USER
  // ==========================================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();
  }, []);

  // ==========================================
  // FIREBASE LOGOUT
  // ==========================================

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      const result = await logoutUser();

      if (result.success) {

        // replace: true prevents /dashboard
        // from remaining as the latest history entry
        navigate("/login", {
          replace: true,
        });

      } else {
        console.error(
          "Logout failed:",
          result.error
        );
      }

    } catch (error) {
      console.error(
        "Logout error:",
        error
      );

    } finally {
      setLoggingOut(false);
    }
  };

  // ==========================================
  // SIDEBAR MENU
  // ==========================================

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Market",
      path: "/market",
      icon: <FaChartLine />,
    },
    {
      name: "Option Chain",
      path: "/option-chain",
      icon: <FaListAlt />,
    },
    {
      name: "AI Signals",
      path: "/signals",
      icon: <FaRobot />,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: <FaWallet />,
    },
    {
      name: "News",
      path: "/news",
      icon: <FaNewspaper />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside
      style={{
        width: "270px",
        height: "100vh",

        position: "fixed",
        top: 0,
        left: 0,

        display: "flex",
        flexDirection: "column",

        background:
          "linear-gradient(180deg, #111827 0%, #0f172a 50%, #0b1120 100%)",

        borderRight: "1px solid #1e293b",

        color: "white",

        boxSizing: "border-box",

        zIndex: 1000,

        boxShadow:
          "4px 0 25px rgba(0,0,0,0.15)",
      }}
    >

      {/* ======================================
          LOGO
      ====================================== */}

      <div
        style={{
          padding: "25px 20px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >

          {/* Logo Icon */}

          <div
            style={{
              width: "42px",
              height: "42px",

              borderRadius: "12px",

              background:
                "linear-gradient(135deg,#2563eb,#06b6d4)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontSize: "20px",

              boxShadow:
                "0 5px 15px rgba(37,99,235,0.3)",
            }}
          >
            <FaChartLine />
          </div>

          {/* Logo Text */}

          <div>
            <h2
              style={{
                margin: 0,

                fontSize: "23px",
                fontWeight: "800",

                background:
                  "linear-gradient(90deg,#38bdf8,#3b82f6)",

                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TradePulse
            </h2>

            <p
              style={{
                margin: "3px 0 0",

                color: "#64748b",

                fontSize: "12px",
              }}
            >
              AI Trading Platform
            </p>
          </div>

        </div>
      </div>


      {/* ======================================
          NAVIGATION
      ====================================== */}

      <nav
        style={{
          flex: 1,

          padding: "20px 14px",

          overflowY: "auto",

          minHeight: 0,
        }}
      >

        <p
          style={{
            paddingLeft: "13px",

            marginTop: 0,
            marginBottom: "12px",

            color: "#475569",

            fontSize: "11px",
            fontWeight: "700",

            letterSpacing: "1.2px",
          }}
        >
          MAIN MENU
        </p>


        {menu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}

            style={({ isActive }) => ({
              display: "flex",

              alignItems: "center",

              gap: "14px",

              padding: "13px 16px",

              marginBottom: "7px",

              borderRadius: "11px",

              textDecoration: "none",

              color: isActive
                ? "#ffffff"
                : "#94a3b8",

              background: isActive
                ? "linear-gradient(90deg,#2563eb,#3b82f6)"
                : "transparent",

              fontSize: "15px",

              fontWeight: isActive
                ? "600"
                : "500",

              boxShadow: isActive
                ? "0 5px 15px rgba(37,99,235,0.25)"
                : "none",

              transition: "all 0.2s ease",
            })}
          >

            <span
              style={{
                fontSize: "17px",
                width: "20px",
              }}
            >
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>


      {/* ======================================
          BOTTOM SECTION
      ====================================== */}

      <div
        style={{
          padding: "14px",

          borderTop:
            "1px solid #1e293b",

          background:
            "rgba(15,23,42,0.98)",

          flexShrink: 0,
        }}
      >

        {/* ======================================
            FIREBASE USER
        ====================================== */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: "11px",

            padding: "12px",

            background: "#111827",

            border:
              "1px solid #1e293b",

            borderRadius: "12px",

            marginBottom: "10px",
          }}
        >

          <FaUserCircle
            style={{
              fontSize: "36px",

              color: "#38bdf8",

              flexShrink: 0,
            }}
          />


          <div
            style={{
              minWidth: 0,
              flex: 1,
            }}
          >

            {/* Firebase displayName */}

            <p
              style={{
                margin: 0,

                color: "#f8fafc",

                fontSize: "14px",

                fontWeight: "600",

                whiteSpace: "nowrap",

                overflow: "hidden",

                textOverflow: "ellipsis",
              }}
            >
              {user?.displayName || "Trader"}
            </p>


            {/* Firebase email */}

            <p
              style={{
                margin: "4px 0 0",

                color: "#64748b",

                fontSize: "11px",

                whiteSpace: "nowrap",

                overflow: "hidden",

                textOverflow: "ellipsis",
              }}
            >
              {user?.email || "Firebase User"}
            </p>

          </div>

        </div>


        {/* ======================================
            SYSTEM STATUS
        ====================================== */}

        <div
          style={{
            padding: "11px 13px",

            background:
              "rgba(34,197,94,0.05)",

            border:
              "1px solid rgba(34,197,94,0.15)",

            borderRadius: "10px",

            marginBottom: "10px",
          }}
        >

          {/* Connected */}

          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: "7px",

              marginBottom: "7px",
            }}
          >

            <FaCircle
              style={{
                color: "#22c55e",

                fontSize: "8px",
              }}
            />

            <span
              style={{
                color: "#22c55e",

                fontSize: "13px",

                fontWeight: "700",
              }}
            >
              System Connected
            </span>

          </div>


          {/* Broker */}

          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              fontSize: "11px",
            }}
          >

            <span
              style={{
                color: "#64748b",
              }}
            >
              Broker
            </span>

            <span
              style={{
                color: "#e2e8f0",

                fontWeight: "600",
              }}
            >
              Upstox
            </span>

          </div>


          {/* AI Engine */}

          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              fontSize: "11px",

              marginTop: "5px",
            }}
          >

            <span
              style={{
                color: "#64748b",
              }}
            >
              AI Engine
            </span>

            <span
              style={{
                color: "#38bdf8",

                fontWeight: "600",
              }}
            >
              Online
            </span>

          </div>

        </div>


        {/* ======================================
            FIREBASE LOGOUT BUTTON
        ====================================== */}

        <button
          onClick={handleLogout}

          disabled={loggingOut}

          style={{
            width: "100%",

            padding: "12px 15px",

            display: "flex",

            justifyContent: "center",

            alignItems: "center",

            gap: "9px",

            background: loggingOut
              ? "#334155"
              : "rgba(239,68,68,0.10)",

            color: loggingOut
              ? "#94a3b8"
              : "#f87171",

            border:
              "1px solid rgba(239,68,68,0.30)",

            borderRadius: "10px",

            cursor: loggingOut
              ? "not-allowed"
              : "pointer",

            fontSize: "14px",

            fontWeight: "600",

            transition:
              "all 0.2s ease",
          }}

          onMouseEnter={(e) => {

            if (!loggingOut) {
              e.currentTarget.style.background =
                "#ef4444";

              e.currentTarget.style.color =
                "#ffffff";
            }

          }}

          onMouseLeave={(e) => {

            if (!loggingOut) {
              e.currentTarget.style.background =
                "rgba(239,68,68,0.10)";

              e.currentTarget.style.color =
                "#f87171";
            }

          }}
        >

          <FaSignOutAlt />

          {loggingOut
            ? "Logging out..."
            : "Logout"}

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;