import {
  PopoverContent,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-regular-svg-icons";

export function ToolAdd() {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label=""
          icon={<FontAwesomeIcon icon={faObjectGroup} fixedWidth />}
          variant="ghost"
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
