"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';

const Slug = () => {
    const { slug } = useParams(); 

    return (
        <>
        <div >
        <h1 className='text-3xl text-center my-3.5 font-bold'>Title of the page {slug}</h1>
        
        </div>
        <div className='p-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        </>
    );
};

export default Slug;