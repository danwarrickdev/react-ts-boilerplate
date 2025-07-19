import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface?: string;
      text?: string;
      textSecondary?: string;
      error?: string;
      success?: string;
      warning?: string;
    };
    spacing?: {
      unit: number;
      (multiplier: number): string;
    };
    typography?: {
      fontFamily: string;
      fontSize: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
      };
      fontWeight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    breakpoints?: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    shadows?: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius?: {
      small: string;
      medium: string;
      large: string;
    };
    transitions?: {
      quick: string;
      medium: string;
      slow: string;
    };
    zIndex?: {
      dropdown: number;
      modal: number;
      toast: number;
      tooltip: number;
    };
  }
}

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    css?: import("@emotion/react").CSSInterpolation;
  }
}
