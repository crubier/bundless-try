import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";

export function ToolZoomIn(props) {
  return (
    <IconButton
      icon={<FontAwesomeIcon icon={faStarHalf} fixedWidth />}
      variant="solid"
      {...props}
    />
  );
}
