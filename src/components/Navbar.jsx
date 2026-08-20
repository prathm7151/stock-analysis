import { useEffect, useState } from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaCircle,
} from "react-icons/fa";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header
      style={{
        height: "78px",

        padding: "0 32px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        background: "rgba(15,23,42,0.92)",

        backdropFilter: "blur(12px)",

        borderBottom: "1px solid #1e293b",

        position: "sticky",
        top: 0,

        zIndex: 100,
      }}
    >
      {/* Left */}

      <div>
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
            color: "#f8fafc",
          }}
        >
          Financial & Trading Dashboard
        </h2>

        <p
          style={{
            margin: "3px 0 0",
            color: "#64748b",
            fontSize: "12px",
          }}
        >
          {today}
        </p>
      </div>

      {/* Right */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* Search */}

        <div
          style={{
            width: "250px",
            height: "42px",

            display: "flex",
            alignItems: "center",

            padding: "0 14px",

            background: "#111827",

            border: "1px solid #1e293b",

            borderRadius: "10px",
          }}
        >
          <FaSearch
            style={{
              color: "#64748b",
              marginRight: "10px",
            }}
          />

          <input
            placeholder="Search stocks..."
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              color: "white",
              fontSize: "13px",
            }}
          />
        </div>

        {/* Live */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",

            padding: "9px 12px",

            background: "rgba(34,197,94,0.08)",

            border: "1px solid rgba(34,197,94,0.18)",

            borderRadius: "10px",

            color: "#22c55e",

            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          <FaCircle
            style={{
              fontSize: "7px",
            }}
          />

          Live Market
        </div>

        {/* Bell */}

        <button
          style={{
            width: "42px",
            height: "42px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            background: "#111827",

            border: "1px solid #1e293b",

            color: "#cbd5e1",

            borderRadius: "10px",

            cursor: "pointer",
          }}
        >
          <FaBell />
        </button>

        {/* User */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",

            padding: "7px 12px",

            background: "#111827",

            border: "1px solid #1e293b",

            borderRadius: "10px",
          }}
        >
          <FaUserCircle
            style={{
              color: "#38bdf8",
              fontSize: "27px",
            }}
          />

          <div>
            <p
              style={{
                margin: 0,
                color: "#f8fafc",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {user?.displayName || "Trader"}
            </p>

            <p
              style={{
                margin: 0,
                color: "#64748b",
                fontSize: "10px",
              }}
            >
              AI Trader
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;