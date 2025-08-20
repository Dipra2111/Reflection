import React from "react";

const sleepArticles = [
  {
    title: "Top 15 Proven Tips to Sleep Better at Night",
    description:
      "This article lists 16 evidence-based tips to sleep better at night. Getting good sleep is very important for optimal health.",
    image: "https://i.pinimg.com/736x/21/0c/4f/210c4feee0c98dda7e32a804b313c318.jpg",
  },
  {
    title: "What Does Melatonin Do, and How Does It Work?",
    description:
      "Learn about the effectiveness of melatonin for sleep. Discover whether supplements are safe, melatonin’s role in pregnancy...",
    image: "https://i.pinimg.com/736x/6c/bf/6d/6cbf6d9f761fbafbe0e42ce7d064db5d.jpg",
  },
  {
    title: "12 Healthy Sleep Hygiene Tips",
    description:
      "Sleep hygiene is about having healthy sleep habits. Learn which behaviors, both during the day and around bedtime, can affect...",
    image: "https://i.pinimg.com/736x/7e/89/5d/7e895db4148e3b66907d0b97fe8ce398.jpg",
  },
  {
    title: "Why Am I So Tired, but Can’t Sleep?",
    description:
      "Still can’t sleep, even when you’re dead tired? Here are some expert-supported tips on how to get a restful night’s sleep, no...",
    image: "https://i.pinimg.com/736x/39/8d/d8/398dd828c35e7f46bf3c221cbdbb0b7e.jpg",
  },
];

const Sleep = () => {
  return (
    <div className="px-6 py-10 bg-lime-200  mx-auto">
      <h1 className="text-center text-2xl font-bold border-b pb-3 mb-8 uppercase">Sleep Better With Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sleepArticles.map((article, idx) => (
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
              <h3 className="font-semibold text-lg text-black hover:text-blue-700 cursor-pointer">
                {article.title}
              </h3>
              <p className="text-base text-gray-700 mt-2">
                {article.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sleep;
