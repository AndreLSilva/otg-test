import { styled } from "@mui/material";
import { CardColors } from "./Card";

interface ContainerProps {
  color: CardColors;
  fullWidth: boolean;
}

interface ContentProps {
  padding?: number | string;
  color: CardColors;
}

export const Container = styled("div")<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};

  border-radius: 0.375rem;
  padding-bottom: 1.375rem;

  position: relative;

  background: ${({ color, theme }) => theme.palette[color].main};
`;

export const Content = styled("div")<ContentProps>`
  height: 100%;
  overflow: hidden;

  border: solid 0.125rem;
  border-radius: 0.375rem;
  border-color: ${({ color, theme }) => theme.palette[color].main};
  padding: ${({ padding }) => (typeof padding === "number" ? `${padding}px` : padding ?? "")};

  color: ${({ theme }) => theme.palette.primary.main};
  background: ${({ theme }) => theme.palette.background.paper};
`;
