import React from "react";

interface HeaderProps {
  title: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({title, className}) => {
  return (
      <header id="header" className={className}>
      <h1>{title}</h1>
    </header>
  );
};
