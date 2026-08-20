import { useEffect, useState } from "react";

import DashboardLayout from "../components/DashboardLayout";

import {
  FaUserCircle,
  FaEnvelope,
  FaBell,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function Settings() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DashboardLayout
      title="Settings"
      subtitle="Manage your profile and trading preferences."
    >
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "minmax(280px, .8fr) minmax(400px, 1.5fr)",

          gap: "20px",
        }}
      >
        {/* PROFILE */}

        <div
          style={{
            padding: "25px",

            background: "#111827",

            border: "1px solid #1e293b",

            borderRadius: "16px",
          }}
        >
          <FaUserCircle
            style={{
              display: "block",

              margin: "0 auto",

              color: "#38bdf8",

              fontSize: "75px",
            }}
          />

          <h2
            style={{
              textAlign: "center",

              marginBottom: "5px",

              color: "#f8fafc",
            }}
          >
            {user?.displayName || "Trader"}
          </h2>

          <p
            style={{
              textAlign: "center",

              color: "#64748b",

              fontSize: "12px",
            }}
          >
            {user?.email}
          </p>

          <div
            style={{
              marginTop: "25px",

              paddingTop: "20px",

              borderTop: "1px solid #1e293b",
            }}
          >
            <SettingInfo
              icon={<FaEnvelope />}
              title="Email"
              value={user?.email || "-"}
            />

            <SettingInfo
              icon={<FaShieldAlt />}
              title="Authentication"
              value="Firebase"
            />
          </div>
        </div>

        {/* PREFERENCES */}

        <div
          style={{
            padding: "25px",

            background: "#111827",

            border: "1px solid #1e293b",

            borderRadius: "16px",
          }}
        >
          <h3
            style={{
              marginTop: 0,

              color: "#f8fafc",
            }}
          >
            Trading Preferences
          </h3>

          <PreferenceRow
            icon={<FaBell />}
            title="Market Notifications"
            description="Receive alerts for important market movements."
          />

          <PreferenceRow
            icon={<FaRobot />}
            title="AI Signal Notifications"
            description="Receive notifications when new AI signals are generated."
          />

          <PreferenceRow
            icon={<FaShieldAlt />}
            title="Security Alerts"
            description="Receive account and login security notifications."
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

function SettingInfo({ icon, title, value }) {
  return (
    <div
      style={{
        marginBottom: "15px",

        display: "flex",
        alignItems: "center",

        gap: "11px",
      }}
    >
      <div
        style={{
          color: "#38bdf8",
        }}
      >
        {icon}
      </div>

      <div>
        <p
          style={{
            margin: 0,

            color: "#64748b",

            fontSize: "10px",
          }}
        >
          {title}
        </p>

        <p
          style={{
            margin: "2px 0 0",

            color: "#f8fafc",

            fontSize: "12px",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

function PreferenceRow({
  icon,
  title,
  description,
}) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div
      style={{
        padding: "18px 0",

        display: "flex",
        alignItems: "center",

        borderBottom: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          marginRight: "12px",

          background: "rgba(56,189,248,.08)",

          color: "#38bdf8",

          borderRadius: "10px",
        }}
      >
        {icon}
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <h4
          style={{
            margin: 0,

            color: "#f8fafc",

            fontSize: "13px",
          }}
        >
          {title}
        </h4>

        <p
          style={{
            margin: "4px 0 0",

            color: "#64748b",

            fontSize: "10px",
          }}
        >
          {description}
        </p>
      </div>

      <button
        onClick={() => setEnabled(!enabled)}
        style={{
          width: "48px",
          height: "25px",

          position: "relative",

          border: "none",

          borderRadius: "20px",

          background: enabled
            ? "#2563eb"
            : "#334155",

          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: "19px",
            height: "19px",

            position: "absolute",

            top: "3px",
            left: enabled ? "26px" : "3px",

            background: "white",

            borderRadius: "50%",

            transition: ".2s",
          }}
        />
      </button>
    </div>
  );
}

export default Settings;