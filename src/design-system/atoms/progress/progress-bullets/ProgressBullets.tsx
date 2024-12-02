import { range } from "@/utils/array.utils";
import { Bullet, Container } from "./ProgressBullets.styles";

interface ProgressBulletsProps {
  total: number;
  progress: number;
  color?: ProgressBulletsColor;
}

export type ProgressBulletsColor = "primary" | "primaryAlt" | "secondary" | "tertiary";

export function ProgressBullets({ total, progress, color = "primary" }: ProgressBulletsProps) {
  return (
    <Container>
      {range(total).map((i) => (
        <Bullet key={i} color={color} checked={i < progress} />
      ))}
    </Container>
  );
}
