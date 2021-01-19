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
import { faTired } from "@fortawesome/free-regular-svg-icons";

export function ToolFilterDate() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          pl={"0.5em"}
          leftIcon={<FontAwesomeIcon icon={faTired} />}
          // colorScheme="teal"
          variant="ghost"
        >
          &nbsp; Last week
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
