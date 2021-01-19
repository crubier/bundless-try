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
import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";

export function ToolViewMode() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          pl={"0.5em"}
          leftIcon={<FontAwesomeIcon icon={faObjectUngroup} />}
          // colorScheme="teal"
          variant="ghost"
        >
          &nbsp; List
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
