import Head from "next/head";
import { Poppins } from "@next/font/google";
import Link from "next/link";
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>NightOwl</title>
      </Head>
      <nav className="font-poppins">
        <ul className="flex gap-10 justify-center p-4 font-bold ">
         <Link href="/"> <li className="cursor-pointer">Home</li></Link>
         <Link href="/blogspot/anything"> <li className="cursor-pointer">Blog</li></Link>
         <Link href="/contact"><li className="cursor-pointer">Contact</li></Link>
         <Link href="/about"><li className="cursor-pointer">About</li></Link>
        </ul>
      </nav>
      <div className="flex justify-center  ">
        <div className="h-10  mt-20">
          <h1 className="font-bold text-2xl ">Hello Night Owl</h1>
          <h5 className="font-bold pl-2"> Lets Code Together !</h5>
        </div>
      </div>
      <div className="h-40vh w-100vh  mt-8">
        <div className="flex flex-col justify-center items-center">
          {/* components for topics  */}
          <div className="border-1 h-40 w-100 m-5  rounded-2xl">
            <h4 className="text-center m-5 font-bold">this is the blog 1</h4>
            <p className="text-center m-5" >this is the para of the first blog and the matter </p>
          </div>
          <div className="border-1 h-40 w-100    rounded-2xl">
          <h4 className="text-center m-5 font-bold">this is the blog 2</h4>
          <p className="text-center m-5">this is the para of the first blog and the matter </p>


          </div>
        </div>
      </div>
    </>
  );
}
