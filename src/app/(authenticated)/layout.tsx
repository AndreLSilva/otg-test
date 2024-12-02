"use client";

import { AppNavigation } from "@/features/app-header/components/app-navigation/AppNavigation";
import { ReactNode } from "react";
import {
  LayoutAppHero,
  LayoutContainer,
  LayoutNotificationsDrawer,
  LayoutPageContent,
} from "./authenticated.styles";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <LayoutContainer>
      <AppNavigation />
      <LayoutAppHero />
      <LayoutPageContent>
        <main>{children}</main>
      </LayoutPageContent>
      <LayoutNotificationsDrawer />
    </LayoutContainer>
  );
}
