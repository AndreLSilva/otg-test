import { Container } from "./ProgressBar.styles";

interface ProgressBarProps {
  progress: number;
  color?: ProgressBarColor;
}

export type ProgressBarColor = "primary" | "primaryAlt" | "secondary" | "tertiary";

export function ProgressBar({ progress, color = "primary" }: ProgressBarProps) {
  const progressWidth = `${Math.min(progress, 1) * 100}%`;

  return (
    <Container color={color}>
      <div style={{ width: progressWidth }} />
    </Container>
  );
}
