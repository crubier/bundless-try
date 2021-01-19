// import {
//   PopoverContent,
//   Popover,
//   PopoverTrigger,
//   Button,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverHeader,
//   PopoverBody,
//   IconButton,
//   InputGroup,
//   InputLeftElement,
//   Icon,
//   Input
// } from "@chakra-ui/react";
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStarHalf, faTimesCircle } from "@sterblue/pro-regular-svg-icons";

// export function ToolSearch() {
//   return (
//     <InputGroup>
//       <InputLeftElement>
//         <FontAwesomeIcon icon={faStarHalf} />
//       </InputLeftElement>
//       <Input placeholder="Search..." />
//     </InputGroup>
//     // <Button
//     //   pl={"0.5em"}
//     //   pr={"0.5em"}
//     //   flexGrow={2}
//     //   leftIcon={}
//     //   // rightIcon={() => <FontAwesomeIcon icon={faTimesCircle} />}
//     //   // colorScheme="teal"
//     //   // variant="solid"
//     // >
//     //   &nbsp; PS982 &nbsp;
//     // </Button>
//   );
// }

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf } from "@fortawesome/free-regular-svg-icons";

export function ToolSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>();
  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  useEffect(() => {
    if (isOpen) {
      if (searchRef.current && searchRef.current.focus) {
        searchRef.current.focus();
      }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <InputGroup onBlur={onClose} flexGrow={2}>
          <InputLeftElement>
            <FontAwesomeIcon icon={faStarHalf} color="gray.300" />
          </InputLeftElement>
          <Input ref={searchRef} placeholder="Search..." />
        </InputGroup>
      ) : (
        <IconButton
          aria-label=""
          icon={<FontAwesomeIcon icon={faStarHalf} />}
          variant="ghost"
          onClick={onOpen}
        />
      )}
    </>
  );
}
