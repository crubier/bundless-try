import {
  PopoverContent,
  Popover,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

export function ToolDraw(props) {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <IconButton
          icon={<FontAwesomeIcon icon={faSmile} fixedWidth />}
          variant="solid"
          {...props}
        />
      </PopoverTrigger>
      <PopoverContent>
        {/* <PopoverArrow /> */}
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
