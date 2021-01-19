import React from "react";
import { Flex, useColorMode, Stack, Box } from "@chakra-ui/react";

import { ToolDraw } from "./tool-draw";

export function ToolbarTools() {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "white" : "gray.800";

  return (
    <Flex
      pos="fixed"
      top="8rem"
      bg="none"
      left="0"
      // right="0"
      // borderBottomWidth="1px"
      // width="4rem"
      height="full"
      as="div"
      align="stretch"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      flexWrap={"nowrap"}
    >
      <Stack spacing={8}>
        <ToolDraw />
      </Stack>
      {/* <Box flexGrow={1} /> */}
    </Flex>
  );
}
