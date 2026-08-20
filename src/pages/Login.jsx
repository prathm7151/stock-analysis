import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      console.log("Login successful");
      console.log("User:", user);
      console.log("UID:", user.uid);
      console.log("Email:", user.email);

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      console.error("Firebase Login Error:", error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many login attempts. Please try again later.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "1000px",
          display: "flex",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0px 10px 35px rgba(0,0,0,.5)",
          background: "#111827",
        }}
      >
        {/* Left Side */}

        <div
          style={{
            flex: 1,
            background: "linear-gradient(135deg,#2563eb,#06b6d4)",
            padding: "60px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "20px",
            }}
          >
            AI Trading Platform
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
            }}
          >
            AI Powered Financial & Trading Algorithm Platform
          </p>

          <div style={{ marginTop: "60px" }}>
            <p
              style={{
                marginBottom: "25px",
                fontSize: "18px",
              }}
            >
              <FaChartLine /> Live Market Analysis
            </p>

            <p
              style={{
                marginBottom: "25px",
                fontSize: "18px",
              }}
            >
              <FaRobot /> AI Trading Signals
            </p>

            <p style={{ fontSize: "18px" }}>
              <FaShieldAlt /> Secure Portfolio Management
            </p>
          </div>
        </div>

        {/* Right Side */}

        <div
          style={{
            flex: 1,
            padding: "60px",
            background: "#0f172a",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "40px",
            }}
          >
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit}>
            {error && (
              <div
                style={{
                  background: "rgba(239,68,68,.12)",
                  border: "1px solid rgba(239,68,68,.35)",
                  color: "#fca5a5",
                  borderRadius: "10px",
                  padding: "12px 15px",
                  marginBottom: "20px",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "30px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                background: loading ? "#475569" : "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#38bdf8",
              }}
            >
              Register
            </Link>
          </p>

          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Final Year Project • AI Powered Trading Platform
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
