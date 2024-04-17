import React from "react";
import Signup from "./Componenets/Auth/signup";
import { AuthProvider } from "./contexts/AuthContexts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Componenets/Auth/Login";
import Profile from "./Componenets/Auth/Profile";
import PrivateRoute from "./Componenets/Auth/PrivateRoute";
import ForgotPassword from "./Componenets/Auth/ForgotPassword";
import UpdateProfile from "./Componenets/Auth/UpdateProfile";
import Dashboard from "./Drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/folders/:folderId"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* auth */}
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
