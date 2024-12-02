import { SkeletonOwnProps } from "@mui/material";
import { Container } from "./Skeleton.styles";

interface SkeletonProps extends Omit<SkeletonOwnProps, "color"> {
  color?: SkeletonColors;
}

export type SkeletonColors = "primary" | "primaryAlt";

export function Skeleton(props: SkeletonProps) {
  return <Container {...props} />;
}
