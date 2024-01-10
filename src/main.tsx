import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// Supports weights 300-900
import "@fontsource-variable/figtree";

export const theme = extendTheme({
  colors: {
    Yellow: "hsl(47, 88%, 63%)",
    White: "hsl(0, 0%, 100%)",
    Grey: "hsl(0, 0%, 50%)",
    Black: "hsl(0, 0%, 7%)",
  },
  fontFamily: {
    body: `'Figtree Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
