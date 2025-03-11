import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";

// Define the blog content directory
const BLOGS_DIR = path.join(process.cwd(), "content", "blog");

// Function to get all blog metadata from MDX files
const getAllBlogs = () => {
  const files = fs.readdirSync(BLOGS_DIR);

  const blogs = files.map((filename) => {
    const filePath = path.join(BLOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent); // Extract frontmatter metadata

    return {
      title: data.title,
      slug: filename.replace(".mdx", ""), // Remove .mdx extension for URL
      date: data.date,
      category: data.category || "General",
    };
  });

  // Sort blogs by date (newest first)
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Allow only GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const blogs = getAllBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
