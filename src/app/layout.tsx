import { AppProviders } from "@/design-system/AppProviders";
import { publicSans } from "@/design-system/theme/theme";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teste On The Go",
  description: "Teste para front-end senior On The Go",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
