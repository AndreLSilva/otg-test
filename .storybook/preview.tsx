import { defaultTheme, publicSans } from "@/design-system/theme/theme";
import { ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (storyFn) => (
      <div className={publicSans.className}>
        <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
      </div>
    ),
  ],
};

export default preview;
