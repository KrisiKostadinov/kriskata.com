import { createElement, ReactNode } from "react";

type PageHeadingProps = {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // H1 по подразбиране
  text: string;
  id?: string;
  className?: string;
  children?: ReactNode;
};

export default function PageHeading({
  tag = "h1",
  text,
  id,
  className = "",
  children,
}: PageHeadingProps) {
  return (
    <div className="bg-secondary py-10 text-white text-center">
      {createElement(
        tag,
        {
          id,
          className: `text-3xl font-extrabold uppercase ${className}`,
        },
        text
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
