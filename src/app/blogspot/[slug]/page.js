"use client";
import { useParams } from 'next/navigation';

const Slug = () => {
    const { slug } = useParams(); 

    return (
        <div>
            <h1>Blog Post: {slug}</h1>
        </div>
    );
};

export default Slug;
