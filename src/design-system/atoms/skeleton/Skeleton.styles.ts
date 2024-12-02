import { Skeleton, styled } from "@mui/material";
import { SkeletonColors } from "./Skeleton";

interface ContainerProps {
  color?: SkeletonColors;
}

export const Container = styled(Skeleton)<ContainerProps>`
  ${({ theme, color }) => (color ? `background: ${theme.palette[color].main};` : "")}
`;
