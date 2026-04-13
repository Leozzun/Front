import React, { useState } from "react";

const Workspace = () => {
  const [focusMode, setFocusMode] = useState(false);

  const TASKS = [
    { id: 1, title: "Design System Update", time: "14:00", priority: "High" },
    { id: 2, title: "Client Meeting", time: "16:30", priority: "Medium" },
    { id: 3, title: "Refactor API Layer", time: "19:00", priority: "Low" },
  ];

  return (
    <div className={`v2-container ${focusMode ? "focus-active" : ""}`}>
      <div className="v2-sidebar">
        <div className="v2-user">JD</div>
        <div className="v2-menu">
          <div className="v2-item active">Dashboard</div>
          <div className="v2-item">Schedule</div>
          <div className="v2-item">Settings</div>
        </div>
      </div>

      <main className="v2-main">
        <header className="v2-header">
          <h2>Project Workspace</h2>
          <button
            onClick={() => setFocusMode(!focusMode)}
            className="v2-focus-btn"
          >
            {focusMode ? "Exit Focus" : "Focus Mode"}
          </button>
        </header>

        <section className="v2-grid">
          <div className="v2-widget v2-clock">
            <span className="v2-label">Current Time</span>
            <div className="v2-time">
              12:45<span>PM</span>
            </div>
          </div>

          <div className="v2-widget v2-tasks">
            <span className="v2-label">Upcoming Tasks</span>
            {TASKS.map((t) => (
              <div key={t.id} className="v2-task-item">
                <div className="v2-dot"></div>
                <div className="v2-t-info">
                  <h4>{t.title}</h4>
                  <span>{t.time}</span>
                </div>
                <div className={`v2-priority ${t.priority}`}>{t.priority}</div>
              </div>
            ))}
          </div>

          <div className="v2-widget v2-stats">
            <span className="v2-label">Productivity</span>
            <div className="v2-chart">84%</div>
            <p>Weekly Progress</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workspace;
