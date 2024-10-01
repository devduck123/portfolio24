import React, { ReactNode } from "react";

type BackgroundColor = "primary" | "secondary";

interface ButtonProps {
  bgColor?: BackgroundColor;
  children: ReactNode;
  [key: string]: unknown;
}

export default function Button({ bgColor, children, ...rest }: ButtonProps): React.ReactElement {
  if (bgColor === "secondary") {
    return (
      <button className="button-secondary" {...rest}>
        {children}
      </button>
    );
  }

  return <button {...rest}>{children}</button>;
}
