import { Tab } from "@mui/material";
import { Container } from "./Tabs.styles";

interface TabsProps {
  value: number;
  tabs: { label: string }[];
  onChange: (value: number) => void;
}

export function Tabs({ value, tabs, onChange }: TabsProps) {
  return (
    <Container value={value} onChange={(_, value) => onChange(value)}>
      {tabs.map(({ label }, i) => (
        <Tab key={i} label={label} />
      ))}
    </Container>
  );
}
