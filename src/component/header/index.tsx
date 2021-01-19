import React from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorMode,
  Select,
  Box,
  DarkMode,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { MenuViews } from "../menu-views";
import { MenuOrganization } from "../menu-organization";
import { MenuHelp } from "../menu-help";
import { MenuUser } from "../menu-user";
import { MenuSearch } from "../menu-search";

import ReactSelect from "react-select";

export function Header() {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "white" : "gray.800";

  return (
    <Flex
      pos="fixed"
      top="0"
      bg={bg}
      left="0"
      right="0"
      borderBottomWidth="1px"
      width="full"
      height="4rem"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      flexWrap="nowrap"
      // bg={bg}
      // backgroundImage="linear-gradient(to right, #02aef2, #5bdbd4)"
    >
      <MenuViews />
      <MenuOrganization />

      <Box
        flexShrink={1}
        flexGrow={0}
        overflow="scroll"
        display={{ sm: "block", md: "none" }}
      >
        <Select
          id="owner"
          defaultValue="cjisj887e7ewwe2223"
          border="none"
          bg="transparent"
          ml={"-1em"}
          w="auto"
        >
          <option value="cjisj887e7ewwe0e0w">Mission Overview</option>
          <option value="cjisj887e7ewwe2223">Anomaly Details</option>
          <option value="cjisj887e7ewwe9292">Image Details</option>
        </Select>
      </Box>
      <Box
        flexShrink={0}
        flexGrow={0}
        overflow="scroll"
        display={{ sm: "none", md: "block" }}
      >
        <Breadcrumb
          marginLeft="0.5em"
          spacing="8px"
          separator={<FontAwesomeIcon icon={faHandPointRight} />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inspection Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            {/* <BreadcrumbLink href="/">Anomaly Detail</BreadcrumbLink> */}
            <Select
              id="owner"
              defaultValue="cjisj887e7ewwe2223"
              border="none"
              bg="transparent"
              ml={"-1em"}
              w="auto"
            >
              <option value="cjisj887e7ewwe0e0w">Mission Overview</option>
              <option value="cjisj887e7ewwe2223">Anomaly Details</option>
              <option value="cjisj887e7ewwe9292">Image Details</option>
            </Select>
            {/* <ReactSelect
              styles={{
                control: provided => ({
                  ...provided,
                  border: "none",
                  width: "11em"
                }),
                indicatorSeparator: provided => ({
                  ...provided,
                  visibility: "hidden"
                })
              }}
              defaultValue={{
                label: "Anomaly Details",
                value: "cj988js9dsd828"
              }}
              name="colors"
              options={[
                {
                  label: "Anomaly Details",
                  value: "cj988js9dsd892828"
                },
                {
                  label: "Mission Overview",
                  value: "cj988js9dsddsd828"
                }
              ]}
            /> */}
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box flexGrow={1} />

      <MenuSearch />
      <MenuHelp />

      <MenuUser />
    </Flex>
  );
}
