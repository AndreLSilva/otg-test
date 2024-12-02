import { Button, styled } from "@mui/material";

interface ContainerProps {
  iconButton: boolean;
  iconSize: number | string | undefined;
}

export const Container = styled(Button, {
  shouldForwardProp: (a) => a !== "iconButton" && a !== "iconSize",
})<ContainerProps>`
  ${({ iconButton }) =>
    iconButton
      ? `
    padding: 0;
    min-width: unset;
    aspect-ratio: 1;
  `
      : ""}

  ${({ iconSize }) =>
    iconSize
      ? `
    svg {
      width: ${typeof iconSize === "number" ? `${iconSize}px` : iconSize};
      height: ${typeof iconSize === "number" ? `${iconSize}px` : iconSize};
    }
  `
      : ""}
`;
