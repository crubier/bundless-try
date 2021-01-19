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

import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";

export function ToolEntityType() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          pl={"0.5em"}
          leftIcon={<FontAwesomeIcon icon={faPauseCircle} />}
          colorScheme="red"
          variant="ghost"
        >
          &nbsp; Findings
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
