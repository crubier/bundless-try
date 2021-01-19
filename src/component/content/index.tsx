import React, { useState } from "react";

import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

export function Content() {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <Box mb={20} mt={"10rem"} w={"100vw"} background={"red"}>
      <span>Okokokok</span>

      {/* <Button>Ok</Button>
      <Box as="section" pt={40} pb={24}>
        <Box width="full" maxWidth="1280px" mx="auto" px={6}>
          <Box maxW="xl" mx="auto" textAlign="center">
            <Heading as="h1" size="xl" fontWeight="semibold">
              Welcome to Sterblue
              <Box as="span" color="teal.500">
                <br />
                This is an empty view!
              </Box>
            </Heading>

            <Text opacity="0.7" fontSize="xl" mt="6">
              Superblock is a simple, modular library that allows to compose
              views with tools, giving you all the building blocks you need to
              build complex SaaS applications.
            </Text>

            <Box mt="6">
              <Button
                as="a"
                href="/docs/getting-started"
                size="lg"
                colorScheme="teal"
              >
                Get Started
              </Button>
              <Button
                as="a"
                size="lg"
                ml={4}
                href="https://github.com/chakra-ui/chakra-ui/"
                target="__blank"
              >
                Add a view
              </Button>
            </Box>
          </Box>
        </Box>
      </Box> 
     <AspectRatio w="100%" ratio={1}>
        <Image
          objectFit="cover"
          src="https://previews.123rf.com/images/tomas1111/tomas11111602/tomas1111160200053/53132216-electricity-transmission-pylon-silhouetted-against-blue-sky-at-dusk.jpg"
        />
      </AspectRatio> */}
    </Box>
  );
}
