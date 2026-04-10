import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Student Portal</h1>
      <p>
        Explore React concepts like State, Props, Hooks, Routing, and Lifecycle
        methods through an interactive interface.
      </p>

      <div className="card-grid">
        <div className="info-card">
          <h3>📘 Components</h3>
          <p>Reusable UI elements built using JSX.</p>
        </div>
        <div className="info-card">
          <h3>🔄 Lifecycle</h3>
          <p>Understand mounting and updating phases.</p>
        </div>
        <div className="info-card">
          <h3>⚛️ Hooks</h3>
          <p>Manage state and side effects with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;