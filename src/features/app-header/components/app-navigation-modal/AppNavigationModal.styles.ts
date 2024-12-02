import { ButtonBase, Modal, styled } from "@mui/material";

export const Container = styled(Modal)`
  z-index: 3;
`;

export const Content = styled("div")`
  position: fixed;
  top: 3.875rem;
  left: 0;
  right: 0;

  background: ${({ theme }) => theme.palette.background.default};
`;

export const CustomerCard = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  height: 4.875rem;

  padding: 0 0.75rem;
`;

export const NavContainer = styled("nav")`
  background: ${({ theme }) => theme.palette.background.paper};
`;

export const NavButton = styled(ButtonBase)`
  display: flex;
  align-items: center;

  height: 3.125rem;

  border-top: 1px solid ${({ theme }) => theme.palette.divider};

  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.text.secondary};

  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  }
` as typeof ButtonBase;

export const UserContainer = styled("div")`
  padding: 2rem 1rem 1rem 1rem;

  text-align: center;

  background: ${({ theme }) => theme.palette.background.paper};

  & > p:first-of-type {
    margin-bottom: 0.25rem;
  }
`;

export const LogoutButton = styled(ButtonBase)`
  width: 100%;
  max-width: 11.5rem;

  margin-top: 1.75rem;
  padding: 0.875rem 0;

  border-top: 1px solid ${({ theme }) => theme.palette.divider};

  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  font-weight: 500;
`;
