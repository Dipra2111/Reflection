import React from "react";

const articles = [
  {
    title: "What Are the Types of Therapy for Depression?",
    description: "Depression can be treated through a variety of therapeutic techniques.",
    image: "https://i.pinimg.com/736x/86/4b/ce/864bcebe4ade5946ccf5a5d743d0e9b8.jpg",
  },
  {
    title: "How Can I Get Help for Depression?",
    description: "Depression can be debilitating for those who experience it. But there are many effective...",
    image: "https://i.pinimg.com/736x/4c/56/34/4c5634efb425fe60c53dea9c78c1f756.jpg",
  },
  {
    title: "Selective Serotonin Reuptake Inhibitors (SSRIs): What to Know",
    description: "SSRIs are a type of antidepressant. Learn about these commonly prescribed drugs, including...",
    image: "https://i.pinimg.com/736x/51/fe/f2/51fef28f6470f482f22ef3f839e92065.jpg",
  },
  {
    title: "Caring for Yourself Through Depression and Weight Gain",
    description: "Weight gain and depression are linked through several factors. Here's what drives the...",
    image: "https://i.pinimg.com/736x/20/c0/5f/20c05f00e8b0c6c39c264f689575e9ad.jpg",
  },
];

const Depression = () => {
  return (
    <div className="px-6 py-10 bg-lime-200 mx-auto">
       <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Learn About Depression</h1>
        <p className="text-gray-700 mt-2">
          Explore our comprehensive library for all necessary information related to depression.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 flex gap-6 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-lg text-black hover:text-green-700 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-base text-gray-700 mt-2">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Depression;
