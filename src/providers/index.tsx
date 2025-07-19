import React from "react";
import { BrowserRouter } from "react-router";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyles>{children}</GlobalStyles>
      </ThemeProvider>
    </BrowserRouter>
  );
};
