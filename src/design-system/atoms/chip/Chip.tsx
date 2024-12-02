import { ChipOwnProps } from "@mui/material";
import { Container } from "./Chip.styles";

interface ChipProps {
  color?: ChipOwnProps["color"];
  children: string | number;
}

export function Chip({ color = "info", children }: ChipProps) {
  return <Container label={children} size="small" color={color} />;
}
