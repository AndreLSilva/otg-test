import { Button } from "@/components/atoms/button/Button";
import { Paper } from "@/components/atoms/paper/Paper";
import { styled, Typography } from "@mui/material";

export const Container = styled(Paper)`
  padding: 1.5rem 0.75rem;

  transition: border-color ease-in-out;
  transition-duration: ${({ theme }) => theme.transitions.duration.shortest}ms;

  &:hover {
    border-color: ${({ theme }) => theme.palette.info.main};

    /* Header */
    & > :first-of-type {
      color: ${({ theme }) => theme.palette.info.main};
    }

    /* Forward button */
    button {
      &::before {
        width: calc(100% + 2px);
      }

      svg {
        color: ${({ theme }) => theme.palette.info.contrastText};
      }
    }
  }
`;

export const Header = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  transition: color ease-in-out;
  transition-duration: ${({ theme }) => theme.transitions.duration.shortest}ms;

  & > svg {
    font-size: 0.875rem;
  }
`;

export const Content = styled("div")`
  display: flex;
  align-items: end;
  gap: 1.25rem;

  margin-top: 1.625rem;
`;

export const Message = styled(Typography)`
  & > b {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export const UnreadBadge = styled("div")`
  width: 0.625rem;
  height: 0.625rem;

  border-radius: 0.625rem;

  position: absolute;
  top: 0.875rem;
  right: 0.75rem;

  background: ${({ theme }) => theme.palette.info.main};
`;

export const ForwardButton = styled(Button)`
  border-color: ${({ theme }) => theme.palette.divider};

  &::before {
    content: "";

    width: 0%;

    border-radius: ${({ theme }) => theme.shape.borderRadius / 16}rem;

    position: absolute;
    top: -1px;
    left: -1px;
    bottom: -1px;

    background: ${({ theme }) => theme.palette.info.main};

    transition: width ease-in-out;
    transition-duration: ${({ theme }) => theme.transitions.duration.shortest}ms;
  }

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    transition: color ease-in-out;
    transition-duration: ${({ theme }) => theme.transitions.duration.shortest}ms;
  }
`;
