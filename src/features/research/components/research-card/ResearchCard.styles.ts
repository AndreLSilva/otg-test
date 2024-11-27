import { SxProps, Theme } from "@mui/material";

const container: SxProps<Theme> = {
  width: "14.375rem",
  height: "15.125rem",
};

const header: SxProps<Theme> = {
  marginY: "1.25rem",
  marginX: "1rem",
  border: (theme) => `solid 0 ${theme.palette.primary.main}`,
  borderLeftWidth: "0.125rem",
  paddingLeft: "0.25rem",

  "& > :last-child": {
    marginTop: "0.25rem",
  },
};

const fieldBadge: SxProps<Theme> = {
  width: "0.5rem",
  height: "0.5rem",

  borderRadius: "0.5rem",

  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",

  backgroundColor: "tertiary.main",
};

const draftBadge: SxProps<Theme> = {
  color: "secondary.main",
  marginLeft: "0.125rem",
  marginTop: "-0.625rem",
};

export const researchCardStyles = { container, header, fieldBadge, draftBadge };
