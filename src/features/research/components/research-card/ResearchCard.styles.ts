import { Card } from "@/components/atoms/card/Card";
import { StarsIcon } from "@/components/atoms/icons/StarsIcon";
import { styled } from "@mui/material";

export const Container = styled(Card)`
  width: 14.375rem;
  height: 15.125rem;
`;

export const Header = styled("div")`
  margin: 1.25rem 1rem;
  border: solid 0 ${({ theme }) => theme.palette.primary.main};
  border-left-width: 0.125rem;
  padding-left: 0.25rem;

  & > :last-child {
    margin-top: 0.25rem;
  }
`;

export const FieldBadge = styled("div")`
  width: 0.5rem;
  height: 0.5rem;

  border-radius: 0.5rem;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  background: ${({ theme }) => theme.palette.tertiary.main};
`;

export const DraftBadge = styled(StarsIcon)`
  margin-left: 0.125rem;
  margin-top: -0.625rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
