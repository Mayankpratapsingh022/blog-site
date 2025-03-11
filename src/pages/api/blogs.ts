import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

const BLOGS_DIR = path.join(process.cwd(), "content", "blog");

// Function to get all blog files dynamically
const getAllBlogs = () => {
  const files = fs.readdirSync(BLOGS_DIR);

  const blogs = files.map((filename) => {
    const filePath = path.join(BLOGS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Extract metadata from first few lines (Basic Parsing)
    const lines = fileContent.split("\n");
    const metadata: { [key: string]: string } = {};
    
    for (let line of lines) {
      if (line.startsWith("---")) continue; // Skip frontmatter delimiters
      if (line.trim() === "") break; // Stop parsing metadata when empty line is found
      const [key, value] = line.split(":").map((s) => s.trim());
      metadata[key] = value.replace(/"/g, ""); // Remove quotes
    }

    return {
      title: metadata.title || "Untitled",
      slug: filename.replace(".mdx", ""),
      date: metadata.date || "Unknown Date",
      category: metadata.category || "General",
      content: fileContent, // If you need full content
    };
  });

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date
};

// API Route Handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow cross-origin requests
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

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
