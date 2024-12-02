import LogoThumb from "@/assets/logo-thumb.svg";
import { routes } from "@/constants/routes";
import { Button } from "@/design-system/atoms/button/Button";
import { Close, Menu, MoreVert } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AppNavigationModal } from "../app-navigation-modal/AppNavigationModal";
import {
  Container,
  CorpButton,
  LogoButton,
  MenuButton,
  NavButton,
  NavContainer,
  UserCard,
} from "./AppNavigation.styles";

const data = {
  corporation: {
    logoSrc: "/customer-logo.png",
    displayName: "ACME Corporation",
  },
  user: {
    fullName: "Adriano Lima",
    email: "adriano.lima@acmecorp.com",
  },
};

export function AppNavigation() {
  const [navMenuOpen, setNavMenuOpen] = useState<boolean>(false);

  return (
    <Container>
      <NavContainer>
        <LogoButton href="/" aria-label="Início">
          <Image src={LogoThumb} alt="" />
        </LogoButton>

        <MenuButton
          variant="text"
          color="primaryAlt"
          startIcon={navMenuOpen ? Close : Menu}
          iconSize="1.5rem"
          onClick={() => setNavMenuOpen((c) => !c)}
        />

        <NavButton component={Link} href={routes.researches}>
          Pesquisas
        </NavButton>
        <NavButton component={Link} href={routes.credits}>
          Créditos
        </NavButton>
        <NavButton component={Link} href={routes.campaigns}>
          Campanhas
        </NavButton>
        <NavButton component={Link} href={routes.team}>
          Equipe
        </NavButton>
        <NavButton component={Link} href={routes.settings}>
          Configurações
        </NavButton>
      </NavContainer>

      <CorpButton component={Link} href={routes.customer("customer-id")}>
        <Image src={data.corporation.logoSrc} alt="" width={34} height={34} />
        {data.corporation.displayName}
      </CorpButton>

      <UserCard>
        <div>
          <Typography variant="body2">{data.user.fullName}</Typography>
          <Typography variant="body2" fontWeight="400" color="textSecondary">
            {data.user.email}
          </Typography>
        </div>
        <Button variant="text" color="primaryAlt" startIcon={MoreVert} iconSize="1.5rem" />
      </UserCard>

      <AppNavigationModal open={navMenuOpen} onClose={setNavMenuOpen} />
    </Container>
  );
}
