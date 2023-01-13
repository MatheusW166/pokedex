import React from "react";

export function ShapeDividerTriangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1440"
      viewBox="0 0 1440 120"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shape-divider-triangle"
      {...props}
    >
      <path d="M1440 120H0L1070.7 5.28 1440 120Z" />
    </svg>
  );
}
