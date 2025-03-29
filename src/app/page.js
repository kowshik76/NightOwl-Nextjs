import Head from "next/head";
import { Poppins } from "@next/font/google";


const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Head>
        <title>NightOwl</title>
      </Head>
      {/* Navigation Bar */}

      {/* Hero Section */}
      <div className="flex justify-center">
        <div className="h-10 mt-20">
          <h1 className="font-bold text-2xl">Hello Night Owl</h1>
          <h5 className="font-bold pl-2">Let's Code Together!</h5>
        </div>
      </div>

      {/* Blog Section */}
      <div className="h-40vh w-100vh mt-8">
        <div className="flex flex-col justify-center items-center">
          {/* Blog 1 */}
          <div className="h-40 w-100 m-5 rounded-2xl border-2 border-white transition-all duration-500
          hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer">
            <h4 className="text-center m-5 font-bold">This is the blog 1</h4>
            <p className="text-center m-5">This is the paragraph of the first blog and the matter.</p>
          </div>
          {/* Blog 2 */}
          <div className="h-40 w-100 rounded-2xl border-2 border-white transition-all duration-500
          hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] cursor-pointer">
            <h4 className="text-center m-5 font-bold">This is the blog 2</h4>
            <p className="text-center m-5">This is the paragraph of the second blog and the matter.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
