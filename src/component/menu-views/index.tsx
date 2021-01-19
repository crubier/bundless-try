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
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Divider,
  Text,
  IconButton,
  useDisclosure,
  Link,
  Icon,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMehBlank,
  faShareSquare,
  faSnowflake,
  faFolder,
  faClock,
  faFlag,
  faImage,
  faTimesCircle,
  faStopCircle,
  faMap,
  faWindowClose,
  faPaperPlane,
  faSmileBeam,
  faTired,
  faCalendarAlt,
  faCalendar,
  faSun,
  faStickyNote,
  faMoon,
  faMeh,
  faMehRollingEyes,
} from "@fortawesome/free-regular-svg-icons";

function ViewElement({ href, icon, name, ...props }) {
  return (
    <Link href={href} {...props}>
      {/* <Text> */}
      <FontAwesomeIcon fixedWidth size={"1x"} icon={icon} />
      <span style={{ paddingLeft: "1em" }}>{name}</span>
      {/* </Text> */}
    </Link>
  );
}

export function MenuViews() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        aria-label="open"
        ref={btnRef}
        icon={<FontAwesomeIcon size="lg" icon={faMehBlank} />}
        variant="ghost"
        color="current"
        onClick={onOpen}
      />
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
          <DrawerHeader borderBottomWidth="1px">Enedis</DrawerHeader>
          <DrawerBody overflow="scroll">
            <Stack spacing="1em" pt="1em">
              <ViewElement href="/" icon={faShareSquare} name={"Home"} />
              <ViewElement href="/" icon={faSnowflake} name={"Search"} />
              <ViewElement href="/" icon={faFolder} name={"Explore"} />
              <ViewElement href="/" icon={faClock} name={"Recent"} />
              <Divider />
              <Text color={"gray.500"}>Visualize</Text>
              <ViewElement href="/" icon={faFlag} name={"Structures"} />
              <ViewElement href="/" icon={faImage} name={"Images"} />
              <ViewElement href="/" icon={faTimesCircle} name={"Missions"} />
              <ViewElement href="/" icon={faStopCircle} name={"Findings"} />
              <Divider />
              <Text color={"gray.500"}>Operate</Text>
              <ViewElement href="/" icon={faMap} name={"Plan Missions"} />
              <ViewElement
                href="/"
                icon={faWindowClose}
                name={"Import Images"}
              />
              <ViewElement
                href="/"
                icon={faSmileBeam}
                name={"Label Findings"}
              />
              <ViewElement
                href="/"
                icon={faPaperPlane}
                name={"Export Reports"}
              />
              <Divider />
              <Text color={"gray.500"}>Analyze</Text>
              <ViewElement href="/" icon={faTired} name={"Overall Health"} />
              <ViewElement
                href="/"
                icon={faCalendarAlt}
                name={"Health Evolution"}
              />
              <ViewElement href="/" icon={faCalendar} name={"Findings Types"} />
              <ViewElement href="/" icon={faSun} name={"Team Activity"} />
              <Divider />
              <Text color={"gray.500"}>Manage</Text>
              <ViewElement href="/" icon={faStickyNote} name={"Settings"} />
              <ViewElement href="/" icon={faMoon} name={"Team"} />
              <ViewElement href="/" icon={faMeh} name={"Billing"} />
              <ViewElement
                href="/"
                icon={faMehRollingEyes}
                name={"Integrations"}
              />
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
