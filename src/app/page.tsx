import Link from "next/link";
import { Metadata } from "next";
import PageHeader from "@/components/page-header";
import { blogs as allBlogs } from "#site/content";
import { cn, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "All Blogs",
};

export default function Home() {
  const blogs = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  type BlogCategoryMap = { [key: string]: typeof blogs[number][] };
  // Group blogs by category, defaulting to "Individual Blogs" if no category is specified
  const groupedBlogs = blogs.reduce((acc, blog) => {
    const category = blog.category || "Individual Blogs";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(blog);
    return acc;
  }, {} as BlogCategoryMap);
 
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 max-w-5xl flex flex-col gap-4 xl:mt-0">
        <div className="container max-w-5xl py-6 lg:py-10">
          <PageHeader title="All Blogs" description="Hey, this is Mayank – a ML enthusiast. Explore insightful blogs on topics and let's decode ML together!" />
          <hr className="my-8" />
          
          {Object.entries(groupedBlogs).map(([category, categoryBlogs]) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-bold text-primary mb-4">{category} Series Blogs</h3>
              {categoryBlogs.map((blog) => (
                <div key={blog.slug} className="mb-4 flex items-center gap-4">
                  <span className="text-sm text-gray-500 min-w-[120px]">{formatDate(blog.date)}</span>
                  <Link href={`/${blog.slug}`} className="text-lg font-medium transition-colors duration-300 underline text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white">
                    {blog.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link
            href="/blog"
            className={cn(
          
              "text-lg font-medium transition-colors duration-300 underline text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white",
            )}
          >
          All Blogs in One Place
          </Link>
        </div>
      </div>
    </section>
  );
}
