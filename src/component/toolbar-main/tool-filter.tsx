import {
  PopoverContent,
  Popover,
  PopoverTrigger,
  Button,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export function ToolFilter() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          pl={"0.5em"}
          leftIcon={<FontAwesomeIcon icon={faUserCircle} />}
          // colorScheme="teal"
          variant="ghost"
        >
          &nbsp; Filters (5)
        </Button>
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
