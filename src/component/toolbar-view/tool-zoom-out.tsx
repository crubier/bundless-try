import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-regular-svg-icons";

export function ToolZoomOut(props) {
  return (
    <IconButton
      icon={<FontAwesomeIcon icon={faWindowClose} fixedWidth />}
      variant="solid"
      {...props}
    />
  );
}
