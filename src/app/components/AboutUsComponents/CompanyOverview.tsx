import React from "react";

type CompanyProps = {
  titleHistory: string;
  history: string;
};

const CompanyOverview = ({ titleHistory, history }: CompanyProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-4">{titleHistory}</h1>
      <p className="text-2xl text-white-700 my-2">{history}</p>
    </div>
  );
};

export default CompanyOverview;
