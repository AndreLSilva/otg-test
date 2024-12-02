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

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
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
    h2: {
      fontSize: "2.375rem", // 38px
      lineHeight: "2.790625rem",
      fontWeight: "700",
    },
    h3: {
      fontSize: "1.875rem", // 30px
      lineHeight: "2.790625rem",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1.5rem", // 24px
      lineHeight: "1.7625rem",
      fontWeight: "700",
    },
    h5: {
      fontSize: "1.375rem", // 22px
      lineHeight: "1.615625rem",
      fontWeight: "700",
    },
    h6: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.46875rem",
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "1.125rem", // 18px
      lineHeight: "1.321875rem",
      fontWeight: "700",
    },
    body1: {
      fontSize: "1rem", // 16px
      lineHeight: "1.175rem",
      fontWeight: "400",
    },
    body2: {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.028125rem",
      fontWeight: "500",
    },
    overline: {
      fontSize: "0.75rem", // 12px
      lineHeight: "0.88125rem",
      fontWeight: "500",
    },
    caption: {
      fontSize: "0.625rem", // 10px
      lineHeight: "0.734375rem",
      fontWeight: "400",
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 872,
      md: 968,
      lg: 1282,
      xl: 1710,
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
