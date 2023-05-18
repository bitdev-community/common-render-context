import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */

export interface MyRenderContextProps {
  children: ReactNode;
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(44, 0, 195)',
    },
    secondary: {
      main: 'rgb(76, 175, 255)',
    },
  },
});

// eslint-disable-next-line react/prop-types
// @ts-ignore
export function MyRenderContext({ children }: MyRenderContextProps) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}/>
      {children}
    </Box>
    </ThemeProvider>
  );
}
