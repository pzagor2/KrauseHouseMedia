interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-purple bg-opacity-20 rounded-2xl min-h-24 m-2 shadow ${className}`}
      data-testid="card"
    >
      {children}
    </div>
  );
}
