import Button from "@/components/Button/Button";

interface TipButtonProps {
  className?: string;
}

export default function TipButton({ className }: TipButtonProps) {
  return (
    <div data-testid="tip-button">
      <Button className={`font-semibold ${className}`}>
        Tip podfog 1 $KRAUSE
      </Button>
    </div>
  );
}
