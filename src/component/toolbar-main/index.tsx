import React from "react";
import {
  Flex,
  useColorMode,
  Box,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";

import { ToolViewMode } from "./tool-view-mode";
import { ToolEntityType } from "./tool-entity-type";
import { ToolFilter } from "./tool-filter";
import { ToolFilterDate } from "./tool-filter-date";
import { ToolExport } from "./tool-export";
import { ToolAdd } from "./tool-add";
import { ToolSearch } from "./tool-search";

export function ToolbarMain() {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "white" : "gray.800";

  return (
    <Flex
      pos="fixed"
      top="4rem"
      bg={bg}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4rem"
      as="div"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      flexWrap={"nowrap"}
    >
      <ButtonGroup spacing={0}>
        <ToolViewMode />
        <ToolEntityType />
        <ToolFilter />
        <ToolFilterDate />
        <ToolAdd />
      </ButtonGroup>
      <Box flexGrow={1} />
      <ToolSearch />
      <ButtonGroup spacing={0}>
        <ToolExport />
        <IconButton
          aria-label=""
          icon={<FontAwesomeIcon icon={faMoneyBillAlt} fixedWidth />}
          variant="ghost"
        />
      </ButtonGroup>
    </Flex>
  );
}
