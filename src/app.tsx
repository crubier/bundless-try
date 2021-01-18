((window as unknown) as Window & {
  CESIUM_BASE_URL: string;
}).CESIUM_BASE_URL = "/static/Cesium/";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Toto } from "./toto";
import { Ces } from "./ces";

export function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Hello Bundless</h1>
        <h2>Start editing to see magic happen!</h2>
        <Ces></Ces>
        <Toto></Toto>
      </div>
    </ChakraProvider>
  );
}
