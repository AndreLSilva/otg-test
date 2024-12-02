import { routes } from "@/constants/routes";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Content,
  CustomerCard,
  LogoutButton,
  NavButton,
  NavContainer,
  UserContainer,
} from "./AppNavigationModal.styles";

interface AppNavigationModalProps {
  open: boolean;
  onClose: (open: false) => void;
}

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

export function AppNavigationModal({ open, onClose }: AppNavigationModalProps) {
  return (
    <Container open={open} onClose={() => onClose(false)}>
      <Content>
        <CustomerCard>
          <Image src={data.corporation.logoSrc} alt="" width={34} height={34} />
          <Typography variant="body1" fontWeight="500">
            {data.corporation.displayName}
          </Typography>
        </CustomerCard>

        <NavContainer>
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

        <UserContainer>
          <Typography variant="body1" fontWeight="700">
            {data.user.fullName}
          </Typography>
          <Typography variant="body2" fontWeight="400" color="textSecondary">
            {data.user.email}
          </Typography>

          <LogoutButton>Logout</LogoutButton>
        </UserContainer>
      </Content>
    </Container>
  );
}
