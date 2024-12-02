"use client";

import { ReactNode } from "react";
import { Container, ContainerProps } from "./Flex.styles";

interface FlexProps extends ContainerProps {
  children?: ReactNode;
}

export function Flex(props: FlexProps) {
  return <Container {...props} />;
}
