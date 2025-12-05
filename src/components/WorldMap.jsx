"use client";
import { useRef } from "react";
import { motion } from "framer-motion"; // Changed to framer-motion for consistency
import DottedMap from "dotted-map";

export function WorldMap({ lineColor = "#F0F0F0" }) { // Default line color is already grayish-white
  const svgRef = useRef(null);
  const map = new DottedMap({ height: 80, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.15,
    color: "#FFFFFF",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const countryDots = [
    { lat: 41.8719, lng: 12.5674, name: "Italy" },
    { lat: 51.1657, lng: 10.4515, name: "Germany" },
    { lat: 52.1326, lng: 5.2913, name: "Netherlands" },
    { lat: 60.1282, lng: 18.6435, name: "Sweden" },
    { lat: 61.9241, lng: 25.7482, name: "Finland" },
    { lat: 37.0902, lng: -95.7129, name: "USA" },
    { lat: 56.1304, lng: -106.3468, name: "Canada" },
    { lat: -25.2744, lng: 133.7751, name: "Australia" },
  ];

  // Function to generate a curved path between two points
  const getCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    const controlX = midX + (end.y - start.y) * 0.2; // Adjust curvature
    const controlY = midY - (end.x - start.x) * 0.2; // Adjust curvature
    return `M${start.x},${start.y} Q${controlX},${controlY} ${end.x},${end.y}`;
  };

  return (
    <div className="w-full aspect-2/1 relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full mask-[linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="396"
        width="844"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        {countryDots.map((dot, i) => {
          const point = projectPoint(dot.lat, dot.lng);
          return (
            <g key={`country-dot-${i}`}>
              {/* Pulse dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={2}
                fill="white"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5, // Stagger animation
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {/* Animated curved lines */}
        {/* Animated curved lines */}
        {/* Animated curved lines */}
        {countryDots.map((startDot, i) => {
          const endDot = countryDots[(i + 1) % countryDots.length]; // Connect to the next country
          const startPoint = projectPoint(startDot.lat, startDot.lng);
          const endPoint = projectPoint(endDot.lat, endDot.lng);

          const pathD_forward = getCurvedPath(startPoint, endPoint);
          const pathD_backward = getCurvedPath(endPoint, startPoint); // Path back

          return (
            <g key={`line-pair-${i}`}>
              {/* Forward line: starts from first dot, travels to second, dissolves */}
              <motion.path
                key={`curved-line-forward-${i}`}
                d={pathD_forward}
              stroke={lineColor}
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 3.5, // Faster duration for one way travel (draw and retract)
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 2, // Increased delay for more distinct staggering between segments
                ease: "easeInOut",
              }}
            />
              {/* Backward line: starts from second dot, travels to first, dissolves */}
              <motion.path
                key={`curved-line-backward-${i}`}
                d={pathD_backward}
                stroke={lineColor}
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 3.5, // Faster duration for one way travel (draw and retract)
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 2 + 1, // Backward line starts after forward line has drawn halfway and is about to retract
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
