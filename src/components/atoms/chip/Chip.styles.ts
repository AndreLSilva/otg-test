import { Chip, styled } from "@mui/material";

export const Container = styled(Chip)`
  height: 1.125rem;

  & > .MuiChip-label {
    padding: 0 0.625rem;

    font-size: ${({ theme }) => theme.typography.overline.fontSize};
    line-height: ${({ theme }) => theme.typography.overline.lineHeight};
    font-weight: 700;
  }
`;
