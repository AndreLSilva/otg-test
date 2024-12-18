import { ButtonOwnProps } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import Link from "next/link";
import { ButtonHTMLAttributes, createElement, ReactNode } from "react";
import { Container } from "./Button.styles";

interface ButtonProps {
  className?: string;
  variant?: ButtonOwnProps["variant"];
  startIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  endIcon?: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  iconSize?: string;
  color?: ButtonOwnProps["color"];
  size?: ButtonOwnProps["size"];
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export function Button({
  className = undefined,
  variant = "contained",
  startIcon = undefined,
  endIcon = undefined,
  iconSize = undefined,
  color = "primary",
  size = "small",
  fullWidth = false,
  type = "button",
  href = undefined,
  disabled = false,
  children = undefined,
  onClick = undefined,
}: ButtonProps) {
  return (
    <Container
      as={href ? Link : undefined}
      className={className}
      iconButton={!!startIcon && !endIcon && !children}
      iconSize={iconSize}
      variant={variant}
      startIcon={startIcon && createElement(startIcon)}
      endIcon={endIcon && createElement(endIcon)}
      color={color}
      size={size}
      fullWidth={fullWidth}
      type={type}
      href={href}
      disabled={disabled}
      onClick={() => onClick?.()} // Avoid passing down the event
    >
      {children}
    </Container>
  );
}
