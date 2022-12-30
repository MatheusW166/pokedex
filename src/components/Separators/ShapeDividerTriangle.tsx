import React from "react";

export function ShapeDividerTriangle(props: React.SVGProps<SVGSVGElement>) {
  return <svg
    width={1440}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1440 120H0L1070.7 5.28 1440 120Z" fill="#F5F5F5" />
  </svg>;
}