import React from "react";
import {
  IconButton,
  useDisclosure,
  MenuList,
  MenuItem,
  Menu,
  MenuButton,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

// export function MenuHelp() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const firstField = React.useRef();
//   const btnRef = React.useRef();

//   return (
//     <>
//       <IconButton
//         ref={btnRef}
//         icon={() => <FontAwesomeIcon size="lg" icon={faQuestionCircle} />}
//         variant="ghost"
//         color="current"
//         onClick={onOpen}
//       />
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         initialFocusRef={firstField}
//         finalFocusRef={btnRef}
//         onClose={onClose}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader borderBottomWidth="1px">Help and Support</DrawerHeader>

//           <DrawerBody>
//             <Stack spacing="24px">
//               {/* <Box>
//                 <FormLabel htmlFor="username">Name</FormLabel>
//                 <Input
//                   ref={firstField}
//                   id="username"
//                   placeholder="Please enter user name"
//                 />
//               </Box>

//               <Box>
//                 <FormLabel htmlFor="url">Url</FormLabel>
//                 <InputGroup>
//                   <InputLeftAddon>http://</InputLeftAddon>
//                   <Input
//                     type="url"
//                     id="url"
//                     placeholder="Please enter password"
//                     rounded="0"
//                   />
//                   <InputRightAddon>.com</InputRightAddon>
//                 </InputGroup>
//               </Box>

//               <Box>
//                 <FormLabel htmlFor="owner">Select Owner</FormLabel>
//                 <Select id="owner" defaultValue="segun">
//                   <option value="segun">Segun Adebayo</option>
//                   <option value="kola">Kola Tioluwani</option>
//                 </Select>
//               </Box>

//               <Box>
//                 <FormLabel htmlFor="desc">Description</FormLabel>
//                 <Textarea id="desc" />
//               </Box> */}
//               {/* <MenuList>
//                 <MenuItem>Download</MenuItem>
//                 <MenuItem>Create a Copy</MenuItem>
//                 <MenuItem>Mark as Draft</MenuItem>
//                 <MenuItem>Delete</MenuItem>
//                 <MenuItem as="a" href="#">
//                   Attend a Workshop
//                 </MenuItem>
//               </MenuList> */}
//             </Stack>
//           </DrawerBody>

//           <DrawerFooter borderTopWidth="1px">
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Submit</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

export function MenuHelp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const btnRef = React.useRef();

  return (
    <Menu>
      <MenuButton
        // as={IconButton}
        ref={btnRef}
        // icon={<FontAwesomeIcon size="lg" icon={faQuestionCircle} />}
        variant="ghost"
        color="current"
        //  onClick={onOpen}
      >
        <FontAwesomeIcon size="lg" icon={faQuestionCircle} />
      </MenuButton>
      {/* <MenuButton as={Button} colorScheme="pink">
        Profile
      </MenuButton> */}
      <MenuList>
        <MenuGroup>
          <MenuItem>Help</MenuItem>
          <MenuItem>Get Support</MenuItem>
          <MenuItem>Training</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>Service Status</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>Terms and Policy</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>Product Updates</MenuItem>
          <MenuItem>Product Roadmap</MenuItem>
          <MenuItem>Send Feedback</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
