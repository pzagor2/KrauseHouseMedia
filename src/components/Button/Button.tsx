interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-purple bg-opacity-20 hover:bg-opacity-50 transition rounded-md px-4 py-2 flex items-center gap-x-2 shadow ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
