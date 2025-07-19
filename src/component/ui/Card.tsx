import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
  className?: string;
}

function CardRoot({ children, className }: CardRootProps) {
  return (
    <div className={`rounded-lg border bg-white shadow-sm p-4 md:x-6 lg:p-8 ${className ?? ''}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: ReactNode }) {
  return <div className="border-b font-semibold p-2">{children}</div>;
}

function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-2">{children}</div>;
}

function CardFooter({ children }: { children: ReactNode }) {
  return <div className="border-t p-2 text-right">{children}</div>;
}

// Compound structure
export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
};
