import { Paper, styled } from "@mui/material";
import { PaperColor } from "./Paper";

interface ContainerProps {
  color: PaperColor;
}

interface HeaderProps {
  border: boolean;
}

export const Container = styled(Paper)<ContainerProps>`
  display: flex;
  flex-direction: column;

  position: relative;

  color: ${({ theme, color }) => theme.palette[color].contrastText};
  background: ${({ theme, color }) => theme.palette[color].light};
`;

export const Header = styled("div")<HeaderProps>`
  display: flex;
  align-items: center;

  padding: 0 1rem;

  height: 2.25rem;

  ${({ theme, border }) => (border ? `border-bottom: 1px solid ${theme.palette.divider};` : "")}

  & > svg {
    margin-right: 0.25rem;
  }
`;
