import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Container } from "./ViewAllCard.styles";

export function ResearchViewAllCard() {
  return (
    <Container component={Link} href="#">
      <div>
        <Typography component="span" variant="body2" fontWeight="700" align="right">
          Ver todas
          <br />
          <ArrowForward />
        </Typography>
      </div>
    </Container>
  );
}
