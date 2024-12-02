import { styled } from "@mui/material";
import { CSSProperties } from "react";

export interface ContainerProps {
  direction?: CSSProperties["flexDirection"];
  items?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: CSSProperties["gap"];
}

export const Container = styled("div")<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? ""};
  align-items: ${({ items }) => items ?? ""};
  justify-content: ${({ justify }) => justify ?? ""};
  gap: ${({ gap }) => gap ?? ""};
`;
