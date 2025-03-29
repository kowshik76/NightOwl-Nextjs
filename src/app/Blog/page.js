"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => a.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Add dependency array to ensure it runs only once
  return (
    <div>
      <div>
        <div className="h-40vh w-100vh mt-8">
          <div className="flex flex-col justify-center items-center">
            {/* Blog 1 */}
            {blogs.map((blogitem) => {
              return (
                <Link href={`/blogspot/${blogitem.slug}`} key={blogitem.slug}>
                  <div className="h-40 w-100 m-5 rounded-2xl border-2 border-white transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer">
                    <h4 className="text-center m-5 font-bold">
                      {blogitem.Name}
                    </h4>
                    <p className="text-center m-5">
                      {blogitem.Description.substr(0, 100)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
