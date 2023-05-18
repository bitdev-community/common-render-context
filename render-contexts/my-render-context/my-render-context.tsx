import React, { ReactNode } from "react";
import { Box } from "@mui/material";

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */

export interface MyRenderContextProps {
  children: ReactNode;
}

// eslint-disable-next-line react/prop-types
// @ts-ignore
export function MyRenderContext({ children }: MyRenderContextProps) {
  return (
    <Box sx={{ p: 5, border: "2px solid", borderColor: "black" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <h1>My Preview Context</h1>
      </Box>
      {children}
    </Box>
  );
}
