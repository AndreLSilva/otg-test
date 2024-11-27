import StarsGif from "@/assets/Stars.gif";
import { Button } from "@/components/atoms/button/Button";
import { Add } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "./CallToActionCard.styles";

export function CallToActionCard() {
  return (
    <Container color="secondary">
      <Image
        src={StarsGif}
        alt=""
        width={92}
        height={92}
        style={{ width: "5.75rem", height: "5.75rem" }}
      />
      <Typography
        sx={{ marginTop: "0.25rem", marginBottom: "1rem" }}
        component="p"
        variant="subtitle1"
      >
        Pronto para conhecer seu cliente?
      </Typography>
      <Button endIcon={Add} size="large" fullWidth>
        Nova Pesquisa
      </Button>
    </Container>
  );
}
