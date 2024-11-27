import { ButtonOwnProps, Button as MUIButton, SxProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { ButtonHTMLAttributes, createElement } from "react";

interface ButtonProps {
  variant?: ButtonOwnProps["variant"];
  startIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  endIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: string;
}

export function Button({
  variant = "contained",
  startIcon = undefined,
  endIcon = undefined,
  color = "primary",
  size = "small",
  type = "button",
  children,
}: ButtonProps) {
  const isIconButton = startIcon && !endIcon && !children;

  return (
    <MUIButton
      variant={variant}
      color={color}
      size={size}
      type={type}
      startIcon={startIcon && createElement(startIcon)}
      endIcon={endIcon && createElement(endIcon)}
      sx={isIconButton ? iconButtonSx : undefined}
    >
      {children}
    </MUIButton>
  );
}

const iconButtonSx: SxProps = {
  padding: 0,
  minWidth: "unset",
  aspectRatio: 1,
};
