import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";
export function Toto() {
  const [count, setCount] = useState(0);
  return (
    <Box>
      Ok lol {count} <Button onClick={() => setCount((c) => c + 1)}>Inc</Button>
    </Box>
  );
}
