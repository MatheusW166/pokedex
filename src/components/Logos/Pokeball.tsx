import React from "react";

export function PokeballConcept(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={323}
      viewBox="0 0 323 323"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pokeball-concept"
      {...props}
    >
      <path
        d="M148.945 3.543c-35.704 2.59-70.307 18.127-96.593 43.392-10.359 9.887-16.399 17.184-23.934 28.718-13.731 21.03-22.992 47.552-24.716 70.779l-.472 6.906h83.179l.94-4.942c6.276-33.114 32.171-57.597 65.207-61.754 21.186-2.668 43.708 4.628 59.558 19.224 11.77 10.908 19.697 24.952 22.833 40.411l1.334 6.67 41.744.236c36.096.158 41.667 0 41.667-.94 0-.627-.549-5.336-1.175-10.436-7.064-53.912-39.865-99.423-88.67-123.04-11.77-5.727-26.522-10.673-38.686-12.869-7.768-1.492-26.993-3.375-31.544-3.14-1.098.078-5.885.391-10.672.785Z"
        fill="#8B1F1F"
        fillOpacity={0.25}
      />
      <path
        d="M153.496 103.903c-22.833 3.139-42.452 20.636-48.573 43.159-1.883 6.983-1.883 22.048 0 29.034 4.474 16.48 15.85 30.446 30.76 37.665 9.651 4.629 14.909 5.808 26.285 5.808 8.867-.078 10.514-.313 16.871-2.432 10.122-3.453 16.243-7.297 23.931-15.065 5.571-5.572 7.374-8.081 10.436-14.202 5.181-10.514 6.279-16.086 5.807-28.641-.471-13.653-2.903-20.872-10.358-31.386-12.235-17.348-34.209-26.844-55.159-23.94Zm14.751 33.427c8.867 2.432 16.167 10.436 18.05 19.696 2.274 10.75-3.689 22.443-13.967 27.465-3.844 1.883-5.413 2.197-11.143 2.197-5.414-.078-7.297-.391-10.201-1.884-5.885-3.058-9.024-6.043-11.77-11.143-5.1-9.574-3.766-21.027 3.376-28.718 7.215-7.768 15.849-10.359 25.655-7.613Z"
        fill="#8B1F1F"
        fillOpacity={0.25}
      />
      <path
        d="M3.702 177.036c2.196 28.25 15.536 61.128 34.057 83.806 5.336 6.592 17.968 19.225 24.56 24.561 47.863 38.76 114.562 45.824 169.879 18.046 16.163-8.159 28.014-16.715 41.196-29.975 26.521-26.599 42.057-59.793 45.904-98.004l.472-4.865h-83.725l-1.021 5.65c-4.001 23.617-23.068 46.844-45.51 55.475-10.985 4.238-15.853 5.1-28.327 5.1-9.338 0-12.555-.313-18.05-1.806-29.502-7.848-50.846-31.308-56.024-61.518l-.549-2.904H3.23l.472 6.434Z"
        fill="#8B1F1F"
        fillOpacity={0.25}
      />
    </svg>
  );
}

export function Pokeball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="261"
      height="261"
      fill="none"
      viewBox="0 0 261 261"
      className="pokeball"
      {...props}
    >
      <circle
        cx="130.5"
        cy="130.5"
        r="126.5"
        fill="#fff"
        stroke="#212121"
        strokeWidth="8"
      ></circle>
      <mask
        id="mask0_63_50"
        style={{ maskType: "alpha" }}
        width="247"
        height="247"
        x="7"
        y="7"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="130.5" cy="130.5" r="122.748" fill="#fff"></circle>
      </mask>
      <g mask="url(#mask0_63_50)">
        <path
          fill="#C12E28"
          d="M261 130.5A130.497 130.497 0 00130.5 0 130.498 130.498 0 000 130.5h261z"
        ></path>
        <path
          fill="#212121"
          d="M5.168 120.163H255.83100000000002V140.83599999999998H5.168z"
        ></path>
      </g>
      <circle
        cx="130.5"
        cy="130.5"
        r="28.302"
        fill="#fff"
        stroke="#212121"
        strokeWidth="8"
      ></circle>
    </svg>
  );
}
