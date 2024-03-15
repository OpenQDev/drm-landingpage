import React from "react";
import { useRouter } from "next/router";

const CustomSidebarTitle = ({ title, route }) => {
  const { asPath } = useRouter();

  // Check if the current path matches the title's route
  const isHighlighted = asPath === route;

  // Make the font weight bold if the title is "Reference" or if it's highlighted
  const titleStyle = {
    fontWeight: title === "Reference" || isHighlighted ? "bold" : "normal",
  };

  return <div style={titleStyle}>{title}</div>;
};

export default CustomSidebarTitle;
