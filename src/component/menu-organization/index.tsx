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
  Image,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  IconButton,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export function MenuOrganization() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="menu"
        icon={
          <Image
            rounded={3}
            boxSize="1.5em"
            objectFit="cover"
            src="https://www.immoweek.fr/wp-content/uploads/2018/06/enedis-e-vert.jpg"
          />
        }
        variant="ghost"
        color="current"
        onClick={onOpen}
      />
      {/* <IconButton
        ref={btnRef}
        icon={() => <FontAwesomeIcon size="lg" icon={faUserFriends} />}
        variant="ghost"
        color="current"
        onClick={onOpen}
      /> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        initialFocusRef={firstField}
        finalFocusRef={btnRef}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader borderBottomWidth="1px">Organization</DrawerHeader> */}

          <DrawerBody>
            <Stack spacing="1em" pr="1em">
              <Box
                display="flex"
                alignContent="center"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                padding="3rem"
              >
                <AspectRatio maxW="100%" minW="100%" ratio={1} rounded={20}>
                  <Image
                    rounded={24}
                    objectFit="cover"
                    src="https://www.immoweek.fr/wp-content/uploads/2018/06/enedis-e-vert.jpg"
                  />
                </AspectRatio>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Current Organization</FormLabel>
                <Select id="owner" defaultValue="Enedis National">
                  <option value="Enedis National">Enedis National</option>
                  <option value="Enedis Bretagne">Enedis Bretagne</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Current Folder</FormLabel>
                <Select id="owner" defaultValue="Enedis National Home">
                  <option value="Enedis National Home">
                    Enedis National Home
                  </option>
                  <option value="Enedis Bretagne Home">
                    Enedis Bretagne Home
                  </option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Current Process</FormLabel>
                <Select id="owner" defaultValue="Enedis National Home">
                  <option value="Enedis National Home">
                    Campagne Inspection Reseau Loire
                  </option>
                  <option value="Enedis Bretagne Home">
                    Ouragan Katrina emergency
                  </option>
                </Select>
              </Box>

              {/* <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
