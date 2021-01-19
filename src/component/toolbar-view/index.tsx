import React from "react";
import { Flex, useColorMode, Stack, Box } from "@chakra-ui/react";

import { ToolZoomIn } from "./tool-zoom-in";
import { ToolZoomOut } from "./tool-zoom-out";

export function ToolbarView() {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "white" : "gray.800";

  return (
    <Flex
      pos="fixed"
      bottom="0"
      bg="none"
      // left="0"
      right="0"
      // borderBottomWidth="1px"
      width="4.5rem"
      // height="full"
      as="div"
      align="stretch"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      flexWrap={"nowrap"}
    >
      <Stack spacing={"1em"} justify={"flex-end"}>
        <ToolZoomIn />
        <ToolZoomOut />
      </Stack>
      <Box flexGrow={1} />
    </Flex>
  );
}
