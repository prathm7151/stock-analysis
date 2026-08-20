import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChartLine, FaRobot, FaShieldAlt } from "react-icons/fa";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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

    // Password validation
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Confirm password validation
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Get newly created Firebase user
      const user = userCredential.user;

      // Save full name in Firebase Authentication
      await updateProfile(user, {
        displayName: form.name,
      });

      console.log("Registered User:", user);
      console.log("User UID:", user.uid);
      console.log("User Email:", user.email);

      // Firebase automatically logs the user in after registration.
      // Log them out because we want to redirect to login page.
      await signOut(auth);

      setSuccess(true);

      setTimeout(() => {
        navigate("/dashboard", {
          replace: true,
        });
      }, 1200);
    } catch (error) {
      console.error("Firebase Registration Error:", error);

      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("Registration failed. Please try again.");
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
            Create Account
          </h2>

          {success ? (
            <div
              style={{
                background: "rgba(34,197,94,.12)",
                border: "1px solid rgba(34,197,94,.35)",
                color: "#86efac",
                borderRadius: "10px",
                padding: "15px",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              Account created. Redirecting to login…
            </div>
          ) : (
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
                type="text"
                name="name"
                placeholder="Full name"
                value={form.name}
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
                  marginBottom: "20px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "16px",
                }}
              />

              <input
                type="password"
                name="confirm"
                placeholder="Confirm password"
                value={form.confirm}
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
                {loading ? "Creating Account..." : "Register"}
              </button>
            </form>
          )}

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#94a3b8",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#38bdf8",
              }}
            >
              Log in
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

export default Register;