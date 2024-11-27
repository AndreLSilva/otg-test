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
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: string;
}

export function Button({
  variant = "contained",
  startIcon = undefined,
  endIcon = undefined,
  color = "primary",
  size = "small",
  fullWidth = false,
  type = "button",
  children,
}: ButtonProps) {
  const isIconButton = startIcon && !endIcon && !children;

  return (
    <MUIButton
      sx={isIconButton ? iconButtonSx : undefined}
      variant={variant}
      startIcon={startIcon && createElement(startIcon)}
      endIcon={endIcon && createElement(endIcon)}
      color={color}
      size={size}
      fullWidth={fullWidth}
      type={type}
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
