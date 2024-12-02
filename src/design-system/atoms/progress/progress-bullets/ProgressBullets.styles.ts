import { styled } from "@mui/material";
import { ProgressBulletsColor } from "./ProgressBullets";

interface BulletProps {
  color: ProgressBulletsColor;
  checked: boolean;
}

export const Container = styled("div")`
  display: flex;
  gap: 0.375rem;
`;

export const Bullet = styled("div")<BulletProps>`
  width: 0.75rem;
  height: 0.75rem;

  border: solid 0.0625rem ${({ theme, color }) => theme.palette[color].main};
  border-radius: 0.75rem;

  background: ${({ theme, checked, color }) =>
    checked ? theme.palette[color].main : "transparent"};
`;
