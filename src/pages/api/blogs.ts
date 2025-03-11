import { NextApiRequest, NextApiResponse } from "next";
import { blogs as allBlogs } from "#site/content"; // ✅ Use the same import as home page

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Enable CORS
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const blogs = allBlogs
      .filter((blog) => blog.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .map((blog) => ({
        title: blog.title,
        slug: blog.slug, // URL-friendly identifier
        date: blog.date,
        category: blog.category || "General",
      }));

    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
