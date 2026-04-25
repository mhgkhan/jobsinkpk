import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="hero">

        <div className="container mx-auto py-20">
          <h1 className="my-2 text-3xl text-left font-bold md:w-[50%] w-full">Latest Jobs in Pakistan 2026</h1>
          <p className="my-2 text-lg md:w-[50%] w-full">
            Find the latest jobs in Pakistan 2026 with daily updates on government, private, and online opportunities. Jobsinkpk helps you explore verified job listings, apply easily, and stay ahead in your career journey.
          </p>
        </div>
      </section>
      <section className="my-5 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold"> Today Latest Jobs </h2>
          <table className="my-5 w-full border border-1 border-gray-300">
            <thead>
              <tr className="my-1 border-b border-gray-400 rounded-md">
                <th className="w-[5%] py-2 px-1 border-r border-gray-400 text-left">S.No</th>
                <th className="w-[70%] py-2 px-1 border-r border-gray-400 text-left">Title</th>
                <th className="w-[15%] py-2 px-1 border-r border-gray-400 text-left">Last Date</th>
                <th className="w-[10%] py-2 px-1 border-r border-gray-400 text-left">Job Details </th>
              </tr>
            </thead>
            <tbody>
              {Array.from([0, 1, 2, 3, 4, 5]).map((ele, ind) => {
                return <tr className="my-1 border-b border-gray-400 rounded-md">
                  <th className="w-[5%] py-2 px-1 border-r border-gray-400 text-left">{ind + 1}</th>
                  <th className="w-[70%] py-2 px-1 border-r border-gray-400 text-left">This is the title of this post </th>
                  <th className="w-[15%] py-2 px-1 border-r border-gray-400 text-left">01/01/2026</th>
                  <th className="w-[10%] py-2 px-1 border-r border-gray-400 text-left"> <Link href="/" className="w-full bg-blue-500 p-2 rounded-lg text-white font-bold">Job Details</Link> </th>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

