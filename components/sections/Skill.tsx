import React from "react";

const Skill = () => {
  return (
    <div id="skills" className="h-screen p-10 flex justify-center items-center">
      <div className="flex ">
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
        <div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
          <div className="border p-2 m-1 h-40 w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

// This is a React functional component for the science-style block.
// It uses Tailwind CSS for styling.
export const ScienceBlock: React.FC = () => {
  return (
    // Main Science Block Container
    // This div serves as the overall wrapper for the component's content.
    // It applies dark background, padding, rounded corners, shadow, and border.
    // It's a flex container for its children, arranged vertically by default.
    // Transition classes are for subtle animation effects.
    <div
      className="
        bg-gray-900 bg-opacity-70 backdrop-blur-sm
        p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700
        w-11/12 max-w-4xl mx-auto
        flex flex-col gap-6
        transition-all duration-300 ease-in-out
      "
    >
      {/* Section Title */}
      {/* This div centers the title and subtitle. */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-sky-400">
          <span className="text-blue-300">SYSTEM</span>{" "}
          <span className="text-green-300">DIAGNOSTICS</span>{" "}
          <span className="text-orange-300">INTERFACE</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Real-time data streams and module status
        </p>
      </div>

      {/* Main Content Area: Flex Container for Modules */}
      {/* This div arranges the left and right columns.
          It's a vertical flex container on small screens and horizontal on large screens. */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Data Modules (Grid Layout) */}
        {/* This column takes flexible width and uses a grid for its child modules. */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Module 1: System Health */}
          {/* Individual module styles: dark background, padding, rounded corners, border, inner shadow.
              Hover effect changes border color. */}
          <div
            className="
              bg-gray-800 p-4 rounded-lg border border-gray-700
              flex flex-col justify-between items-start
              shadow-inner hover:border-sky-500 transition-colors duration-200
            "
          >
            <p className="text-sm font-semibold text-gray-400 mb-2">
              MODULE 01: SYSTEM HEALTH
            </p>
            <span className="text-xl font-mono text-green-400">
              STATUS: ONLINE
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Efficiency: 98.7%
            </span>
          </div>

          {/* Module 2: Energy Levels */}
          <div
            className="
              bg-gray-800 p-4 rounded-lg border border-gray-700
              flex flex-col justify-between items-start
              shadow-inner hover:border-purple-500 transition-colors duration-200
            "
          >
            <p className="text-sm font-semibold text-gray-400 mb-2">
              MODULE 02: ENERGY LEVELS
            </p>
            <span className="text-xl font-mono text-purple-400">
              CHARGE: 85%
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Last Update: 15:30 GMT
            </span>
          </div>

          {/* Module 3: Network Activity */}
          {/* This module spans two columns on medium screens and up. */}
          <div
            className="
              bg-gray-800 p-4 rounded-lg border border-gray-700
              flex flex-col justify-between items-start md:col-span-2
              shadow-inner hover:border-orange-500 transition-colors duration-200
            "
          >
            <p className="text-sm font-semibold text-gray-400 mb-2">
              MODULE 03: NETWORK ACTIVITY
            </p>
            <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
              <div className="bg-orange-400 h-full w-[75%] rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs text-gray-500 mt-2">
              Data Flow: 75% Capacity
            </span>
          </div>
        </div>

        {/* Right Column: Log/Console Output Area */}
        {/* This column takes 1/3rd width on large screens and includes a scrollable log. */}
        <div
          className="
            lg:w-1/3 bg-gray-800 p-4 rounded-lg border border-gray-700
            flex flex-col shadow-inner
            overflow-hidden
          "
        >
          <p className="text-sm font-semibold text-gray-400 mb-3">
            SYSTEM LOG:
          </p>
          <div className="flex-1 overflow-y-auto text-xs font-mono text-gray-300 space-y-1 pr-2">
            <p className="text-green-500">
              [OK] Initializing core protocols...
            </p>
            <p className="text-yellow-500">
              [WARN] Sensor array check: Minor anomaly detected.
            </p>
            <p>[INFO] Data stream established: Node-04.</p>
            <p className="text-red-500">
              [ERROR] Sub-routine 'Alpha' terminated unexpectedly.
            </p>
            <p>[INFO] Processing data packet: ID#8374.</p>
            <p className="text-green-500">
              [OK] All systems nominal. Awaiting command input.
            </p>
            <p>[INFO] User authentication successful. Welcome, Operator.</p>
            <p className="text-yellow-500">
              [WARN] External communication link fluctuation.
            </p>
            <p>[INFO] Syncing auxiliary data storage.</p>
          </div>
        </div>
      </div>

      {/* Footer/Status Bar */}
      {/* Displays version and sync status at the bottom. */}
      <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
        <span>Interface Version: 3.14.15</span>
        <span>Last Sync: 2025-06-28 17:54 GMT</span>
      </div>
    </div>
  );
};
