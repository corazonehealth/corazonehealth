// Import the blog data
import blogData from "@/constants/blogData";
import Link from "next/link";
import Image from "next/image";

const BlogList = () => {
  return (
    <section className='bg-primary-300 text-white py-24' id='blog'>
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-8">Blogs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((post, index) => (
            <div key={index} className="flex flex-col items-start">
              <Image
                src={post.img}
                width={320}
                height={266}
                alt="blog"
                className="mb-6"
              />
              <p className="text-[12px] uppercase tracking-[3px] mb-1">{post.date}</p>
              <Link href={post.href}>
                <h5 className="h5">{post.title}</h5>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export const runtime = 'edge';

export default BlogList;
