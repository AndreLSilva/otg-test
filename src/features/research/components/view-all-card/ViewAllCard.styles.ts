import { ButtonBase, styled } from "@mui/material";

export const Container = styled(ButtonBase)`
  display: block;

  width: 14.375rem;
  height: 15.125rem;

  margin-top: 1.375rem;
  padding-left: 0rem;

  transition: padding ease-in-out;
  transition-duration: ${({ theme }) => theme.transitions.duration.shortest}ms;

  &:hover {
    padding-left: 0.625rem;

    & > :first-of-type {
      & > span {
        right: 40%;
      }
    }
  }

  & > :first-of-type {
    height: 100%;

    border-radius: 0.375rem;

    position: relative;

    color: ${({ theme }) => theme.palette.primary.contrastText};
    background: ${({ theme }) => theme.palette.primary.main};

    & > span {
      width: fit-content;

      position: absolute;
      right: 50%;
      top: 50%;

      transform: translate(50%, -50%);

      transition: right cubic-bezier(0.05, 1.11, 0.23, 1.45); // Bounce curve
      transition-duration: ${({ theme }) => theme.transitions.duration.short}ms;
    }
  }
` as typeof ButtonBase;
