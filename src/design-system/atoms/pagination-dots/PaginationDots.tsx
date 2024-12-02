import { range } from "@/utils/array.utils";
import { Container, Dot } from "./PaginationDots.styles";

interface PaginationDotsProps {
  amount: number;
  selected: number;
  onSelect: (index: number) => void;
}

export function PaginationDots({ amount, selected, onSelect }: PaginationDotsProps) {
  return (
    <Container>
      {range(amount).map((i) => (
        <Dot key={i} selected={selected === i} onClick={() => onSelect(i)} />
      ))}
    </Container>
  );
}
