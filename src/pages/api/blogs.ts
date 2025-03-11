import { NextApiRequest, NextApiResponse } from 'next';

// Dummy blog data (Replace with a real database or CMS)
const blogs = [
  {
    title: "What makes DeepSeek so special?",
    slug: "1-what-makes-deepSeek-so-special",
    date: "2025-02-21",
    category: "Deepseek",
  },
  {
    title: "Understanding Large Language Models (LLMs)",
    slug: "understanding-large-language-models",
    date: "2025-02-20",
    category: "General",
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(blogs);
}
