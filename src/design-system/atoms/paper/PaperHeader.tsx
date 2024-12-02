import { SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { createElement } from "react";
import { Header } from "./Paper.styles";

interface PaperHeaderProps {
  title: string;
  icon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  border?: boolean;
}

export function PaperHeader({ title, icon = undefined, border = false }: PaperHeaderProps) {
  return (
    <Header border={border}>
      {icon && createElement(icon, { fontSize: "small" })}
      <Typography variant="overline">{title}</Typography>
    </Header>
  );
}
