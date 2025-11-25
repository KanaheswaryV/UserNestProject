import React from "react";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e8f1ff",
      padding: "50px",
      minHeight: "100vh"
    }}>

      {/* Top Navbar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 20px",
      }}>
        <img 
          src="/Images/birds.png"
          alt="UserNest Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        <h2>UserNest</h2>
      </div>

      {/* HERO SECTION */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px"
      }}>
        
        {/* LEFT TEXT */}
        <div style={{ maxWidth: "50%" }}>
          <h1 style={{ fontSize: "40px" }}>
            Welcome to UserNest
          </h1>
          <p style={{ fontSize: "18px" }}>
            Your digital home to connect, share, and grow together.
          </p>

          {/* Get Started Button → Routing here */}
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "12px 20px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer"
            }}>
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <img 
          src="/Images/UserNestAppImage.jpg"
          alt="Hero"
          style={{
            width: "700px",
            height: "500px",
            borderRadius: "10px",
            objectFit: "cover"
          }}
        />
      </div>

      {/* Top Right Login */}
      <div style={{
        position: "absolute",
        top: 20,
        right: 20,
        display: "flex",
        alignItems: "center"
      }}>
        <img 
          src="/Images/birds.png"
          alt="Hero"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            objectFit: "cover"
          }}
        />
        <button onClick={() => navigate("/login")} style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "8px",
          border: "none"
        }}>
          Login
        </button>
      </div>
    </div>
  );
}