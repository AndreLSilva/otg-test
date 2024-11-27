import { createTheme } from "@mui/material";
import { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles";
import { Public_Sans } from "next/font/google";

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

declare module "@mui/material/styles" {
  interface Palette {
    primaryAlt: PaletteColor;
    tertiary: PaletteColor;
  }
  interface PaletteOptions {
    primaryAlt: SimplePaletteColorOptions;
    tertiary: SimplePaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryAlt: true;
    tertiary: true;
  }
}

export const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    primaryAlt: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#C7B2FF",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#0AD2A5",
      contrastText: "#000000",
    },
    background: {
      default: "#EEF2F3",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#8A9099",
      disabled: "#C3C7CA",
    },
    divider: "#C9D1D6",
    info: {
      main: "#FF5D55",
      contrastText: "#ffffff",
    },
  },
});
