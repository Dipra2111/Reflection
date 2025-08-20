import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    category: "Aging & Geriatrics",
    title: "Frailty Is Not a Normal Part of Aging",
    slug: "frailty-is-not-a-normal-part-of-aging",
    date: "May 14th 2025",
    readTime: "8 minutes",
    author: "Dr. Carrie Steckl, Ph.D.",
    role: "Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/05/Frailty-is-Not-a-Normal-Part-of-Aging-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2024/05/Carrie-Steckl-1-150x150.jpg",
  },
  {
    category: "Medical Conditions",
    title: "How Diabetes Impacts Mental Health",
    slug: "how-diabetes-impacts-mental-health",
    date: "May 14th 2025",
    readTime: "8 minutes",
    author: "Dr. Carrie Steckl, Ph.D.",
    role: "Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/05/How-Diabetes-Impacts-Mental-Health-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2024/05/Carrie-Steckl-1-150x150.jpg",
  },
  {
    category: "Lifespan Development",
    title: "Social Health and Aging",
    slug: "social-health-and-aging",
    date: "May 14th 2025",
    readTime: "8 minutes",
    author: "Dr. Allan Schwartz, Ph.D.",
    role: "Social Worker, Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/05/Aging-and-Socializing-an-Important-Connection-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2024/05/Allan-N-Schwartz-e1729779968977-150x150.jpg",
  },
  {
    category: "Bipolar Disorder",
    title: "Understanding Bipolar Disorder and Depressive Episodes",
    slug: "understanding-bipolar-disorder-and-depressive-episodes",
    date: "May 14th 2025",
    readTime: "8 minutes",
    author: "Areesha Hosmer",
    role: "Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/04/Common-Questions-About-Dementia-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2025/05/Areesha-Hosmer-150x150.jpg",
  },
  {
    category: "Medical Conditions",
    title: "The Importance of Preventive Medicine for Long-Term Health",
    slug: "importance-of-preventive-medicine",
    date: "Apr 28th 2025",
    readTime: "10 minutes",
    author: "Dr. Briana Casali, Ph.D.",
    role: "Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/04/The-Importance-of-Preventive-Medicine-for-Long-Term-Health-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2025/04/Briana-Casali-150x150.jpeg",
  },
  {
    category: "Bipolar Disorder",
    title: "Living with Bipolar Disorder",
    slug: "living-with-bipolar-disorder",
    date: "Apr 28th 2025",
    readTime: "11 minutes",
    author: "Krista-Lynn Landolfi",
    role: "Writer",
    image: "https://www.mentalhealth.com/wp-content/uploads/2025/04/Living-with-Bipolar-Disorder-768x512.jpeg",
    authorImage: "https://www.mentalhealth.com/wp-content/uploads/2025/03/Krista-Lynn-Landolfi-150x150.jpg",
  },
];

const Library = () => {
  return (
    <div className="bg-lime-200 px-6 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Mental Health Library</h1>
        <p className="text-gray-700 mt-2">
          Explore our comprehensive library of accurate mental health information.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                {article.category}
              </span>
              <h2 className="text-lg font-semibold mt-2 text-gray-900 hover:text-green-700 transition">
                <Link to={`/articles/${article.slug}`}>{article.title}</Link>
              </h2>
              <div className="text-xs text-gray-500 mt-1">
                {article.date} • Est. {article.readTime} read
              </div>

              <div className="flex items-center mt-4">
                <img
                  src={article.authorImage}
                  alt={article.author}
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{article.author}</p>
                  <p className="text-xs text-gray-500">{article.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
