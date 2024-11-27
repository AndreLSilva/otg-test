import { Box } from "@mui/material";
import { Container } from "./ProgressBar.styles";

interface ProgressBarProps {
  progress: number;
  color?: "primary" | "primaryAlt" | "secondary" | "tertiary";
}

export function ProgressBar({ progress, color = "primary" }: ProgressBarProps) {
  return (
    <Container sx={{ borderColor: `${color}.main` }}>
      <Box
        sx={{
          width: `${Math.min(progress, 1) * 100}%`,
          backgroundColor: `${color}.main`,
        }}
      />
    </Container>
  );
}
