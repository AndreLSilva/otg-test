import { styled } from "@mui/material";
import { ProgressBarColor } from "./ProgressBar";

interface ContainerProps {
  color: ProgressBarColor;
}

export const Container = styled("div")<ContainerProps>`
  height: 0.75rem;
  border: solid 0.0625rem;
  border-radius: 0.75rem;

  border-color: ${({ theme, color }) => theme.palette[color].main};

  & > :only-child {
    height: 100%;
    border-radius: 0.75rem;

    background: ${({ theme, color }) => theme.palette[color].main};

    transition: width ease-in-out;
    transition-duration: ${({ theme }) => theme.transitions.duration.complex}ms;
  }
`;
