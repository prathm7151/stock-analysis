import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import OptionChain from "./pages/OptionChain";
import Signals from "./pages/Signals";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}

        <Route
          path="/"
          element={<Landing />}
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />


        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* MARKET */}

        <Route
          path="/market"
          element={
            <ProtectedRoute>
              <Market />
            </ProtectedRoute>
          }
        />


        {/* OPTION CHAIN */}

        <Route
          path="/option-chain"
          element={
            <ProtectedRoute>
              <OptionChain />
            </ProtectedRoute>
          }
        />


        {/* SIGNALS */}

        <Route
          path="/signals"
          element={
            <ProtectedRoute>
              <Signals />
            </ProtectedRoute>
          }
        />


        {/* PORTFOLIO */}

        <Route
          path="/portfolio"
          element={
            <ProtectedRoute>
              <Portfolio />
            </ProtectedRoute>
          }
        />


        {/* NEWS */}

        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <News />
            </ProtectedRoute>
          }
        />


        {/* SETTINGS */}

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;