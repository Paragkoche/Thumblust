import React from "react";

const ComingSoonPage = () => (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
    }}
    className="select-none"
  >
    <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>Thumblust</h1>
    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Coming Soon</h1>
    <p style={{ fontSize: "1.5rem", color: "#555", marginBottom: "1rem" }}>
      Porn Search Engine is launching soon.
    </p>
    <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem" }}>
      A smarter way to explore, search, and discover adult content with
      precision.
    </p>
    <ul
      style={{
        color: "#666",
        marginBottom: "2rem",
        listStyleType: "none",
        padding: 0,
      }}
    >
      <li>
        🔍 Advanced search filters by category, tags, duration, and source
      </li>
      <li>⭐ Personalized recommendations based on preferences</li>
      <li>🔒 Privacy-focused browsing with no tracking</li>
    </ul>
    <p style={{ color: "#888", marginBottom: "1rem" }}>
      Stay tuned for a powerful way to search and discover information!
    </p>
  </div>
);

export default ComingSoonPage;
