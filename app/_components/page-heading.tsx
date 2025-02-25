import { createElement } from "react";

type PageHeadingProps = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
};

export default function PageHeading({ tag, text }: PageHeadingProps) {
  return (
    <div className="text-white bg-secondary py-10">
      {createElement(
        tag,
        { className: "text-3xl font-extrabold uppercase text-center" },
        text
      )}
    </div>
  );
}
