import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
  FormLabel,
  Input,
  Image,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  IconButton,
  useDisclosure,
  Flex,
  Switch,
  AspectRatio,
  Divider,
  useColorMode,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export function MenuUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <>
      <IconButton
        aria-label="User Menu"
        ref={btnRef}
        rounded="full"
        icon={
          <Image
            rounded="full"
            boxSize="2em"
            objectFit="cover"
            src="https://pbs.twimg.com/profile_images/954098316782030848/SOTvQA36_400x400.jpg"
          />

          // <FontAwesomeIcon size="lg" icon={faUser} />
        }
        variant="ghost"
        color="current"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader borderBottomWidth="1px">Preferences</DrawerHeader> */}

          <DrawerBody overflow="scroll">
            <Stack spacing="1em" pt="1em">
              {/* <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter password"
                    rounded="0"
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>
              */}

              <Box
                display="flex"
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                padding="3rem"
              >
                <AspectRatio maxW="100%" minW="100%" ratio={1}>
                  <Image
                    rounded="full"
                    objectFit="cover"
                    src="https://pbs.twimg.com/profile_images/954098316782030848/SOTvQA36_400x400.jpg"
                  />
                </AspectRatio>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">User Profile</FormLabel>
                <Select id="owner" defaultValue="Vincent Lecrubier">
                  <option value="Vincent Lecrubier">Vincent Lecrubier</option>
                  <option value="Superman">Superman</option>
                </Select>
              </Box>

              <Divider />

              <Box>
                <FormLabel htmlFor="owner">Language</FormLabel>
                <Select id="owner" defaultValue="English">
                  <option value="English">🇬🇧 English</option>
                  <option value="French">🇫🇷 Français</option>
                </Select>
              </Box>

              <Flex justify="space-between">
                <FormLabel htmlFor="dark-mode">Dark Mode</FormLabel>
                <Switch
                  id="dark-mode"
                  value={colorMode === "light"}
                  onChange={toggleColorMode}
                />
              </Flex>

              {/* <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
            <Button variant="outline">Log Out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
