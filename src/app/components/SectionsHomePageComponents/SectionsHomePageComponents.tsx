import React from "react";

type SectionsHomePageComponents = {
  title: string;
  content: string;
};

const SectionsHomePageComponents = ({
  title,
  content,
}: SectionsHomePageComponents) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-white-700">{content}</p>
    </section>
  );
};

export default SectionsHomePageComponents;
