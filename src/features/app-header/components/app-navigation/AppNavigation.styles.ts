import { Button } from "@/design-system/atoms/button/Button";
import { ButtonBase, styled } from "@mui/material";
import Link from "next/link";

export const Container = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  height: 3.875rem;

  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
  padding: 0 0.125rem 0 1.625rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;

  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const NavContainer = styled("nav")`
  display: flex;
  align-items: center;

  margin-right: auto;
`;

export const LogoButton = styled(Link)`
  margin-right: 0.875rem;
`;

export const MenuButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }
`;

export const NavButton = styled(ButtonBase)`
  display: none;

  height: 2.25rem;

  border-radius: ${({ theme }) => theme.shape.borderRadius / 16}rem;
  padding: 0 1.25rem;

  font-size: ${({ theme }) => theme.typography.overline.fontSize};
  line-height: ${({ theme }) => theme.typography.overline.lineHeight};
  font-weight: ${({ theme }) => theme.typography.overline.fontWeight};
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.text.secondary};

  transition: font-weight, color ease-in-out;
  transition-duration: ${({ theme }) => theme.transitions.duration.short}ms;

  &:hover {
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: inline-flex;
  }
` as typeof ButtonBase;

export const CorpButton = styled(ButtonBase)`
  display: none;
  align-items: center;
  gap: 0.625rem;

  height: 2.875rem;

  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: ${({ theme }) => theme.shape.borderRadius / 16}rem;
  padding: 0 0.75rem;

  text-transform: unset;

  color: ${({ theme }) => theme.palette.primary.contrastText};

  & > img {
    width: 2.125rem;
    height: 2.125rem;
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: flex;
  }
` as typeof ButtonBase;

export const UserCard = styled("div")`
  display: none;
  align-items: center;
  gap: 0.875rem;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: flex;
  }
`;
