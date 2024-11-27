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
      light: "#242528",
      contrastText: "#ffffff",
    },
    primaryAlt: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#C7B2FF",
      light: "#C7B2FF",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#0AD2A5",
      light: "#0AD2A5",
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
  typography: {
    fontFamily: publicSans.style.fontFamily,
    subtitle1: {
      fontSize: "1.125rem",
      lineHeight: "1.321875rem",
      fontWeight: "700",
    },
    overline: {
      fontSize: "0.75rem",
      lineHeight: "0.88125rem",
      fontWeight: "500",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        iconSizeSmall: { margin: 0 },
        iconSizeMedium: { margin: 0 },
        iconSizeLarge: { margin: 0 },
      },
      variants: [
        {
          props: { size: "small" },
          style: {
            gap: "0.375rem",
            height: "2.375rem",
          },
        },
        {
          props: { size: "medium" },
          style: {
            gap: "0.5rem",
            height: "2.875rem",
          },
        },
        {
          props: { size: "large" },
          style: {
            gap: "0.75rem",
            height: "3.25rem",
          },
        },
      ],
    },
  },
});
