import React from "react";

interface TestCardProps {
  title: string;
  tests: number;
  price: string;
  onClick?: () => void;
}

const TestCard: React.FC<TestCardProps> = ({ title, tests, price, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-lg transition duration-200 bg-white"
    >
      <h2 className="text-lg font-semibold text-[#3284DE] mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{tests} Tests</p>
      <p className="text-red-600 font-bold text-xl">{price}</p>
    </div>
  );
};

export default TestCard;
