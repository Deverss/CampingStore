import React from "react";
import cn from "classnames";

const icons = {
  cart: {
    viewBox: "0 0 22 21",
    d: "M1 0a1 1 0 1 0 0 2h2.817l.74 3.681c.005.028.01.055.017.081l1.518 7.548v.002c.13.647.484 1.228.999 1.64.512.41 1.152.63 1.808.62h8.82a2.823 2.823 0 0 0 1.808-.62c.516-.413.87-.994 1-1.642l1.455-7.598A1 1 0 0 0 21 4.524H6.365L5.617.803A1 1 0 0 0 4.637 0H1zm7.053 12.919L6.767 6.524H19.79l-1.225 6.395v.003a.808.808 0 0 1-.288.47.824.824 0 0 1-.53.18H8.87a.824.824 0 0 1-.53-.18.808.808 0 0 1-.288-.473zm-1.69 6.176c0-1.056.86-1.905 1.91-1.905 1.05 0 1.909.849 1.909 1.905 0 1.057-.86 1.905-1.91 1.905-1.05 0-1.908-.848-1.908-1.905zm10 0c0-1.056.86-1.905 1.91-1.905 1.05 0 1.909.849 1.909 1.905 0 1.057-.86 1.905-1.91 1.905-1.05 0-1.909-.848-1.909-1.905z",
  },

  user: {
    viewBox: "0 0 20 21",
    d: "M6.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zM10 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zM5.5 13c-1.423 0-2.808.502-3.846 1.424C.612 15.35 0 16.634 0 18v2a1 1 0 1 0 2 0v-2c0-.755.336-1.507.982-2.081C3.632 15.341 4.536 15 5.5 15h9c.964 0 1.868.341 2.518.919.646.574.982 1.326.982 2.081v2a1 1 0 1 0 2 0v-2c0-1.367-.612-2.65-1.654-3.576C17.308 13.502 15.923 13 14.5 13h-9z",
  },

  search: {
    viewBox: "0 0 23 23",
    d: "M2 9.889a7.889 7.889 0 1 1 13.56 5.483 1.01 1.01 0 0 0-.189.19A7.889 7.889 0 0 1 2 9.889zm14.138 7.665a9.848 9.848 0 0 1-6.25 2.224C4.429 19.778 0 15.35 0 9.888 0 4.429 4.427 0 9.889 0c5.461 0 9.889 4.427 9.889 9.889a9.848 9.848 0 0 1-2.226 6.25l4.155 4.155a1 1 0 1 1-1.414 1.414l-4.155-4.154z",
  },

  close: {
    viewBox: "0 0 16 16",
    d: "M.293 14.293a1 1 0 1 0 1.414 1.414L8 9.414l6.293 6.293a1 1 0 1 0 1.414-1.414L9.414 8l6.293-6.293A1 1 0 1 0 14.293.293L8 6.586 1.707.293A1 1 0 0 0 .293 1.707L6.586 8 .293 14.293z",
  },

  magnifier: {
    viewBox: "0 0 22 22",
    d: "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8-10C4.477 0 0 4.477 0 10s4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.257l3.964 3.964a1 1 0 0 0 1.414-1.414l-3.964-3.964A9.958 9.958 0 0 0 20 9.999C20 4.478 15.523 0 10 0zm0 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 1-1z",
  },

  "heart-border": {
    viewBox: "0 0 32 28",
    d: "M22.63.75a8.73 8.73 0 0 0-3.291.644l-.345.149a8.62 8.62 0 0 0-2.45 1.687l-.545.534-.543-.534A8.686 8.686 0 0 0 9.369.75c-2.281 0-4.47.892-6.087 2.48A8.429 8.429 0 0 0 .75 9.242c0 2.257.912 4.42 2.532 6.013l11.841 11.637a1.25 1.25 0 0 0 1.753 0l11.841-11.637a8.482 8.482 0 0 0 1.874-2.755 8.382 8.382 0 0 0 0-6.515 8.484 8.484 0 0 0-1.874-2.755 8.625 8.625 0 0 0-2.795-1.836A8.73 8.73 0 0 0 22.63.75zm0 2.5a6.23 6.23 0 0 1 2.349.46 6.126 6.126 0 0 1 1.986 1.303 5.985 5.985 0 0 1 1.322 1.944 5.883 5.883 0 0 1 0 4.571 5.983 5.983 0 0 1-1.322 1.943L15.999 24.247 5.035 13.472a5.929 5.929 0 0 1-1.785-4.23c0-1.584.641-3.105 1.785-4.229a6.185 6.185 0 0 1 4.334-1.762c1.627 0 3.187.635 4.335 1.762l1.42 1.396a1.25 1.25 0 0 0 1.752 0l1.42-1.396A6.128 6.128 0 0 1 20.28 3.71a6.23 6.23 0 0 1 2.35-.459z",
  },

  "heart-fill": {
    viewBox: "0 0 32 28",
    d: "M19.339 1.394a8.73 8.73 0 0 1 6.583 0 8.627 8.627 0 0 1 2.795 1.836 8.484 8.484 0 0 1 1.874 2.755 8.382 8.382 0 0 1 0 6.515 8.485 8.485 0 0 1-1.874 2.755L16.876 26.89a1.25 1.25 0 0 1-1.753 0L3.284 15.256A8.43 8.43 0 0 1 .75 9.242c0-2.259.913-4.421 2.532-6.012A8.685 8.685 0 0 1 9.37.75c2.279 0 4.469.89 6.087 2.48l.544.535.543-.535a8.628 8.628 0 0 1 2.796-1.836z",
  },

  "arrow-next": {
    viewBox: "0 0 8 14",
    d: "M.293.293a1 1 0 0 0 0 1.414L5.586 7 .293 12.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z",
  },
  "arrow-prev": {
    viewBox: "0 0 8 14",
    d: "M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 1 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z",
  },
  instagram: {
    viewBox: "0 0 20 20",
    d: "M5.5 2A3.5 3.5 0 0 0 2 5.5v9A3.5 3.5 0 0 0 5.5 18h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 14.5 2h-9zM0 5.5A5.5 5.5 0 0 1 5.5 0h9A5.5 5.5 0 0 1 20 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 0 14.5v-9zm10.42 1.889a2.6 2.6 0 1 0-.762 5.143 2.6 2.6 0 0 0 .762-5.143zm-2.5-1.511a4.6 4.6 0 1 1 4.238 8.166A4.6 4.6 0 0 1 7.92 5.878zm7.03-1.828a1 1 0 1 0 0 2h.008a1 1 0 0 0 0-2h-.008z",
  },

  twitter: {
    viewBox: "0 0 22 18",
    d: "M13.27.326A5.148 5.148 0 0 1 16.3.148a5.101 5.101 0 0 1 2.11 1.085A8.977 8.977 0 0 0 20.43.187a1 1 0 0 1 1.54 1.063 7.84 7.84 0 0 1-1.806 3.378c.01.13.016.26.017.39v.004c0 5.486-2.696 9.513-6.56 11.53-3.838 2.004-8.736 1.98-13.1-.398a1 1 0 0 1 .517-1.877 9.763 9.763 0 0 0 4.205-.772c-1.282-.81-2.22-1.76-2.882-2.786-.926-1.433-1.275-2.952-1.338-4.314a11.594 11.594 0 0 1 .387-3.45 11.623 11.623 0 0 1 .444-1.345l.036-.084.01-.025.004-.008.001-.003c.001-.001.001-.002.912.41l-.91-.412a1 1 0 0 1 1.723-.17 8.64 8.64 0 0 0 3.203 2.714c.991.489 2.066.786 3.166.88a4.943 4.943 0 0 1 .88-2.73A5.06 5.06 0 0 1 13.27.326zM3.237 3.913a9.374 9.374 0 0 0-.215 2.4c.05 1.09.326 2.247 1.02 3.321.69 1.069 1.834 2.119 3.721 2.942a1 1 0 0 1 .155 1.749c-.902.6-1.88 1.069-2.903 1.397 2.732.59 5.446.225 7.681-.942 3.181-1.661 5.485-4.99 5.486-9.757 0-.184-.02-.369-.054-.55a1 1 0 0 1 .286-.91c.107-.104.21-.211.308-.322-.097.032-.195.062-.293.091a1 1 0 0 1-1.032-.295 3.086 3.086 0 0 0-1.574-.946 3.148 3.148 0 0 0-1.852.108 3.06 3.06 0 0 0-1.446 1.121A2.94 2.94 0 0 0 12 5.035v.905a1 1 0 0 1-.975 1A10.848 10.848 0 0 1 5.95 5.825a10.69 10.69 0 0 1-2.712-1.912z",
  },
  facebook: {
    viewBox: "0 0 14 22",
    d: "M4.757 1.757A6 6 0 0 1 9 0h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v2h3a1 1 0 0 1 .97 1.243l-1 4A1 1 0 0 1 11 14H9v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V6a6 6 0 0 1 1.757-4.243zM9 2a4 4 0 0 0-4 4v3a1 1 0 0 1-1 1H2v2h2a1 1 0 0 1 1 1v7h2v-7a1 1 0 0 1 1-1h2.22l.5-2H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h2V2H9z",
  },
};

const Icon = (props) => {
  const size = props.size ? props.size : 16;
  const fill = props.fill ? props.fill : "inherit";

  return (
    <svg className={cn(props.className)} width={size} height={size} fill={fill} viewBox={icons[props.name].viewBox}>
      <path d={icons[props.name].d} fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
};

export default Icon;
