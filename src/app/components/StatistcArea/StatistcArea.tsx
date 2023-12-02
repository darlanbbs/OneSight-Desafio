type StatistcAreaProps = {
  title: string;
  value: number;
};

const StatistcArea = ({ title, value }: StatistcAreaProps) => {
  return (
    <div className="text-center mb-4">
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-sm">{title}</div>
    </div>
  );
};

export default StatistcArea;
