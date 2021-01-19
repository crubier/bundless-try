import React from "react";
import { Box } from "@chakra-ui/react";

import { Header } from "./header";

import { Content } from "./content";
import { ToolbarMain } from "./toolbar-main";
import { ToolbarTools } from "./toolbar-tools";
import { ToolbarView } from "./toolbar-view";

export function Block() {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "scroll",
        padding: 0,
        margin: 0,
      }}
    >
      <ToolbarView />
      <ToolbarTools />
      <ToolbarMain />
      <Header />
      <Content />
    </Box>
  );
}
