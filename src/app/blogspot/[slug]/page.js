"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Slug = () => {
    const [Blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null); // State for error handling
    const { slug } = useParams();

    useEffect(() => {
        if (!slug) return; // Ensure slug is available before fetching

        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/getblogs/${slug}`);
                if (!response.ok) throw new Error("Failed to fetch blog");
                const parsed = await response.json();
                setBlogs(parsed);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog. Please try again later.");
            }
        };

        fetchBlog();
    }, [slug]); // Add slug as a dependency

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>;
    }

    if (!Blogs) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <>
            <div>
                <h1 className="text-3xl text-center my-3.5 font-bold">{Blogs.Name}</h1>
            </div>
            <div className="p-5 text-center">
                <p>{Blogs.Description}</p>
            </div>
        </>
    );
};

export default Slug;