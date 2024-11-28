import { ButtonOwnProps, Button as MUIButton } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { ButtonHTMLAttributes, createElement } from "react";
import { iconButtonSx } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonOwnProps["variant"];
  startIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  endIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  children?: string;
  onClick?: () => void;
}

export function Button({
  variant = "contained",
  startIcon = undefined,
  endIcon = undefined,
  color = "primary",
  size = "small",
  fullWidth = false,
  type = "button",
  disabled = false,
  children = undefined,
  onClick = undefined,
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
      disabled={disabled}
      onClick={() => onClick?.()} // Avoid passing down the event
    >
      {children}
    </MUIButton>
  );
}
