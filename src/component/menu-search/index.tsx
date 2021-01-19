import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-regular-svg-icons";

export function MenuSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<any>();
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
            <FontAwesomeIcon icon={faSadTear} color="gray.300" />
          </InputLeftElement>
          <Input ref={searchRef} placeholder="Quick Search..." />
        </InputGroup>
      ) : (
        <IconButton
          aria-label="search"
          icon={<FontAwesomeIcon size="lg" icon={faSadTear} />}
          variant="ghost"
          color="current"
          onClick={onOpen}
        />
      )}
    </>
  );
}
