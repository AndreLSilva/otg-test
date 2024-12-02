import { ButtonBase, Paper, styled } from "@mui/material";

interface ContainerProps {
  open: boolean;
}

interface OpenButtonProps {
  open: boolean;
}

export const Container = styled(Paper)<ContainerProps>`
  display: flex;
  flex-direction: column;

  width: 24rem;
  overflow: hidden;

  position: fixed;
  top: 0;
  bottom: 0;
  right: ${({ open }) => (open ? "0rem" : "-24rem")};
  z-index: 4;

  transition: right ease-in-out;
  transition-duration: ${({ theme }) => theme.transitions.duration.complex}ms;

  ${({ theme }) => theme.breakpoints.up("lg")} {
    position: relative;
    top: unset;
    bottom: unset;
    right: unset;
    z-index: unset;
  }

  ${({ theme }) => theme.breakpoints.up("xl")} {
    margin-top: 3.875rem;
  }
`;

export const Header = styled(Paper)`
  padding: 1rem 1rem 0 1rem;

  & > h2 {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    margin-bottom: 2.25rem;
    padding: 0 0.5rem;
  }
`;

export const List = styled("div")`
  overflow: auto;
  padding: 0 1rem 2rem 1rem;

  /* Date label */
  & > h6 {
    margin: 2rem 0 0.625rem 1.28125rem;
  }
`;

export const ListDivider = styled("div")`
  width: 1px;
  height: 1.25rem;

  margin: 0 2.25rem;

  background: ${({ theme }) => theme.palette.divider};
`;

export const OpenButton = styled(ButtonBase)<OpenButtonProps>`
  width: 2.75rem;
  height: 2.75rem;

  border-radius: 2.75rem;

  position: fixed;
  right: 0.75rem;
  top: 0.5625rem;
  z-index: 4;

  color: ${({ open, theme }) => theme.palette.primary[open ? "main" : "contrastText"]};
  background: ${({ open, theme }) => (open ? "transparent" : theme.palette.primary.light)};

  ${({ theme }) => theme.breakpoints.up("lg")} {
    display: none;
  }
`;

export const UnreadBadge = styled("div")`
  box-sizing: content-box;

  width: 0.4375rem;
  height: 0.4375rem;

  position: absolute;
  top: 0.625rem;
  right: 0.6875rem;

  border-radius: 2.75rem;
  border: 2px solid ${({ theme }) => theme.palette.primary.light};

  background: ${({ theme }) => theme.palette.info.main};
`;
