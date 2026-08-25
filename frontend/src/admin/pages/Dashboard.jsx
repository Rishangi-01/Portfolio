import React from "react";

const Dashboard = () => {
  const cards = [
    {
      title: "Projects",
      value: 10,
    },
    {
      title: "Messages",
      value: 25,
    },
    {
      title: "Skills",
      value: 15,
    },
    {
      title: "Visitors",
      value: 1250,
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl p-6 shadow"
          >
            <p className="text-gray-500">
              {card.title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;