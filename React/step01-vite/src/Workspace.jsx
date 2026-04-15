// import React, { useState } from "react";

// const Workspace = () => {
//   const [focusMode, setFocusMode] = useState(false);

//   const TASKS = [
//     { id: 1, title: "Design System Update", time: "14:00", priority: "High" },
//     { id: 2, title: "Client Meeting", time: "16:30", priority: "Medium" },
//     { id: 3, title: "Refactor API Layer", time: "19:00", priority: "Low" },
//   ];

//   return (
//     <div className={`v2-container ${focusMode ? "focus-active" : ""}`}>
//       <div className="v2-sidebar">
//         <div className="v2-user">JD</div>
//         <div className="v2-menu">
//           <div className="v2-item active">Dashboard</div>
//           <div className="v2-item">Schedule</div>
//           <div className="v2-item">Settings</div>
//         </div>
//       </div>

//       <main className="v2-main">
//         <header className="v2-header">
//           <h2>Project Workspace</h2>
//           <button
//             onClick={() => setFocusMode(!focusMode)}
//             className="v2-focus-btn"
//           >
//             {focusMode ? "Exit Focus" : "Focus Mode"}
//           </button>
//         </header>

//         <section className="v2-grid">
//           <div className="v2-widget v2-clock">
//             <span className="v2-label">Current Time</span>
//             <div className="v2-time">
//               12:45<span>PM</span>
//             </div>
//           </div>

//           <div className="v2-widget v2-tasks">
//             <span className="v2-label">Upcoming Tasks</span>
//             {TASKS.map((t) => (
//               <div key={t.id} className="v2-task-item">
//                 <div className="v2-dot"></div>
//                 <div className="v2-t-info">
//                   <h4>{t.title}</h4>
//                   <span>{t.time}</span>
//                 </div>
//                 <div className={`v2-priority ${t.priority}`}>{t.priority}</div>
//               </div>
//             ))}
//           </div>

//           <div className="v2-widget v2-stats">
//             <span className="v2-label">Productivity</span>
//             <div className="v2-chart">84%</div>
//             <p>Weekly Progress</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Workspace;

import React, { useState } from "react";

const Workspace = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div className={`v2-wrap ${focus ? "focus-mode" : ""}`}>
      <style>{`
        .v2-wrap { background: #080808; color: #fff; min-height: 100vh; font-family: 'Inter', sans-serif; transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .v2-main { padding: 4rem; max-width: 1400px; margin: 0 auto; }
        .v2-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6rem; }
        .v2-logo { font-weight: 900; letter-spacing: 0.5em; font-size: 0.8rem; color: #ff4500; }
        .v2-btn { background: #fff; color: #000; border: none; padding: 0.8rem 2rem; border-radius: 40px; font-weight: 800; font-size: 0.7rem; cursor: pointer; transition: 0.3s; }
        .v2-btn:hover { transform: scale(1.05); box-shadow: 0 0 20px rgba(255,255,255,0.2); }
        .v2-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .v2-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 2.5rem; border-radius: 30px; backdrop-filter: blur(20px); transition: 0.5s; }
        .v2-card:hover { background: rgba(255,255,255,0.06); border-color: #ff4500; }
        .v2-label { font-size: 0.6rem; letter-spacing: 0.2em; color: #666; text-transform: uppercase; margin-bottom: 1.5rem; display: block; }
        .v2-big-text { font-size: 4rem; font-weight: 800; letter-spacing: -2px; }
        .v2-big-text span { font-size: 1rem; color: #ff4500; margin-left: 0.5rem; }
        .v2-list { margin-top: 2rem; }
        .v2-item { display: flex; align-items: center; justify-content: space-between; padding: 1rem 0; border-top: 1px solid rgba(255,255,255,0.05); }
        .v2-item h4 { font-size: 0.9rem; font-weight: 400; }
        .v2-item .status { width: 8px; height: 8px; background: #ff4500; border-radius: 50%; box-shadow: 0 0 10px #ff4500; }
        .focus-mode { background: #000; }
        .focus-mode .v2-card:not(.v2-focus-widget) { opacity: 0; transform: translateY(20px); }
        .focus-mode .v2-focus-widget { grid-column: span 3; padding: 10rem; text-align: center; }
      `}</style>
      <main className="v2-main">
        <header className="v2-header">
          <div className="v2-logo">MONOLITH.SYSTEM</div>
          <button className="v2-btn" onClick={() => setFocus(!focus)}>
            {focus ? "EXIT FOCUS" : "FOCUS MODE"}
          </button>
        </header>
        <section className="v2-grid">
          <div className="v2-card v2-focus-widget">
            <span className="v2-label">Performance Time</span>
            <div className="v2-big-text">
              12:48<span>PM</span>
            </div>
            {focus && (
              <p style={{ marginTop: "2rem", color: "#666" }}>
                Deep work session active.
              </p>
            )}
          </div>
          <div className="v2-card">
            <span className="v2-label">Active Tasks</span>
            <div className="v2-list">
              <div className="v2-item">
                <h4>Design System</h4>
                <div className="status" />
              </div>
              <div className="v2-item">
                <h4>API Refactoring</h4>
                <div className="status" />
              </div>
              <div className="v2-item">
                <h4>Client Review</h4>
                <div
                  className="status"
                  style={{ background: "#333", boxShadow: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="v2-card">
            <span className="v2-label">Productivity</span>
            <div className="v2-big-text">
              89<span>%</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workspace;
